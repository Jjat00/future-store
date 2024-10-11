"use client";
import { useSearchParams } from "next/navigation";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  console.log("searchParams", id);
  return <h1>Product Page</h1>;
}
