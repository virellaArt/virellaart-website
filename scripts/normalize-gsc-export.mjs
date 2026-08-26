#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const SITE = "https://www.virellaart.com/";
const argv = process.argv.slice(2);
const valueOf = (name) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : undefined;
};

function fail(message) {
  console.error(`GSC NORMALIZE HATA: ${message}`);
  process.exit(1);
}

function normalizeLabel(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function detectDelimiter(firstLine) {
  const candidates = [",", ";", "\t"];
  const counts = new Map(candidates.map((candidate) => [candidate, 0]));
  let quoted = false;

  for (let index = 0; index < firstLine.length; index += 1) {
    const character = firstLine[index];
    if (character === '"') {
      if (quoted && firstLine[index + 1] === '"') {
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (!quoted && counts.has(character)) {
      counts.set(character, counts.get(character) + 1);
    }
  }

  return candidates.sort((a, b) => counts.get(b) - counts.get(a))[0];
}

function parseCsv(text) {
  const source = String(text).replace(/^\uFEFF/, "");
  const firstLine = source.split(/\r?\n/, 1)[0] ?? "";
  const delimiter = detectDelimiter(firstLine);
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];

    if (character === '"') {
      if (quoted && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (!quoted && character === delimiter) {
      row.push(field.trim());
      field = "";
      continue;
    }

    if (!quoted && (character === "\n" || character === "\r")) {
      if (character === "\r" && source[index + 1] === "\n") index += 1;
      row.push(field.trim());
      field = "";
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      continue;
    }

    field += character;
  }

  if (field || row.length) {
    row.push(field.trim());
    if (row.some((value) => value !== "")) rows.push(row);
  }

  if (rows.length < 2) return [];
  const headers = rows[0].map(normalizeLabel);
  return rows.slice(1).map((values) =>
    Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])),
  );
}

const aliases = {
  value: [
    "top pages", "page", "pages", "en iyi sayfalar", "sayfa", "sayfalar",
    "haufigste seiten", "seite", "seiten", "pages les plus populaires",
    "top queries", "query", "queries", "en iyi sorgular", "sorgu", "sorgular",
    "haufigste suchanfragen", "suchanfrage", "requetes les plus frequentes", "requete",
    "countries", "country", "ulkeler", "ulke", "lander", "land", "pays",
    "dates", "date", "tarihler", "tarih", "datum",
  ],
  clicks: ["clicks", "tiklamalar", "klicks", "clics"],
  impressions: ["impressions", "gosterimler", "impressionen"],
  ctr: ["ctr", "to", "durchschnittliche ctr", "taux de clics"],
  position: ["position", "konum", "durchschnittliche position", "position moyenne"],
};

function fieldValue(row, field) {
  for (const alias of aliases[field]) {
    if (Object.hasOwn(row, alias)) return row[alias];
  }
  return "";
}

function numberValue(value, percent = false, integer = false) {
  let normalized = String(value ?? "").trim().replace(/\s/g, "");
  if (percent) normalized = normalized.replace(/%$/, "");

  if (integer) {
    const number = Number(normalized.replace(/[.,]/g, ""));
    return Number.isFinite(number) ? number : 0;
  }

  if (/^-?\d{1,3}(?:\.\d{3})+(?:,\d+)?$/.test(normalized)) {
    normalized = normalized.replace(/\./g, "").replace(",", ".");
  } else if (/^-?\d+(?:,\d+)$/.test(normalized)) {
    normalized = normalized.replace(",", ".");
  } else {
    normalized = normalized.replace(/,/g, "");
  }

  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

const countryCodes = new Map(Object.entries({
  "united states": "usa", "usa": "usa", "amerika birlesik devletleri": "usa", "vereinigte staaten": "usa", "etats-unis": "usa",
  "united kingdom": "gbr", "uk": "gbr", "birlesik krallik": "gbr", "vereinigtes konigreich": "gbr", "royaume-uni": "gbr",
  "france": "fra", "fransa": "fra", "frankreich": "fra",
  "switzerland": "che", "isvicre": "che", "schweiz": "che", "suisse": "che",
  "germany": "deu", "almanya": "deu", "deutschland": "deu", "allemagne": "deu",
  "canada": "can", "kanada": "can",
  "romania": "rou", "romanya": "rou", "rumanien": "rou", "roumanie": "rou",
  "russia": "rus", "rusya": "rus", "russland": "rus", "russie": "rus",
  "bulgaria": "bgr", "bulgaristan": "bgr", "bulgarien": "bgr", "bulgarie": "bgr",
  "hungary": "hun", "macaristan": "hun", "ungarn": "hun", "hongrie": "hun",
  "italy": "ita", "italya": "ita", "italien": "ita", "italie": "ita",
}));

function normalizeRows(rows, kind) {
  return rows
    .map((row) => {
      const rawValue = fieldValue(row, "value");
      const value = kind === "Countries"
        ? countryCodes.get(normalizeLabel(rawValue)) ?? normalizeLabel(rawValue)
        : rawValue;
      return {
        Value: value,
        Clicks: numberValue(fieldValue(row, "clicks"), false, true),
        Impressions: numberValue(fieldValue(row, "impressions"), false, true),
        CTR: numberValue(fieldValue(row, "ctr"), true),
        Position: numberValue(fieldValue(row, "position")),
      };
    })
    .filter((row) => row.Value);
}

const fileNames = {
  Pages: ["pages.csv", "sayfalar.csv", "seiten.csv"],
  Queries: ["queries.csv", "sorgular.csv", "suchanfragen.csv", "requetes.csv"],
  Countries: ["countries.csv", "ulkeler.csv", "lander.csv", "pays.csv"],
  Dates: ["dates.csv", "tarihler.csv", "datum.csv", "daten.csv"],
};

function findFile(directory, names) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const byName = new Map(entries.filter((entry) => entry.isFile()).map((entry) => [normalizeLabel(entry.name), entry.name]));
  for (const name of names) {
    const match = byName.get(normalizeLabel(name));
    if (match) return path.join(directory, match);
  }
  return undefined;
}

function parseDate(value) {
  const raw = String(value ?? "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const dayFirst = raw.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  if (!dayFirst) return undefined;
  return `${dayFirst[3]}-${dayFirst[2].padStart(2, "0")}-${dayFirst[1].padStart(2, "0")}`;
}

function runSelfTest() {
  const sample = '\uFEFFTop pages,Clicks,Impressions,CTR,Position\n"https://www.virellaart.com/living-rooms/valencia/",12,"1,234",0.97%,8.4\n';
  const rows = parseCsv(sample);
  const normalized = normalizeRows(rows, "Pages");
  assert.equal(normalized.length, 1);
  assert.equal(normalized[0].Clicks, 12);
  assert.equal(normalized[0].Impressions, 1234);
  assert.equal(normalized[0].CTR, 0.97);
  assert.equal(normalized[0].Position, 8.4);
  assert.equal(countryCodes.get("fransa"), "fra");
  assert.equal(parseDate("26.08.2026"), "2026-08-26");
  console.log("GSC_NORMALIZE_SELF_TEST_OK=7");
}

if (argv.includes("--self-test")) {
  runSelfTest();
  process.exit(0);
}

const input = valueOf("--input");
if (!input) fail("--input <Search Console CSV klasoru> zorunludur.");
const inputPath = path.resolve(input);
if (!fs.existsSync(inputPath) || !fs.statSync(inputPath).isDirectory()) {
  fail(`CSV klasoru bulunamadi: ${inputPath}`);
}

const outputPath = path.resolve(
  valueOf("--output") ?? path.join(inputPath, "VIRELLAART-GSC-90D.json"),
);
const result = {
  Property: valueOf("--property") ?? SITE,
  Period: { Start: null, End: null },
  Pages: [],
  Queries: [],
  Countries: [],
  Dates: [],
};

for (const kind of ["Pages", "Queries", "Countries", "Dates"]) {
  const file = findFile(inputPath, fileNames[kind]);
  if (!file) continue;
  const rows = parseCsv(fs.readFileSync(file, "utf8"));
  result[kind] = normalizeRows(rows, kind);
}

if (result.Pages.length === 0) {
  fail("Pages.csv/Sayfalar.csv bulunamadi veya gecerli satir icermiyor.");
}

const dates = result.Dates.map((row) => parseDate(row.Value)).filter(Boolean).sort();
if (dates.length > 0) {
  result.Period.Start = dates[0];
  result.Period.End = dates.at(-1);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");

console.log("GSC EXPORT NORMALIZED");
console.log(`Property: ${result.Property}`);
console.log(`Period: ${result.Period.Start ?? "?"} -> ${result.Period.End ?? "?"}`);
console.log(`Pages: ${result.Pages.length}`);
console.log(`Queries: ${result.Queries.length}`);
console.log(`Countries: ${result.Countries.length}`);
console.log(`Dates: ${result.Dates.length}`);
console.log(`Output: ${outputPath}`);
