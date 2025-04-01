import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>count={count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          localStorage.setItem("count", count + 1);
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          localStorage.setItem("count", count - 1);
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          setCount(count * 0);
          localStorage.setItem("count", count * 0);
        }}
      >
        리셋
      </button>
    </>
  );
}

export default App;
