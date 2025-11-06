"use client";
// tutorial that needs to be converted from pages router: https://dev.to/denilany/using-context-in-nextjs-a-beginner-friendly-guide-3fo0
import { createContext, useState, useContext, useEffect } from "react";
// real use cases for this uses: https://www.npmjs.com/package/next-themes
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
//  Custom Hook just like we did wtih the others
export const useTheme = () => useContext(ThemeContext);
