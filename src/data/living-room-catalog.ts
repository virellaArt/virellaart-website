import { products } from "./products";

const livingRoomCatalog = [
  { key: "valencia", slug: "valencia" },
  { key: "aspendos", slug: "aspendos" },
  { key: "delux", slug: "delux" },
  { key: "shawl", slug: "shawl" },
  { key: "queen", slug: "queen" },
  { key: "vizyon", slug: "vizyon" },
  { key: "sena", slug: "sena" },
  { key: "lugano", slug: "lugano" },
  { key: "bahar", slug: "bahar" },
  { key: "alex", slug: "alex" },
  { key: "vanessa", slug: "vanessa" },
  { key: "valdera", slug: "valdera" },
  { key: "zumrut", slug: "zumrut" },
  { key: "milano", slug: "milano" },
  { key: "milanoBlue", slug: "milano-blue" },
  { key: "lina", slug: "lina" },
  { key: "zerafetLiving", slug: "zerafet" },
  { key: "saltanatLiving", slug: "saltanat" },
  {
    key: "saltanatGreenLiving",
    slug: "saltanat-green",
  },
  { key: "sultanLiving", slug: "sultan" },
  { key: "sultanSofa", slug: "sultan-sofa" },
] as const;

export const livingRoomModels =
  livingRoomCatalog.map(
    ({ key, slug }, index) => {
      const product = products[key];

      if (
        product.category !==
        "living-rooms"
      ) {
        throw new Error(
          `Wrong Living Rooms category: ${key}`,
        );
      }

      const image =
        product.images[0];

      if (!image) {
        throw new Error(
          `Missing Living Rooms image: ${key}`,
        );
      }

      const name =
        product.name.replace(
          /\s+Living Room$/,
          "",
        );

      return {
        key,
        number:
          String(index + 1).padStart(
            2,
            "0",
          ),
        name,
        href:
          `/living-rooms/${slug}`,
        image,
        alt:
          `${name} Luxury Living Room Collection by VIRELLAART`,
      };
    },
  );
