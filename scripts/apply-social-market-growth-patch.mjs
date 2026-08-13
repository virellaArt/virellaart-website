#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const baseLayoutPath = path.join(root, "src", "layouts", "BaseLayout.astro");
let baseLayout = fs.readFileSync(baseLayoutPath, "utf8");

const attributionMarker = "const attributionKeys = [";
if (!baseLayout.includes(attributionMarker)) {
  const anchor = `</script>\n\n<script is:inline>\ndocument.addEventListener("click", (event) => {`;
  if (!baseLayout.includes(anchor)) {
    throw new Error("BaseLayout attribution insertion marker not found.");
  }

  const attributionScript = `</script>\n\n<script is:inline>\n(() => {\n  const attributionKeys = [\n    "utm_source",\n    "utm_medium",\n    "utm_campaign",\n    "utm_content",\n  ];\n  const currentParams = new URLSearchParams(window.location.search);\n  const attribution = new Map();\n\n  attributionKeys.forEach((key) => {\n    const value = currentParams.get(key);\n    if (value) attribution.set(key, value);\n  });\n\n  if (!attribution.has("utm_source") && document.referrer) {\n    try {\n      const referrerHost = new URL(document.referrer).hostname.toLowerCase();\n      const inferredSource = referrerHost.includes("instagram")\n        ? "instagram"\n        : referrerHost.includes("facebook") || referrerHost.includes("fb.com")\n          ? "facebook"\n          : referrerHost.includes("pinterest")\n            ? "pinterest"\n            : "";\n\n      if (inferredSource) {\n        attribution.set("utm_source", inferredSource);\n        attribution.set("utm_medium", "social");\n      }\n    } catch {\n      // Ignore malformed referrers.\n    }\n  }\n\n  if (!attribution.has("utm_source")) return;\n\n  document.addEventListener(\n    "click",\n    (event) => {\n      const target = event.target;\n      const link =\n        target instanceof Element\n          ? target.closest("a[href]")\n          : null;\n\n      if (!(link instanceof HTMLAnchorElement)) return;\n\n      const rawHref = link.getAttribute("href")?.trim() || "";\n      if (\n        rawHref === "" ||\n        rawHref.startsWith("#") ||\n        rawHref.startsWith("mailto:") ||\n        rawHref.startsWith("tel:") ||\n        rawHref.startsWith("javascript:") ||\n        link.href.includes("wa.me") ||\n        link.href.includes("api.whatsapp.com")\n      ) {\n        return;\n      }\n\n      let destination;\n      try {\n        destination = new URL(link.href, window.location.href);\n      } catch {\n        return;\n      }\n\n      if (destination.origin !== window.location.origin) return;\n\n      attribution.forEach((value, key) => {\n        if (!destination.searchParams.has(key)) {\n          destination.searchParams.set(key, value);\n        }\n      });\n\n      link.href = destination.href;\n    },\n    { capture: true },\n  );\n})();\n</script>\n\n<script is:inline>\ndocument.addEventListener("click", (event) => {`;

  baseLayout = baseLayout.replace(anchor, attributionScript);
  fs.writeFileSync(baseLayoutPath, baseLayout, "utf8");
  console.log("Social attribution propagation added to BaseLayout.");
} else {
  console.log("Social attribution propagation already present.");
}

const marketPagePath = path.join(root, "src", "components", "MarketPage.astro");
let marketPage = fs.readFileSync(marketPagePath, "utf8");

const oldMarketBlock = `const translations = getTranslations(market.language);\nconst whatsappMessage =\n  \`\${market.cta}: \${market.marketName} — \${marketPagePath(market)}\`;\nconst whatsappURL =\n  \`https://wa.me/905539478608?text=\${encodeURIComponent(whatsappMessage)}\`;\nconst canonicalURL = new URL(\n  marketPagePath(market),\n  "https://www.virellaart.com",\n).href;`;

const newMarketBlock = `const translations = getTranslations(market.language);\nconst canonicalURL = new URL(\n  marketPagePath(market),\n  "https://www.virellaart.com",\n).href;\nconst whatsappMessage = [\n  market.cta,\n  "",\n  market.ctaNote,\n  "",\n  canonicalURL,\n].join("\\n");\nconst whatsappURL =\n  \`https://wa.me/905539478608?text=\${encodeURIComponent(whatsappMessage)}\`;`;

if (!marketPage.includes("market.ctaNote,\n  \"\",\n  canonicalURL")) {
  if (!marketPage.includes(oldMarketBlock)) {
    throw new Error("MarketPage WhatsApp block marker not found.");
  }

  marketPage = marketPage.replace(oldMarketBlock, newMarketBlock);
  fs.writeFileSync(marketPagePath, marketPage, "utf8");
  console.log("Market WhatsApp qualification updated.");
} else {
  console.log("Market WhatsApp qualification already present.");
}
