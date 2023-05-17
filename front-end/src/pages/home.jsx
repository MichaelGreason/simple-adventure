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
      <div style={{ textAlign: "center" }}>
        <h1>Counter: {count} </h1>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button style={{ width: "10rem", height: "10rem" }} onClick={addCount}>
          Add
        </button>
        <button
          style={{ width: "10rem", height: "10rem" }}
          onClick={subtractCount}
        >
          Subtract
        </button>
      </div>
    </>
  );
}
