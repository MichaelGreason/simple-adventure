import { useState } from "react";
import React from "react";

export default function Home() {
  let [count, setCount] = useState(0);

  function addCount() {
    setCount((count += 1));
  }
  function subtractCount() {
    setCount((count -= 1));
  }

  return (
    <>
      <div style={{ background: "blue" }}>
        <h1>Counter: {count} </h1>
      </div>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </>
  );
}
