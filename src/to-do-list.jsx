import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTodo((prev) => [...prev, value]);
    setValue("");
  }
  function deleteTodo(id) {
    setTodo((prev) => {
      return prev.filter((val, i) => {
        return i != id;
      });
    });
  }
  return (
    <>
      <h1>To-do-List</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((item, i) => {
          return <Item key={i} id={i} val={item} deleteTodo={deleteTodo} />;
        })}
      </ul>
    </>
  );
}

function Item({ val, id, deleteTodo }) {
  return (
    <>
      <li>{val}</li>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </>
  );
}
