import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeIcon.css";

const ThemeIcon = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  return (
    <div className="theme-icon">
      <button onClick={handleClick}>ThemeIcon</button>
    </div>
  );
};

export default ThemeIcon;
