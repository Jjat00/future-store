import Image from "next/image";
import styles from "./MainProducts.module.sass";
import type { Product } from "./Product.model";

type ShopifyApiResponse = {
  products: Product[];
};

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOST_NAME}/admin/api/2024-07/products.json`,
    {
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
      },
    }
  );

  const data: ShopifyApiResponse = await response.json();
  return data.products;
};

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
