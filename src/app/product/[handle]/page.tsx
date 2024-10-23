import { ProductView } from "app/components/product";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface propsProduct {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: propsProduct) {
  const { id } = searchParams;

  const products = await getProducts(id);

  return {
    title: products[0].title,
    description: products[0].body_html,
    keywords: products[0].tags,
    openGraph: {
      title: products[0].title,
      description: products[0].body_html,
      url: `https://futureworld.com/product/${products[0].handle}`,
      images: [
        {
          url: products[0].image.src,
          width: 800,
          height: 600,
        },
      ],
    },
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
