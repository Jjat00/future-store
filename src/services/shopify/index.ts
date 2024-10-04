import { Product } from "app/types/Product.model";
import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

type ShopifyApiResponse = {
  products: Product[];
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(shopifyUrls.products.all, {
    headers: {
      "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
    },
  });

  const data: ShopifyApiResponse = await response.json();
  return data.products;
};
