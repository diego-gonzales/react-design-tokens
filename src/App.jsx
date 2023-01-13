import reactLogo from "./assets/react.svg";
import "./App.css";
import Square from "./components/Square/Square";
import ThemeIcon from "./components/ThemeIcon/ThemeIcon";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main-container main-container-${theme}`}>
      <ThemeIcon />
      <Square />
    </div>
  );
}

export default App;
