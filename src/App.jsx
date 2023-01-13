import reactLogo from "./assets/react.svg";
import "./App.css";
import Square from "./components/Square/Square";
import ThemeIcon from "./components/ThemeIcon/ThemeIcon";

function App() {
  return (
    <div className="main-container">
      <ThemeIcon />
      <Square />
    </div>
  );
}

export default App;
