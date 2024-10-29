import Link from "next/link";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export async function Header() {
  const customer = await validateAccessToken();

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
        {!customer?.firstName ? (
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link href="/logout">Logout {customer?.firstName}</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
