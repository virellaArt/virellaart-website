import { products } from "./products";

const diningRoomCatalog = [
  { key: "valenciaDining", slug: "valencia" },
  { key: "deluxDining", slug: "delux" },
  { key: "aspendosDining", slug: "aspendos" },
  { key: "queenDining", slug: "queen" },
  { key: "moonDining", slug: "moon" },
  { key: "vanessaDining", slug: "vanessa" },
  { key: "shawlDining", slug: "shawl" },
  { key: "valderaDining", slug: "valdera" },
  { key: "zumrutDining", slug: "zumrut" },
  { key: "milanoDining", slug: "milano" },
  { key: "milanoBlueDining", slug: "milano-blue" },
  { key: "linaDining", slug: "lina" },
  { key: "zerafetDining", slug: "zerafet" },
  { key: "saltanatDining", slug: "saltanat" },
  { key: "saltanatDiningGreen", slug: "saltanat-green" },
  { key: "sultanGreenDining", slug: "sultan-green" },
] as const;

export const diningRoomModels = diningRoomCatalog.map(
  ({ key, slug }, index) => {
    const product = products[key];

    if (product.category !== "dining-rooms") {
      throw new Error(
        `Wrong Dining Rooms category: ${key} -> ${product.category}`,
      );
    }

    const image = product.images[0];

    if (!image) {
      throw new Error(
        `Missing Dining Rooms image: ${key}`,
      );
    }

    return {
      key,
      number: String(index + 1).padStart(2, "0"),
      name: product.name,
      href: `/dining-rooms/${slug}`,
      image,
      alt: `${product.name} by VIRELLAART`,
    };
  },
);
