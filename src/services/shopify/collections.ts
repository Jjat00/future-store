import { Product } from "app/types/Product.model";
import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

type ShopifyApiResponse = {
  products: Product[];
};

export const getCollectionProducts = async (id: number) => {
  const response = await fetch(shopifyUrls.collections.products(id), {
    headers: new Headers({
      "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
    }),
  });

  const data: ShopifyApiResponse = await response.json();
  return data.products;
};

export const getCollections = async (): Promise<Collection[]> => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
      }),
    });

    const { smart_collections }: { smart_collections: Collection[] } =
      await response.json();

    if (smart_collections.length > 0) return smart_collections;

    return [];
  } catch (error) {
    console.error("Error fetching collections:", error);
    // Devuelve un array vacío en caso de error
    return [];
  }
};
