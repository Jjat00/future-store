import { ProductView } from "app/components/product";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface propsProduct {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: propsProduct) {
  const { id } = searchParams;

  const products = await getProducts(id);

  if (!id) {
    redirect("/store");
  }

  return <>{products.length > 0 && <ProductView product={products[0]} />}</>;
}
