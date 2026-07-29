type ProductRouteMap = Record<string, string>;

const productPageSources = import.meta.glob(
  [
    "../pages/living-rooms/*.astro",
    "../pages/dining-rooms/*.astro",
    "../pages/bedrooms/*.astro",
    "../pages/tv-units/*.astro",
  ],
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
) as Record<string, string>;

function extractProductKey(
  source: string,
): string | undefined {
  const dotNotation = source.match(
    /products\.([A-Za-z0-9_]+)/,
  );

  if (dotNotation?.[1]) {
    return dotNotation[1];
  }

  const bracketNotation = source.match(
    /products\[['"]([^'"]+)['"]\]/,
  );

  return bracketNotation?.[1];
}

function createProductRoutes(): ProductRouteMap {
  const routes: ProductRouteMap = {};

  for (
    const [filePath, source]
    of Object.entries(productPageSources)
  ) {
    const normalizedPath =
      filePath.replaceAll("\\", "/");

    const routeMatch = normalizedPath.match(
      /\/pages\/(living-rooms|dining-rooms|bedrooms|tv-units)\/([^/]+)\.astro$/,
    );

    if (!routeMatch) {
      continue;
    }

    const category = routeMatch[1];
    const slug = routeMatch[2];

    if (!category || !slug) {
      continue;
    }

    const productKey =
      extractProductKey(source);

    if (!productKey) {
      console.warn(
        `[routes] Product key bulunamadı: ${normalizedPath}`,
      );

      continue;
    }

    routes[`${category}/${slug}`] =
      productKey;
  }

  return routes;
}

export const productRoutes =
  createProductRoutes();

export const staticRoutes = [
  "",
  "living-rooms",
  "dining-rooms",
  "bedrooms",
  "tv-units",
  "about",
  "manufacturing",
  "contact",
  /* VIRELLAART LOCALIZED POLICY ROUTES */
  "policies/shipping-policy",
  "policies/return-refund-policy",
  "policies/privacy-policy",
  "policies/terms-conditions",
] as const;

export const allRoutes = Array.from(
  new Set([
    ...staticRoutes,
    ...Object.keys(productRoutes),
  ]),
);
