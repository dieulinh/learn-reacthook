import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Theme is currently: {theme}
    </button>
  )
}
