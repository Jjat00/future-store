"use client";
import Image from "next/image";
import styles from "app/sass/global-error.module.sass";

const GlobalError = ({ reset }: ErrorPageProps) => {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image
        src="/images/error.png"
        alt="global error"
        width={500}
        height={500}
      />
      <p className={styles.Error__message}>Al paracer ha ocurrido un error</p>
      <button className={styles.Error__button} onClick={() => reset()}>
        Intentar de nuevo
      </button>
    </main>
  );
};

export default GlobalError;
