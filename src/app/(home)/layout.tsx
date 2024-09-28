import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
}
