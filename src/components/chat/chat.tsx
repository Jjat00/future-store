"use client";

import { useChat } from "@ai-sdk/react";
import styles from "./chat.module.sass"

export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '0',
        role: "system",
        content: props.agent,
      },
    ]
  });


  return (
    <main className={styles.Chat}>
      <section>
        {messages.filter(m => m.role !== "system").map((m) => (
          <div key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
};
