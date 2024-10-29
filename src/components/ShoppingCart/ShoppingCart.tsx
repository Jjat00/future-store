"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCart.module.sass";

export const ShoppingCart = () => {
  const [countItems, setCountItems] = useState(0);

  const handleClick = () => {
    setCountItems(countItems + 1);
  };

  return (
    <button className={styles.ShoppingCart} onClick={handleClick}>
      <span className={styles.ShoppingCart__counter}>{countItems}</span>
      <FaShoppingCart />
    </button>
  );
};
