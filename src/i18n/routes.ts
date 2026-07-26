import { products } from "../data/products";

type ProductRouteMap = Record<string, string>;

function createProductRoutes(): ProductRouteMap {
  const routes: ProductRouteMap = {};

  Object.entries(products).forEach(([key]) => {
    let category = "";
    let slug = "";

    if (key.endsWith("Living")) {
      category = "living-rooms";
      slug = key.replace("Living", "");
    }

    else if (key.endsWith("Dining")) {
      category = "dining-rooms";
      slug = key.replace("Dining", "");
    }

    else if (key.endsWith("Bedroom")) {
      category = "bedrooms";
      slug = key.replace("Bedroom", "");
    }

    else if (key.endsWith("TV")) {
      category = "tv-units";
      slug = key.replace("TV", "");
    }

    if (!category || !slug) return;

    const formattedSlug = slug
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase();

    routes[`${category}/${formattedSlug}`] = key;
  });

  return routes;
}


export const productRoutes = createProductRoutes();


export const staticRoutes = [
  "",
  "living-rooms",
  "dining-rooms",
  "bedrooms",
  "tv-units",
  "about",
  "contact",
] as const;


export const allRoutes = [
  "",
  ...staticRoutes.filter((route) => route !== ""),
  ...Object.keys(productRoutes),
];