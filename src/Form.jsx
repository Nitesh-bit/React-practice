import { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setPassword("");
    setIsDisplay(!isDisplay);
  }
  function handleClick() {
    setUsername("");
    setIsDisplay(!isDisplay);
  }
  return (
    <>
      {!isDisplay ? (
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      ) : (
        <>
          <p>Welcome {username}</p>
          <button onClick={handleClick}>Back</button>
        </>
      )}
    </>
  );
}
