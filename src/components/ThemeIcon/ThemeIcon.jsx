import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeIcon.css";
import lunaLogo from "../../assets/luna.svg";
import solLogo from "../../assets/sol.svg";

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
    <div className="theme-icon-container">
      <img
        src={theme === "light" ? lunaLogo : solLogo}
        onClick={handleClick}
        className="theme-icon"
      />
    </div>
  );
};

export default ThemeIcon;
