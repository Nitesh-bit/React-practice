import { useRef } from "react";
import "./styles.css";

export default function App() {
  // function handleClick() {
  //   const myDiv = document.getElementById("thisDiv");
  //   myDiv.style.backgroundColor = "aqua";
  // }

  const divRef = useRef(null);

  function handleClick() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    divRef.current.style.backgroundColor = `${randomColor}`;
  }

  return (
    <>
      {/* <div id="thisDiv" style={{ border: "2px solid black" }}> */}
      <div ref={divRef} style={{ border: "2px solid black" }}>
        <p>
          Hi there, this is a testing content for useRef. Thank you, Please
          visit soon!
        </p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}
