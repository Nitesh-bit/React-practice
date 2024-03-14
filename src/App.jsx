import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  function handleClick1() {
    if (num < 10) setNum(num + 1);
  }

  function handleClick2() {
    if (num > 0) setNum(num - 1);
  }

  return (
    <>
      <div>{num}</div>
      <button onClick={handleClick1}>Add 1</button>
      <button onClick={handleClick2}>Decrease 1</button>
    </>
  );
}

export default App;
