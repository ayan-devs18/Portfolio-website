import { useEffect, useState } from "react";

const KEY = "theme";

/**
 * Light/dark mode. The initial class is set by an inline script in
 * _document.js before first paint, so this hook only reads it back and
 * keeps the class, localStorage and state in sync afterwards.
 */
export default function useThemeSwitcher() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setMode(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const setTheme = (next) => {
    setMode(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  };

  return [mode, setTheme];
}
