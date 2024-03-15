import { useReducer } from "react";

const initialState = {
  value: "",
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "enteringValue":
      return { ...state, value: action.payload };
    case "todosUpdate":
      return { ...state, todos: [...state.todos, state.value] };
    case "deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((val, i) => {
          return i != action.payload;
        }),
      };
    default:
      throw new Error("Unknown error!");
  }
}

export default function TodoListUseReducer() {
  const [{ value, todos }, dispatch] = useReducer(reducer, initialState);

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: "todosUpdate" });
    dispatch({ type: "enteringValue", payload: "" });
  }
  function deleteTodo(id) {
    dispatch({ type: "deleteTodo", payload: id });
  }
  return (
    <>
      <h1>To-do-List using useReducer</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={value}
          onChange={(e) =>
            dispatch({ type: "enteringValue", payload: e.target.value })
          }
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#c5c5c5",
        }}
      >
        <input type="checkbox" />
        <li style={{ listStyle: "none" }}>{val}</li>
        <button style={{ margin: "10px" }} onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </>
  );
}
