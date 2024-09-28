const getProducts = async () => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOST_NAME}/admin/api/2024-07/products.json`,
    {
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
      },
    }
  );

  return response.json();
};

export const MainProducts = async () => {
  const { products } = await getProducts();

  return (
    <section>
      <h2>MainProducts</h2>
      <p>Products: {products.length}</p>
    </section>
  );
};
