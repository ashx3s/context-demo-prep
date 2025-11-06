"use client";
import Link from "next/link";
import Button from "./Button";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const { user, toggleUserLogin } = useUser();
  return (
    <header className="flex justify-between p-4  bg-stone-900 text-white text-lg">
      <p>
        {user.name} = {user.loggedIn ? "Logged In" : " Logged Out"}
      </p>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:underline">
              Home Page
            </Link>
          </li>
          <li>
            <Link href="optimized" className="hover:underline">
              Optimized Page
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Button text={`Theme ${theme}`} onClick={toggleTheme} />
        <Button
          text="Toggle User"
          onClick={toggleUserLogin}
          variant="secondary"
        />
      </div>
    </header>
  );
}
