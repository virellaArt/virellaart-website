#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import assert from "node:assert/strict";

const ENGINE_VERSION = "1.3.1";
const SITE_ORIGIN = "https://www.virellaart.com";
const SITE_HOSTS = new Set(["www.virellaart.com", "virellaart.com"]);
const CORE_CATEGORIES = new Set([
  "/living-rooms/",
  "/bedrooms/",
  "/dining-rooms/",
  "/tv-units/",
]);

const TARGET_MARKETS = [
  ["usa", "United States"],
  ["gbr", "United Kingdom"],
  ["fra", "France"],
  ["che", "Switzerland"],
  ["deu", "Germany"],
  ["can", "Canada"],
  ["rou", "Romania"],
  ["rus", "Russia"],
  ["bgr", "Bulgaria"],
  ["hun", "Hungary"],
  ["ita", "Italy"],
];

function die(message) {
  console.error(`HATA: ${message}`);
  process.exit(1);
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function stripTags(value = "") {
  return decodeHtml(String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim();
}

function parseAttrs(tag = "") {
  const result = {};
  const re = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  let match;
  while ((match = re.exec(tag)) !== null) {
    const key = match[1].toLowerCase();
    result[key] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return result;
}

function extractTags(html, name) {
  return [...String(html).matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => m[0]);
}

function normalizeRoute(input) {
  if (!input) return null;
  let raw = decodeHtml(String(input).trim());
  if (!raw) return null;

  let pathname;
  try {
    if (/^https?:\/\//i.test(raw)) {
      const u = new URL(raw);
      pathname = u.pathname;
    } else {
      pathname = raw.split("#", 1)[0].split("?", 1)[0];
    }
  } catch {
    return null;
  }

  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  pathname = pathname.replace(/\/{2,}/g, "/");
  pathname = pathname.replace(/\/index\.html$/i, "/");

  if (pathname === "/index.html") return "/";
  if (pathname === "") return "/";

  if (!path.extname(pathname) && !pathname.endsWith("/")) pathname += "/";
  return pathname;
}

function routeFromHtmlFile(distRoot, file) {
  const rel = path.relative(distRoot, file).split(path.sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel}`;
}

function walkHtml(root) {
  const out = [];
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) out.push(full);
    }
  }
  return out.sort();
}

function hrefToRoute(href) {
  if (!href) return null;
  const raw = decodeHtml(String(href).trim());
  if (!raw || raw.startsWith("#") || /^(?:mailto|tel|javascript|data):/i.test(raw)) return null;

  let u;
  try {
    u = new URL(raw, SITE_ORIGIN);
  } catch {
    return null;
  }

  if (!SITE_HOSTS.has(u.hostname.toLowerCase())) return null;
  if (/\.(?:png|jpe?g|webp|gif|svg|ico|css|js|mjs|xml|txt|pdf|zip|woff2?|ttf|map|json)$/i.test(u.pathname)) {
    return null;
  }
  return normalizeRoute(u.pathname);
}

function collectSchemaTypes(value, out) {
  if (Array.isArray(value)) {
    for (const item of value) collectSchemaTypes(item, out);
    return;
  }
  if (!value || typeof value !== "object") return;

  const type = value["@type"];
  if (typeof type === "string") out.add(type);
  else if (Array.isArray(type)) {
    for (const item of type) if (typeof item === "string") out.add(item);
  }

  for (const child of Object.values(value)) collectSchemaTypes(child, out);
}

function parseHtmlString(html, route = "/") {
  const titleMatch = String(html).match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : "";

  const h1Matches = [...String(html).matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Values = h1Matches.map((m) => stripTags(m[1])).filter(Boolean);

  const metaTags = extractTags(html, "meta");
  let description = "";
  let robots = "";
  for (const tag of metaTags) {
    const a = parseAttrs(tag);
    const name = (a.name || "").toLowerCase();
    if (name === "description" && !description) description = (a.content || "").trim();
    if (name === "robots") robots = `${robots} ${a.content || ""}`.trim();
  }
  const noindex = /(?:^|[\s,])noindex(?:$|[\s,])/i.test(robots);

  const linkTags = extractTags(html, "link");
  let canonical = "";
  const hreflangs = [];
  for (const tag of linkTags) {
    const a = parseAttrs(tag);
    const relTokens = (a.rel || "").toLowerCase().split(/\s+/).filter(Boolean);
    if (relTokens.includes("canonical") && !canonical) canonical = (a.href || "").trim();
    if (relTokens.includes("alternate") && a.hreflang && a.href) {
      hreflangs.push({ hreflang: a.hreflang, href: a.href });
    }
  }

  const htmlTag = extractTags(html, "html")[0] || "";
  const lang = (parseAttrs(htmlTag).lang || "").trim();

  const schemaTypes = new Set();
  let jsonLdBlocks = 0;
  let jsonLdErrors = 0;
  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let sm;
  while ((sm = scriptRe.exec(String(html))) !== null) {
    const a = parseAttrs(`<script ${sm[1]}>`);
    if ((a.type || "").toLowerCase() !== "application/ld+json") continue;
    jsonLdBlocks++;
    const body = sm[2].trim();
    if (!body) {
      jsonLdErrors++;
      continue;
    }
    try {
      collectSchemaTypes(JSON.parse(body), schemaTypes);
    } catch {
      jsonLdErrors++;
    }
  }

  const internalTargets = new Set();
  let whatsapp = false;
  for (const tag of extractTags(html, "a")) {
    const a = parseAttrs(tag);
    const href = a.href || "";
    if (/https?:\/\/(?:wa\.me|api\.whatsapp\.com)\//i.test(href)) whatsapp = true;
    const target = hrefToRoute(href);
    if (target) internalTargets.add(target);
  }

  return {
    route,
    title,
    description,
    h1Count: h1Matches.length,
    h1Values,
    canonical,
    hreflangs,
    lang,
    noindex,
    schemaTypes,
    jsonLdBlocks,
    jsonLdErrors,
    internalTargets,
    whatsapp,
  };
}

function isEnglishProductRoute(route) {
  return /^\/(?:living-rooms|bedrooms|dining-rooms|tv-units)\/[^/]+\/$/.test(route);
}

function isMarketRoute(route) {
  return /^\/markets\/[^/]+\/$/.test(route);
}

function isCommercialRoute(route) {
  return isEnglishProductRoute(route) || CORE_CATEGORIES.has(route) || isMarketRoute(route);
}

function aggregateGscPages(rows = []) {
  const map = new Map();
  for (const row of rows) {
    const route = normalizeRoute(row?.Value);
    if (!route) continue;
    const clicks = Number(row?.Clicks) || 0;
    const impressions = Number(row?.Impressions) || 0;
    const position = Number(row?.Position) || 0;
    const current = map.get(route) || {
      route,
      clicks: 0,
      impressions: 0,
      weightedPosition: 0,
      positionWeight: 0,
      variants: [],
    };
    current.clicks += clicks;
    current.impressions += impressions;
    if (impressions > 0 && position > 0) {
      current.weightedPosition += position * impressions;
      current.positionWeight += impressions;
    }
    if (row?.Value) current.variants.push(String(row.Value));
    map.set(route, current);
  }

  for (const item of map.values()) {
    item.position = item.positionWeight > 0 ? item.weightedPosition / item.positionWeight : 0;
    item.ctr = item.impressions > 0 ? (item.clicks / item.impressions) * 100 : 0;
    delete item.weightedPosition;
    delete item.positionWeight;
  }
  return map;
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const idx = Math.max(0, Math.min(sorted.length - 1, Math.floor((sorted.length - 1) * p)));
  return sorted[idx];
}

function duplicateGroups(pages, key) {
  const map = new Map();
  for (const page of pages) {
    const value = (page[key] || "").trim();
    if (!value) continue;
    const normalized = value.toLocaleLowerCase("en-US");
    const bucket = map.get(normalized) || { value, pages: [] };
    bucket.pages.push(page.route);
    map.set(normalized, bucket);
  }
  return [...map.values()]
    .filter((g) => g.pages.length > 1)
    .sort((a, b) => b.pages.length - a.pages.length || a.value.localeCompare(b.value));
}

function canonicalState(page) {
  if (!page.canonical) return { missing: true, wrongHost: false, mismatch: false };
  try {
    const u = new URL(page.canonical, SITE_ORIGIN);
    const wrongHost = u.protocol !== "https:" || u.hostname.toLowerCase() !== "www.virellaart.com";
    const canonicalRoute = normalizeRoute(u.pathname);
    return {
      missing: false,
      wrongHost,
      mismatch: Boolean(canonicalRoute && canonicalRoute !== page.route),
    };
  } catch {
    return { missing: false, wrongHost: true, mismatch: true };
  }
}

function buildReport({ pages, gsc, gscPath, dataDir }) {
  const gscMap = aggregateGscPages(gsc.Pages || []);
  const indexable = pages.filter((p) => !p.noindex);
  const noindex = pages.filter((p) => p.noindex);
  const routeMap = new Map(pages.map((p) => [p.route, p]));

  const incoming = new Map();
  let graphEdges = 0;
  for (const page of pages) {
    const seen = new Set();
    for (const target of page.internalTargets) {
      if (!routeMap.has(target) || target === page.route || seen.has(target)) continue;
      seen.add(target);
      graphEdges++;
      const bucket = incoming.get(target) || new Set();
      bucket.add(page.route);
      incoming.set(target, bucket);
    }
  }

  const canonicalMissingPages = [];
  const canonicalMismatchPages = [];
  const canonicalWrongHostPages = [];
  for (const page of indexable) {
    const state = canonicalState(page);
    if (state.missing) canonicalMissingPages.push(page.route);
    if (state.mismatch) canonicalMismatchPages.push(page.route);
    if (state.wrongHost) canonicalWrongHostPages.push(page.route);
  }

  const titleMissingPages = indexable.filter((p) => !p.title).map((p) => p.route);
  const descriptionMissingPages = indexable.filter((p) => !p.description).map((p) => p.route);
  const h1MissingPages = indexable.filter((p) => p.h1Count === 0).map((p) => p.route);
  const h1MultiplePages = indexable.filter((p) => p.h1Count > 1).map((p) => p.route);
  const langMissingPages = indexable.filter((p) => !p.lang).map((p) => p.route);
  const hreflangMissingPages = indexable.filter((p) => p.hreflangs.length === 0).map((p) => p.route);
  const jsonLdErrorPages = pages.filter((p) => p.jsonLdErrors > 0).map((p) => ({
    page: p.route,
    errors: p.jsonLdErrors,
    blocks: p.jsonLdBlocks,
  }));

  const enProducts = indexable.filter((p) => isEnglishProductRoute(p.route));
  const productSchemaMissingPages = enProducts
    .filter((p) => !p.schemaTypes.has("Product"))
    .map((p) => p.route);
  const breadcrumbMissingPages = enProducts
    .filter((p) => !p.schemaTypes.has("BreadcrumbList"))
    .map((p) => p.route);
  const productSchemaOnNoindex = noindex
    .filter((p) => p.schemaTypes.has("Product"))
    .map((p) => p.route);

  const titleDupes = duplicateGroups(indexable, "title");
  const descriptionDupes = duplicateGroups(indexable, "description");

  const incomingValues = enProducts.map((p) => incoming.get(p.route)?.size || 0);
  const medianIncoming = percentile(incomingValues, 0.5);
  const p25Incoming = percentile(incomingValues, 0.25);
  const authoritySignals = [];

  for (const page of enProducts) {
    const metrics = gscMap.get(page.route);
    if (!metrics || metrics.impressions < 2) continue;
    const inCount = incoming.get(page.route)?.size || 0;
    if (inCount > medianIncoming) continue;

    const demandScore = Math.min(40, metrics.impressions * 3);
    const rankScore =
      metrics.position > 0 && metrics.position <= 10 ? 20 :
      metrics.position <= 20 ? 12 :
      metrics.position <= 35 ? 6 : 0;
    const authorityGap =
      inCount <= p25Incoming ? 20 :
      inCount <= medianIncoming ? 10 : 0;

    authoritySignals.push({
      score: demandScore + rankScore + authorityGap,
      page: page.route,
      title: page.title,
      incomingPages: inCount,
      outgoingPages: page.internalTargets.size,
      impressions: metrics.impressions,
      clicks: metrics.clicks,
      ctr: metrics.ctr,
      position: metrics.position,
      whatsapp: page.whatsapp,
      evidence: "GSC demand + below-median internal-link authority; review before changing links.",
    });
  }
  authoritySignals.sort((a, b) =>
    b.score - a.score ||
    b.impressions - a.impressions ||
    a.position - b.position ||
    a.page.localeCompare(b.page)
  );

  const queryPageRows = Array.isArray(gsc.QueryPage) ? gsc.QueryPage.length : 0;
  const cannibalization = {
    mode: queryPageRows > 0 ? "QUERY_PAGE_DATA_PRESENT_REVIEW_REQUIRED" : "LIMITED_NO_QUERY_PAGE_DIMENSION",
    queryPageRows,
    actionable: false,
    note:
      queryPageRows > 0
        ? "Query-page data exists, but this module does not auto-change pages; manual query-level review is required."
        : "The snapshot has no query-page joint dimension, so true keyword cannibalization cannot be proven from this dataset.",
  };

  const countryRows = new Map(
    (Array.isArray(gsc.Countries) ? gsc.Countries : []).map((r) => [String(r.Value || "").toLowerCase(), r])
  );
  const targetMarkets = [];
  for (const [code, name] of TARGET_MARKETS) {
    const row = countryRows.get(code);
    if (!row) continue;
    targetMarkets.push({
      code,
      market: name,
      clicks: Number(row.Clicks) || 0,
      impressions: Number(row.Impressions) || 0,
      ctr: Number(row.CTR) || 0,
      position: Number(row.Position) || 0,
    });
  }
  targetMarkets.sort((a, b) => b.impressions - a.impressions || b.clicks - a.clicks);

  const commercialWithoutWhatsapp = indexable
    .filter((p) => isCommercialRoute(p.route) && !p.whatsapp)
    .map((p) => p.route);

  const reviewQueue = [];
  const pushIssue = (severity, type, page, detail) => reviewQueue.push({ severity, type, page, detail });

  for (const page of titleMissingPages.slice(0, 20)) pushIssue("CRITICAL", "TITLE_MISSING", page, "Indexable page has no title.");
  for (const page of canonicalMissingPages.slice(0, 20)) pushIssue("CRITICAL", "CANONICAL_MISSING", page, "Indexable page has no canonical.");
  for (const page of canonicalMismatchPages.slice(0, 20)) pushIssue("HIGH", "CANONICAL_MISMATCH", page, "Canonical route differs from rendered route.");
  for (const page of productSchemaMissingPages.slice(0, 20)) pushIssue("HIGH", "PRODUCT_SCHEMA_MISSING", page, "English product page has no Product schema.");
  for (const page of breadcrumbMissingPages.slice(0, 20)) pushIssue("MEDIUM", "BREADCRUMB_SCHEMA_MISSING", page, "English product page has no BreadcrumbList schema.");
  for (const page of h1MissingPages.slice(0, 20)) pushIssue("HIGH", "H1_MISSING", page, "Indexable page has no H1.");
  for (const page of descriptionMissingPages.slice(0, 20)) pushIssue("MEDIUM", "DESCRIPTION_MISSING", page, "Indexable page has no meta description.");
  for (const item of authoritySignals.slice(0, 10)) {
    pushIssue(
      "REVIEW",
      "INTERNAL_AUTHORITY_SIGNAL",
      item.page,
      `${item.impressions} impressions, position ${item.position.toFixed(2)}, ${item.incomingPages} incoming pages.`
    );
  }

  return {
    engineVersion: ENGINE_VERSION,
    generatedAt: new Date().toISOString(),
    gsc: {
      path: gscPath,
      property: gsc.Property || null,
      period: gsc.Period || null,
      pageRows: Array.isArray(gsc.Pages) ? gsc.Pages.length : 0,
      normalizedPageRows: gscMap.size,
    },
    summary: {
      totalHtml: pages.length,
      indexable: indexable.length,
      noindex: noindex.length,
      englishProductPages: enProducts.length,
      commercialPages: indexable.filter((p) => isCommercialRoute(p.route)).length,
    },
    technical: {
      titleMissing: titleMissingPages.length,
      descriptionMissing: descriptionMissingPages.length,
      h1Missing: h1MissingPages.length,
      h1Multiple: h1MultiplePages.length,
      canonicalMissing: canonicalMissingPages.length,
      canonicalMismatch: canonicalMismatchPages.length,
      canonicalWrongHost: canonicalWrongHostPages.length,
      langMissing: langMissingPages.length,
      hreflangMissing: hreflangMissingPages.length,
      jsonLdErrorPages: jsonLdErrorPages.length,
      duplicateTitleGroups: titleDupes.length,
      duplicateDescriptionGroups: descriptionDupes.length,
      productSchemaMissing: productSchemaMissingPages.length,
      breadcrumbSchemaMissing: breadcrumbMissingPages.length,
      productSchemaOnNoindex: productSchemaOnNoindex.length,
      commercialWithoutWhatsapp: commercialWithoutWhatsapp.length,
      details: {
        titleMissingPages,
        descriptionMissingPages,
        h1MissingPages,
        h1MultiplePages,
        canonicalMissingPages,
        canonicalMismatchPages,
        canonicalWrongHostPages,
        langMissingPages,
        hreflangMissingPages,
        jsonLdErrorPages,
        duplicateTitleGroups: titleDupes.slice(0, 50),
        duplicateDescriptionGroups: descriptionDupes.slice(0, 50),
        productSchemaMissingPages,
        breadcrumbMissingPages,
        productSchemaOnNoindex,
        commercialWithoutWhatsapp,
      },
    },
    internalGraph: {
      edges: graphEdges,
      englishProductMedianIncoming: medianIncoming,
      englishProductP25Incoming: p25Incoming,
      authoritySignals: authoritySignals.slice(0, 50),
    },
    cannibalization,
    markets: {
      targetMarkets,
      note: "Country metrics are property-wide demand signals; this snapshot does not attribute country metrics to individual pages.",
    },
    reviewQueue: reviewQueue.slice(0, 100),
    dataDir,
  };
}

function fmt(n, digits = 2) {
  return Number(n || 0).toFixed(digits);
}

function printReport(report) {
  console.log(`=== VIRELLAART SEO SITE INTELLIGENCE v${ENGINE_VERSION} ===`);
  console.log(`PERIOD: ${report.gsc.period?.Start || "?"} -> ${report.gsc.period?.End || "?"}`);
  console.log(`HTML=${report.summary.totalHtml} | INDEXABLE=${report.summary.indexable} | NOINDEX=${report.summary.noindex} | EN_PRODUCTS=${report.summary.englishProductPages}`);
  console.log("");

  const t = report.technical;
  console.log("=== TECHNICAL HEALTH ===");
  console.log(`TITLE_MISSING=${t.titleMissing} | DESC_MISSING=${t.descriptionMissing} | H1_MISSING=${t.h1Missing} | H1_MULTIPLE=${t.h1Multiple}`);
  console.log(`CANONICAL_MISSING=${t.canonicalMissing} | CANONICAL_MISMATCH=${t.canonicalMismatch} | WRONG_CANONICAL_HOST=${t.canonicalWrongHost} | LANG_MISSING=${t.langMissing}`);
  console.log(`JSONLD_ERROR_PAGES=${t.jsonLdErrorPages} | PRODUCT_SCHEMA_MISSING=${t.productSchemaMissing} | BREADCRUMB_MISSING=${t.breadcrumbSchemaMissing} | PRODUCT_SCHEMA_NOINDEX=${t.productSchemaOnNoindex}`);
  console.log(`DUP_TITLE_GROUPS=${t.duplicateTitleGroups} | DUP_DESC_GROUPS=${t.duplicateDescriptionGroups} | COMMERCIAL_NO_WHATSAPP=${t.commercialWithoutWhatsapp}`);
  console.log("");

  console.log("=== INTERNAL LINK AUTHORITY SIGNALS ===");
  console.log(`GRAPH_EDGES=${report.internalGraph.edges} | PRODUCT_MEDIAN_INCOMING=${report.internalGraph.englishProductMedianIncoming} | PRODUCT_P25_INCOMING=${report.internalGraph.englishProductP25Incoming}`);
  const signals = report.internalGraph.authoritySignals.slice(0, 10);
  if (!signals.length) {
    console.log("No GSC-backed low-authority product signals.");
  } else {
    for (const s of signals) {
      console.log(`${String(s.score).padStart(3)} | IMP ${String(s.impressions).padStart(3)} | POS ${fmt(s.position).padStart(5)} | IN ${String(s.incomingPages).padStart(3)} | ${s.page}`);
    }
  }
  console.log("");

  console.log("=== CANNIBALIZATION STATUS ===");
  console.log(`MODE=${report.cannibalization.mode} | QUERY_PAGE_ROWS=${report.cannibalization.queryPageRows} | ACTIONABLE=${report.cannibalization.actionable}`);
  console.log(`WHY: ${report.cannibalization.note}`);
  console.log("");

  console.log("=== TARGET MARKET DEMAND ===");
  if (!report.markets.targetMarkets.length) {
    console.log("No configured target-market rows found in the GSC snapshot.");
  } else {
    for (const m of report.markets.targetMarkets) {
      console.log(`${m.market.padEnd(15)} | IMP ${String(m.impressions).padStart(3)} | CLK ${String(m.clicks).padStart(2)} | CTR ${fmt(m.ctr).padStart(5)}% | POS ${fmt(m.position).padStart(5)}`);
    }
  }
  console.log("");

  console.log("=== REVIEW QUEUE ===");
  const queue = report.reviewQueue.slice(0, 15);
  if (!queue.length) {
    console.log("No critical or GSC-backed review items found.");
  } else {
    for (const q of queue) console.log(`${q.severity.padEnd(8)} | ${q.type.padEnd(28)} | ${q.page} | ${q.detail}`);
  }
  console.log("");
  console.log(`REPORT: ${path.join(report.dataDir, "seo-intelligence.json")}`);
  console.log("NOTE: Duplicate-title and cannibalization signals are review-only; the engine does not auto-edit pages.");
  console.log("INTELLIGENCE_OK");
}

function runSelfTest() {
  let tests = 0;
  const check = (fn) => { fn(); tests++; };

  check(() => assert.equal(normalizeRoute("https://www.virellaart.com/living-rooms/alex"), "/living-rooms/alex/"));
  check(() => assert.equal(normalizeRoute("/living-rooms/alex/"), "/living-rooms/alex/"));
  check(() => assert.equal(normalizeRoute("/index.html"), "/"));
  check(() => assert.equal(hrefToRoute("https://example.com/x"), null));
  check(() => assert.equal(hrefToRoute("/bedrooms/test"), "/bedrooms/test/"));

  const sample = `<!doctype html><html lang="en"><head>
  <title>Test Product | VIRELLAART</title>
  <meta name="description" content="Test description">
  <link rel="canonical" href="https://www.virellaart.com/living-rooms/test/">
  <link rel="alternate" hreflang="en" href="https://www.virellaart.com/living-rooms/test/">
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Product"},{"@type":"BreadcrumbList"}]}</script>
  </head><body><h1>Test Product</h1><a href="/living-rooms/other/">Other</a><a href="https://wa.me/900000000000">WhatsApp</a></body></html>`;
  const p = parseHtmlString(sample, "/living-rooms/test/");
  check(() => assert.equal(p.title, "Test Product | VIRELLAART"));
  check(() => assert.equal(p.description, "Test description"));
  check(() => assert.equal(p.h1Count, 1));
  check(() => assert.equal(p.lang, "en"));
  check(() => assert.equal(p.noindex, false));
  check(() => assert.equal(p.schemaTypes.has("Product"), true));
  check(() => assert.equal(p.schemaTypes.has("BreadcrumbList"), true));
  check(() => assert.equal(p.internalTargets.has("/living-rooms/other/"), true));
  check(() => assert.equal(p.whatsapp, true));

  const n = parseHtmlString(`<html><head><meta name="robots" content="noindex,follow"></head><body></body></html>`, "/x/");
  check(() => assert.equal(n.noindex, true));

  const g = aggregateGscPages([
    { Value: "https://www.virellaart.com/x", Clicks: 0, Impressions: 2, Position: 4 },
    { Value: "https://www.virellaart.com/x/", Clicks: 1, Impressions: 3, Position: 6 },
  ]).get("/x/");
  check(() => assert.equal(g.impressions, 5));
  check(() => assert.equal(g.clicks, 1));
  check(() => assert.equal(g.position, 5.2));
  check(() => assert.equal(Math.round(g.ctr), 20));
  check(() => assert.equal(parseJsonText("\uFEFF{\"ok\":true}").ok, true));

  console.log(`SELF_TEST_OK tests=${tests}`);
}

function parseJsonText(text) {
  let value = String(text);
  if (value.charCodeAt(0) === 0xFEFF) value = value.slice(1);
  return JSON.parse(value);
}

function readJsonFile(file) {
  const raw = fs.readFileSync(file);
  let text;
  if (raw.length >= 3 && raw[0] === 0xEF && raw[1] === 0xBB && raw[2] === 0xBF) {
    text = raw.subarray(3).toString("utf8");
  } else {
    text = raw.toString("utf8");
  }
  return parseJsonText(text);
}

function main() {
  if (process.argv.includes("--self-test")) {
    runSelfTest();
    return;
  }

  const root = process.cwd();
  const distRoot = path.join(root, "dist");
  if (!fs.existsSync(distRoot) || !fs.statSync(distRoot).isDirectory()) {
    die(`dist bulunamadi: ${distRoot}. Once npm.cmd run build:astro calistirin.`);
  }

  const dataDir = process.env.VIRELLA_SEO_DATA_DIR || path.join(path.dirname(root), "VIRELLAART-SEO-DATA");
  const gscPath = process.env.VIRELLA_GSC_JSON || path.join(dataDir, "VIRELLAART-GSC-90D.json");
  if (!fs.existsSync(gscPath)) die(`GSC JSON bulunamadi: ${gscPath}`);

  let gsc;
  try {
    gsc = readJsonFile(gscPath);
  } catch (error) {
    die(`GSC JSON okunamadi: ${error.message}`);
  }

  const htmlFiles = walkHtml(distRoot);
  if (!htmlFiles.length) die("dist altinda HTML bulunamadi.");

  const pages = [];
  for (const file of htmlFiles) {
    const route = routeFromHtmlFile(distRoot, file);
    const html = fs.readFileSync(file, "utf8");
    pages.push(parseHtmlString(html, route));
  }

  const report = buildReport({ pages, gsc, gscPath, dataDir });

  fs.mkdirSync(dataDir, { recursive: true });
  const reportPath = path.join(dataDir, "seo-intelligence.json");
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  printReport(report);
}

main();
