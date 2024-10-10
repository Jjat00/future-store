import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: Record<string, string | string[]>;
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  const { searchParams } = props;

  const products = await getProducts();

  console.log("searchParams: ", searchParams);

  return <ProductsWrapper products={products} />;
}
