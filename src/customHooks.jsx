import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}


// useFetch() custom hook which will be use by many components

import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(
    function () {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    },
    [url]
  );

  return data;
}
