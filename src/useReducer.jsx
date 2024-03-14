import { useReducer } from "react";
import "./styles.css";
const initialState = {
  name: "",
  value: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "EnterName":
      return { ...state, name: action.payload };
    case "GetName":
      return { ...initialState, value: action.payload };
    default:
      throw new Error("You are getting a error");
  }
}

export default function App() {
  // const [name, setName] = useState("");
  // const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, value } = state;
  const handleSubmit = (event) => {
    // setName("");
    // setValue(name);
    event.preventDefault();
    dispatch({ type: "GetName", payload: name });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) =>
              dispatch({ type: "EnterName", payload: e.target.value })
            }
          />
        </label>
        <input type="submit" />
      </form>
      <p>Your name is : {value}</p>
    </>
  );
}
