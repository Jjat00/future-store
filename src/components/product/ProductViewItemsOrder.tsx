"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import styles from "./ProductViewItemsOrder.module.sass";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { type Product } from "app/types/Product.model";

interface ProductViewItemsOrderProps {
  maxQuantity: number;
  product: Product;
}

export const ProductViewItemsOrder = ({
  maxQuantity,
  product,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault();
    addToCart({
      title: product.title,
      price: product.variants[0].price,
      quantity: counter,
      id: product.variants[0].id,
      image: product.image.src,
      merchandiseId: product.variants[0].admin_graphql_api_id,
    });
  };

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.ProductViewItemsOrder__form}
      >
        <button
          className={styles.ProductViewItemsOrder__submit}
          type="submit"
          onClick={handleAddToCart}
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  );
};
