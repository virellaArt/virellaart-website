import {
  languageCodes,
  localizedPath,
} from "../i18n/config";

import { products } from "../data/products";

import {
  allRoutes,
  productRoutes,
} from "../i18n/routes";


const site = "https://www.virellaart.com";


const staticRouteImages: Record<string, string[]> = {
  "": ["/living-room.webp"],
  "living-rooms": ["/living-room.webp"],
  "dining-rooms": ["/dining-room.webp"],
  "bedrooms": ["/bedroom.webp"],
  "tv-units": ["/tv-unit.webp"],
  "about": ["/living-room.webp"],
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


  const urls = allRoutes
    .flatMap((route) =>

      languageCodes.map((language) => {


        const alternates = languageCodes
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

      }),
    )
    .join("");



  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
    ${urls}
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