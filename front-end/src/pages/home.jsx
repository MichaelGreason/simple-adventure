import { useState } from "react";

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
      <h1 className="header">Counter: {count} </h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </>
  );
}
