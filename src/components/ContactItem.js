import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ContactItem = ({ name }) => {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      {name} {theme === "dark" ? "nice" : "☀"}
    </div>
  );
};
