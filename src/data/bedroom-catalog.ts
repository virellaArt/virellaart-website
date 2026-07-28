import { products } from "./products";

const bedroomCatalog = [
  { key: "aspendosBedroom", slug: "aspendos" },
  { key: "deluxBedroom", slug: "delux" },
  { key: "valenciaBedroom", slug: "valencia" },
  { key: "versaceBedroom", slug: "versace" },
  { key: "milanoBedroom", slug: "milano" },
  { key: "milanoBlueBedroom", slug: "milano-blue" },
  { key: "saltanatBedroom", slug: "saltanat" },
  { key: "sultanBedroom", slug: "sultan" },
  { key: "sultanGreenBedroom", slug: "sultan-green" },
  { key: "marsilyaBedroom", slug: "marsilya" },
] as const;

export const bedroomModels = bedroomCatalog.map(
  ({ key, slug }, index) => {
    const product = products[key];

    if (product.category !== "bedrooms") {
      throw new Error(
        `Wrong Bedroom category: ${key} -> ${product.category}`,
      );
    }

    const image = product.images[0];

    if (!image) {
      throw new Error(
        `Missing Bedroom image: ${key}`,
      );
    }

    return {
      key,
      number: String(index + 1).padStart(2, "0"),
      name: product.name,
      href: `/bedrooms/${slug}`,
      image,
      alt: `${product.name} by VIRELLAART`,
    };
  },
);
