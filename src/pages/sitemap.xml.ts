import {
  languageCodes,
  localizedPath,
} from "../i18n/config";

import { products } from "../data/products";
import {
  getMarketAlternates,
  getMarketXDefault,
  marketPagePath,
  marketPages,
} from "../data/market-pages";

import {
  indexableRoutes,
  localizedBlogRouteLanguages,
  productRoutes,
} from "../i18n/routes";

const site = "https://www.virellaart.com";

const staticRouteImages: Record<string, string[]> = {
  "": ["/living-room.webp"],
  "catalog": ["/living-room.webp"],
  "living-rooms": ["/living-room.webp"],
  "dining-rooms": ["/dining-room.webp"],
  "bedrooms": ["/bedroom.webp"],
  "tv-units": ["/tv-unit.webp"],
  "collections/luxury-classic": [
    "/living-room.webp",
    "/dining-room.webp",
    "/bedroom.webp",
    "/tv-unit.webp",
  ],
  "collections/modern": [
    "/aura-corner-01.webp",
  ],
  "collections/modern/sofa-sets": [
    "/aura-corner-01.webp",
  ],
  "about": ["/about-factory.webp"],
  "press": ["/living-room.webp"],
  "contact": ["/dining-room.webp"],
};

function absoluteURL(
  route: string,
  language: (typeof languageCodes)[number],
) {
  const path = route
    ? `/${route}/`
    : "/";

  const localized = localizedPath(
    path,
    language,
  );

  return new URL(
    localized.replace(/\/?$/, "/"),
    site,
  ).href;
}

function routeImages(
  route: string,
): string[] {
  const productKey =
    productRoutes[
      route as keyof typeof productRoutes
    ];

  if (productKey) {
    return products[
      productKey as keyof typeof products
    ].images;
  }

  return staticRouteImages[route] ?? [];
}

export const GET = () => {
  const sitemapRoutes = Array.from(
    new Set([
      ...indexableRoutes.filter(
        (route) => route !== "manufacturing",
      ),
      "catalog",
    ]),
  );
  const localizedUrls = sitemapRoutes
    .flatMap((route) => {
      const routeLanguages =
        route === "catalog"
          ? (["en"] as const)
          : route in localizedBlogRouteLanguages
          ? localizedBlogRouteLanguages[
              route as keyof typeof localizedBlogRouteLanguages
            ]
          : route === "press" || route === "blog" || route.startsWith("blog/")
            ? (["en"] as const)
            : languageCodes;

      return routeLanguages.map((language) => {
        const alternates = routeLanguages
          .map(
            (alternateLanguage) =>
              `<xhtml:link rel="alternate" hreflang="${alternateLanguage}" href="${absoluteURL(route, alternateLanguage)}" />`,
          )
          .join("");

        const xDefault =
          `<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteURL(route, "en")}" />`;

        const images = routeImages(route)
          .map(
            (image) =>
              `<image:image><image:loc>${new URL(image, site).href}</image:loc></image:image>`,
          )
          .join("");

        return `
        <url>
          <loc>${absoluteURL(route, language)}</loc>
          ${alternates}
          ${xDefault}
          ${images}
        </url>
        `;
      });
    })
    .join("");

  const marketUrls = marketPages
    .map((market) => {
      const location = new URL(
        marketPagePath(market),
        site,
      ).href;
      const alternates = getMarketAlternates(market)
        .map(
          (alternate) =>
            `<xhtml:link rel="alternate" hreflang="${alternate.language}" href="${alternate.href}" />`,
        )
        .join("");
      const xDefault =
        `<xhtml:link rel="alternate" hreflang="x-default" href="${getMarketXDefault(market)}" />`;
      const image =
        `<image:image><image:loc>${new URL("/queen-02.webp", site).href}</image:loc></image:image>`;

      return `
        <url>
          <loc>${location}</loc>
          ${alternates}
          ${xDefault}
          ${image}
        </url>
      `;
    })
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${localizedUrls}
      ${marketUrls}
    </urlset>`;

  return new Response(
    xml,
    {
      headers: {
        "Content-Type":
          "application/xml; charset=utf-8",
      },
    },
  );
};
