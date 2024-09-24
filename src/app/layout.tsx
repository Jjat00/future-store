import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
