import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  function handleClick() {
    setIsDisplay(!isDisplay);
  }
  return (
    <>
      <div style={{ width: "200px", height: "30px", backgroundColor: "red" }}>
        This is a test context{" "}
        <button style={{ border: "none" }} onClick={handleClick}>
          {isDisplay ? "-" : "+"}
        </button>
      </div>
      {isDisplay && (
        <div
          style={{ width: "200px", height: "50px", backgroundColor: "yellow" }}
        >
          This is a hidden context
        </div>
      )}
    </>
  );
}

/* OR 

import { useState } from "react";
import "./styles.css";

const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

export default function App() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <div>
      <h2>Accordion</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div
              onClick={() => toggleItem(index)}
              style={{ cursor: "pointer" }}
            >
              <strong>{item.title}</strong>
              {expandedItem === index ? "-" : "+"}
            </div>
            {expandedItem === index && <p>{item.content}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

*/
