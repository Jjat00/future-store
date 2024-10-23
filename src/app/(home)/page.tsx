import { MainProducts } from "app/components/home/MainProductos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future world",
  description: "Empowering Your Tomorrow, Today!",
  keywords: ["future", "technology", "world", "ecommerce"],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
