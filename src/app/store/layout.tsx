export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Nav de categorias</nav>
      {children}
    </main>
  );
}
