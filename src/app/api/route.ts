import { getProducts } from "app/services/shopify";

export const GET = async () => {
  const products = await getProducts();

  return Response.json({ products });
};
