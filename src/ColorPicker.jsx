import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("#fff");
  function handleClick() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Color Picker</h1>
      <button onClick={handleClick}>Change color</button>
    </div>
  );
}
