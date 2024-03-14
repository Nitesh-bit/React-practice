import { useState } from "react";
import "./styles.css";

const myArr = [
  "Arpit",
  "Baljit",
  "Archana",
  "Chaman",
  "Nehoan",
  "Bulbul",
  "Kitik",
  "Monas",
  "Loled",
];

export default function App() {
  const [sortBy, setSortBy] = useState("input");

  let sortedArr;

  if (sortBy === "input") {
    sortedArr = myArr;
  } else if (sortBy === "name") {
    sortedArr = myArr.slice().sort();
  }

  return (
    <div className="App">
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
      <h1>
        {sortedArr.map((item) => {
          return <p key={Math.random() * 10000}>{item}</p>;
        })}
      </h1>
    </div>
  );
}
