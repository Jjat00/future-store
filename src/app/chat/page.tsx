import { Chat } from "app/components/chat/chat";
import { getProducts } from "app/services/shopify/products";
import { createAgent } from "app/utils/openai/createAgent";
import { Agent } from "http";

export default async function ChatPage() {

  const products = await getProducts();
  const productTitles = products.map((product) => product.title).join(", ");

  const agent = createAgent(productTitles);

  console.log("🚀 ~ ChatPage ~ productTitles:", agent)

  return (
    <>
      <Chat agent={agent} />
    </>
  );
}
