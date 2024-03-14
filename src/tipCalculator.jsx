import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const avgTip = (myTip + friendTip) / 2;
  const totalTip = (bill * avgTip) / 100;
  const total = bill + totalTip;

  function reset() {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} billChange={setBill} />
      <MyTip tip={myTip} myTip={setMyTip} />
      <FriendTip tip={friendTip} setTip={setFriendTip} />
      {total > 0 && (
        <>
          <TotalBill total={total} totalTip={totalTip} />
          <Button reset={reset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, billChange }) {
  return (
    <div>
      <label>How much was the Bill?</label>
      <input
        type="text"
        placeholder="0"
        value={bill}
        onChange={(e) => billChange(Number(e.target.value))}
      />
    </div>
  );
}

function MyTip({ tip, myTip }) {
  return (
    <div>
      <label>How did you like the service?</label>
      <select value={tip} onChange={(e) => myTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FriendTip({ tip, setTip }) {
  return (
    <div>
      <label>How did your friend like the service?</label>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalBill({ total, totalTip }) {
  return (
    <div>
      <h3>
        You pay ${total} (${total} + ${totalTip} tip)
      </h3>
    </div>
  );
}

function Button({ reset }) {
  return <button onClick={reset}>Reset</button>;
}

/* 
// CSS

.App {
  font-family: sans-serif;
  text-align: center;
}


*/
