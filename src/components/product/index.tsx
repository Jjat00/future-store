import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import styles from "./ProductView.module.sass";
import { Product } from "app/types/Product.model";
import { SanitizeHTML } from "../shared/SanitizedHTML";

interface ProductViewProps {
  product: Product;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image.src}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.title}</h1>
        <p className={styles.ProductView__info__category}>{product.tags}</p>
        <section className={styles.ProductView__info__description}>
          <SanitizeHTML tag={"p"}>{product.body_html}</SanitizeHTML>
        </section>
        <span className={styles.ProductView__info__price}>
          $ {product?.variants?.[0]?.price || 0}
        </span>
        <ProductViewItemsOrder
          maxQuantity={product?.variants[0].inventory_quantity}
          product={product}
        />
      </section>
    </main>
  );
};
