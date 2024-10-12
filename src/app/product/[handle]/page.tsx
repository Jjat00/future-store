import { ProductView } from "app/components/product";
import { getProducts } from "app/services/shopify/products";
import { Product } from "app/types/Product.model";

interface propsProduct {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: propsProduct) {
  const { id } = searchParams;

  const products = await getProducts(id);

  return <>{products.length > 0 && <ProductView product={products[0]} />}</>;
}
