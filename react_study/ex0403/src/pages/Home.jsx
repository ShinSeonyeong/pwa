import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Home</div>

      <div>
        <h1>count={count}</h1>
        <button onClick={() => setCount(count + 1)}>count증가</button>
      </div>
    </>
  );
}
