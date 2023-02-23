import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const body = document.querySelector("body");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      if (body?.classList.contains("container-light")) {
        body?.classList.remove("container-light");
      }
      body?.classList.add("container-dark");
      setTheme("dark");
    } else {
      if (body?.classList.contains("container-dark")) {
        body?.classList.remove("container-dark");
      }
      body?.classList.add("container-light");
      setTheme("light");
    }
  };

  const data = { theme, toggleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
