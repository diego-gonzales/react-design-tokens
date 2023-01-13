import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Square.css";

const Square = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`square square-${theme}`}></div>;
};

export default Square;
