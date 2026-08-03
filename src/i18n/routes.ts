type ProductRouteMap = Record<string, string>;

const productPageSources = import.meta.glob(
  [
    "../pages/living-rooms/*.astro",
    "../pages/dining-rooms/*.astro",
    "../pages/bedrooms/*.astro",
    "../pages/tv-units/*.astro",
    "../pages/collections/modern/*/*.astro",
  ],
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
) as Record<string, string>;

const blogArticlePageModules = import.meta.glob(
  "../pages/blog/*/index.astro",
);

export const blogArticleRoutes = Object.keys(
  blogArticlePageModules,
)
  .map((filePath) => {
    const normalizedPath =
      filePath.replaceAll("\\", "/");

    const routeMatch = normalizedPath.match(
      /\/pages\/blog\/([^/]+)\/index\.astro$/,
    );

    return routeMatch?.[1]
      ? `blog/${routeMatch[1]}`
      : undefined;
  })
  .filter(
    (route): route is string =>
      Boolean(route),
  );

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
      /\/pages\/((?:living-rooms|dining-rooms|bedrooms|tv-units|collections\/modern\/(?:sofa-sets|dining-rooms|bedrooms|tv-units)))\/([^/]+)\.astro$/,
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

const modernCategoryRoutes = [
  "collections/modern/sofa-sets",
  "collections/modern/dining-rooms",
  "collections/modern/bedrooms",
  "collections/modern/tv-units",
] as const;

const indexableModernCategoryRoutes =
  modernCategoryRoutes.filter((categoryRoute) =>
    Object.keys(productRoutes).some((productRoute) =>
      productRoute.startsWith(`${categoryRoute}/`),
    ),
  );

const noindexModernCategoryRoutes =
  modernCategoryRoutes.filter(
    (categoryRoute) =>
      !indexableModernCategoryRoutes.includes(
        categoryRoute,
      ),
  );

const hasModernProducts =
  indexableModernCategoryRoutes.length > 0;

export const staticRoutes = [
  "",
  "living-rooms",
  "dining-rooms",
  "bedrooms",
  "tv-units",
  "blog",
  ...blogArticleRoutes,
  "collections/luxury-classic",
  "about",
  "manufacturing",
  "contact",
  ...(hasModernProducts
    ? ["collections/modern"]
    : []),
  ...indexableModernCategoryRoutes,
  /* VIRELLAART LOCALIZED POLICY ROUTES */
  "policies/shipping-policy",
  "policies/return-refund-policy",
  "policies/privacy-policy",
  "policies/terms-conditions",
] as const;

export const noindexStaticRoutes = [
  ...(!hasModernProducts
    ? ["collections/modern"]
    : []),
  ...noindexModernCategoryRoutes,
] as const;

export const indexableRoutes = Array.from(
  new Set([
    ...staticRoutes,
    ...Object.keys(productRoutes),
  ]),
);

export const allRoutes = Array.from(
  new Set([
    ...indexableRoutes,
    ...noindexStaticRoutes,
  ]),
);
