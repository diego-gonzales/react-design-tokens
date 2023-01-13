import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const initialTheme = "light";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  const data = { theme, changeTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
