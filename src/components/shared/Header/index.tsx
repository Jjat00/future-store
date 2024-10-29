import Link from "next/link";
import { cookies } from "next/headers";

export function Header() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
        {!accessToken ? (
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
