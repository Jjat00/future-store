import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";
import {
  getCollections,
  getCollectionProducts,
} from "app/services/shopify/collections";
import { Product } from "app/types/Product.model";

interface CategoryProps {
  params: {
    categories: string[];
  };
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;

  let products: Product[] = [];

  const collections = await getCollections();

  const selectedCollection = collections.find(
    (collection) => collection.handle === categories?.[0]
  )?.id;

  if (selectedCollection)
    products = await getCollectionProducts(selectedCollection);
  else products = await getProducts();

  return <ProductsWrapper products={products} />;
}
