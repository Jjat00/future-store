import { Product } from "app/types/Product.model";
import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

type ShopifyApiResponse = {
  products: Product[];
};

export const getProducts = async (id?: string): Promise<Product[]> => {
  const apiUrl = id
    ? `${shopifyUrls.products.all}?ids=${id}`
    : shopifyUrls.products.all;

  const response = await fetch(apiUrl, {
    headers: {
      "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
    },
  });

  const data: ShopifyApiResponse = await response.json();
  return data.products;
};

export const getMainProducts = async (): Promise<Product[]> => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: {
      "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
    },
  });

  const data: ShopifyApiResponse = await response.json();
  return data.products;
};
