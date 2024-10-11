import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.sass";
import { type Product } from "app/types/Product.model";

interface ProductCardInterface {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      href={`/articulo/${product.handle}?id=${product.id}`}
      className={styles.ProductCard__link}
    >
      <article className={styles.ProductCard}>
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />
        <div className={styles.ProductCard__info}>
          <h3>{product.title}</h3>
        </div>
        <span className={styles.ProductCard__priceTag}>
          ${product.variants?.[0]?.price || 0} USD
        </span>
      </article>
    </Link>
  );
};
