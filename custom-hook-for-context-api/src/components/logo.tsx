"use client";

import { useThemeContext } from "@/contexts/theme-context";

export default function Logo() {
  const { theme, setTheme } = useThemeContext();
  return (
    <button
      className="bg-white p-3 text-black w-20 flex justify-center rounded-md m-5"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
    >
      {theme}
    </button>
  );
}
