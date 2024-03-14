import { useState } from "react";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState("ON");
  function handleClick() {
    setToggle((prev) => {
      return prev === "ON" ? "OFF" : "ON";
    });
  }
  return (
    <>
      <h1>Toggle</h1>
      <button onClick={handleClick}>{toggle}</button>
    </>
  );
}
