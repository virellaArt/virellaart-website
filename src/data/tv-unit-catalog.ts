import { products } from "./products";

const tvUnitCatalog = [
  { key: "moontv", slug: "moontv" },
  { key: "aspendosTV", slug: "aspendos" },
  { key: "deluxTV", slug: "delux" },
  { key: "valenciaTV", slug: "valencia" },
  { key: "zumrutTv", slug: "zumrut" },
  { key: "milanoBlueTv", slug: "milano-blue" },
  { key: "milanoTv", slug: "milano" },
] as const;

export const tvUnitModels =
  tvUnitCatalog.map(
    ({ key, slug }, index) => {
      const product = products[key];

      if (product.category !== "tv-units") {
        throw new Error(
          `Wrong TV Unit category: ${key} -> ${product.category}`,
        );
      }

      const image = product.images[0];

      if (!image) {
        throw new Error(
          `Missing TV Unit cover image: ${key}`,
        );
      }

      return {
        key,
        number: String(index + 1).padStart(
          2,
          "0",
        ),
        name: product.name,
        href: `/tv-units/${slug}`,
        image,
        alt: `${product.name} by VIRELLAART`,
      };
    },
  );
