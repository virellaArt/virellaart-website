import {
  languageCodes,
  localizedPath,
} from "../i18n/config";
import { allRoutes } from "../i18n/routes";

const site = "https://www.virellaart.com";

function absoluteURL(route: string, language: (typeof languageCodes)[number]) {
  const path = route ? `/${route}` : "/";
  return new URL(localizedPath(path, language), site).href;
}

export const GET = () => {
  const urls = allRoutes
    .flatMap((route) =>
      languageCodes.map((language) => {
        const alternates = languageCodes
          .map(
            (alternateLanguage) =>
              `<xhtml:link rel="alternate" hreflang="${alternateLanguage}" href="${absoluteURL(route, alternateLanguage)}" />`,
          )
          .join("");

        const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteURL(route, "en")}" />`;

        return `<url><loc>${absoluteURL(route, language)}</loc>${alternates}${xDefault}</url>`;
      }),
    )
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
