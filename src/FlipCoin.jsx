import "./styles.css";
import { useState } from "react";

const coinData = [
  {
    id: 1,
    coinFace: "Heads",
  },
  {
    id: 2,
    coinFace: "Tails",
  },
];

export default function App() {
  const [index, setIndex] = useState(2);
  const [total, setTotal] = useState(0);
  const [head, setHead] = useState(0);

  function handleClick() {
    const newIndex = Math.trunc(Math.random() * 2);
    setIndex(newIndex);
    setTotal(total + 1);

    if (newIndex === 0) {
      setHead(head + 1);
    }
  }

  function resetGame() {
    setIndex(2);
    setTotal(0);
    setHead(0);
  }

  return (
    <div className="App">
      {total !== 5 ? (
        <>
          <h1>{index !== 2 && coinData[index].coinFace}</h1>
          <button onClick={handleClick}>Flip</button>
          <p>
            Out of {total} flips, there have been {head} heads & {total - head}{" "}
            tails
          </p>
        </>
      ) : (
        <>
          <p>{head > total - head ? "Heads" : "Tails"} wins!</p>
          <button onClick={resetGame}>Reset</button>
        </>
      )}
    </div>
  );
}
