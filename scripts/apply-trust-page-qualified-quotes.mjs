import fs from "node:fs";

function replaceOnce(source, before, after, label) {
  const count = source.split(before).length - 1;
  if (count !== 1) {
    throw new Error(`${label}: expected 1 match, found ${count}`);
  }
  return source.replace(before, after);
}

const manufacturingPath = "src/pages/manufacturing.astro";
let manufacturing = fs.readFileSync(manufacturingPath, "utf8");

manufacturing = replaceOnce(
  manufacturing,
  `import {\n  getManufacturingContent,\n} from "../i18n/manufacturing";`,
  `import {\n  getManufacturingContent,\n} from "../i18n/manufacturing";\nimport { getProjectQuotePrompt } from "../i18n/project-quote-prompts";`,
  "manufacturing import",
);

manufacturing = replaceOnce(
  manufacturing,
  `const heroWhatsappURL =\n  \`https://wa.me/905539478608?text=\${encodeURIComponent(\n    content.hero.whatsappMessage,\n  )}\`;\n\nconst ctaWhatsappURL =\n  \`https://wa.me/905539478608?text=\${encodeURIComponent(\n    content.cta.whatsappMessage,\n  )}\`;`,
  `const manufacturingPageURL = new URL(\n  Astro.url.pathname,\n  "https://www.virellaart.com",\n).href;\nconst projectQuotePrompt = getProjectQuotePrompt(language);\nconst heroWhatsappMessage = [\n  content.hero.whatsappMessage,\n  "",\n  projectQuotePrompt,\n  "",\n  manufacturingPageURL,\n].join("\\n");\nconst ctaWhatsappMessage = [\n  content.cta.whatsappMessage,\n  "",\n  projectQuotePrompt,\n  "",\n  manufacturingPageURL,\n].join("\\n");\n\nconst heroWhatsappURL =\n  \`https://wa.me/905539478608?text=\${encodeURIComponent(\n    heroWhatsappMessage,\n  )}\`;\n\nconst ctaWhatsappURL =\n  \`https://wa.me/905539478608?text=\${encodeURIComponent(\n    ctaWhatsappMessage,\n  )}\`;`,
  "manufacturing whatsapp block",
);

fs.writeFileSync(manufacturingPath, manufacturing);

const aboutPath = "src/pages/about.astro";
let about = fs.readFileSync(aboutPath, "utf8");

about = replaceOnce(
  about,
  `import {\n  getLanguageFromPath,\n  getTranslations,\n  localizedPath,\n} from "../i18n/config";`,
  `import {\n  getLanguageFromPath,\n  getTranslations,\n  localizedPath,\n} from "../i18n/config";\nimport { getProjectQuotePrompt } from "../i18n/project-quote-prompts";`,
  "about import",
);

about = replaceOnce(
  about,
  `const whatsappNumber = "905539478608";\nconst fallbackWhatsappMessage = translations.product.whatsappMessage.replace(\n  "{product}",\n  "VIRELLAART",\n);\nconst whatsappMessage =\n  detailed?.whatsappMessage ?? fallbackWhatsappMessage;\nconst whatsappURL =\n  \`https://wa.me/\${whatsappNumber}?text=\${encodeURIComponent(\n    whatsappMessage,\n  )}\`;\n\nconst pageTitle = aboutSeoEntry.title;\nconst pageDescription = aboutSeoEntry.description;\nconst imageAlt = detailed?.alts.factory ?? translations.about.imageAlt;\n\nconst siteOrigin = "https://www.virellaart.com";\nconst canonicalURL = new URL(Astro.url.pathname, siteOrigin).href;`,
  `const whatsappNumber = "905539478608";\nconst siteOrigin = "https://www.virellaart.com";\nconst canonicalURL = new URL(Astro.url.pathname, siteOrigin).href;\nconst fallbackWhatsappMessage = translations.product.whatsappMessage.replace(\n  "{product}",\n  "VIRELLAART",\n);\nconst whatsappMessage = [\n  detailed?.whatsappMessage ?? fallbackWhatsappMessage,\n  "",\n  getProjectQuotePrompt(language),\n  "",\n  canonicalURL,\n].join("\\n");\nconst whatsappURL =\n  \`https://wa.me/\${whatsappNumber}?text=\${encodeURIComponent(\n    whatsappMessage,\n  )}\`;\n\nconst pageTitle = aboutSeoEntry.title;\nconst pageDescription = aboutSeoEntry.description;\nconst imageAlt = detailed?.alts.factory ?? translations.about.imageAlt;`,
  "about whatsapp block",
);

fs.writeFileSync(aboutPath, about);
