import { useState } from "react";
import React from "react";

export default function Home() {
  let [count, setCount] = useState(0);

  // function addCount() {
  //   setCount((count += 1));
  // }
  // function subtractCount() {
  //   setCount((count -= 1));
  // }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="title">Simple Adventure</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "5rem",
          marginTop: "5rem",
        }}
      >
        <img
          src="/src/temp-img/hero1.png"
          alt="avatar"
          className="avatar"
          style={{
            height: "10rem",
            borderRadius: "50%",
            alignSelf: "center",
          }}
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <p
            className="text"
            style={{
              marginLeft: "2rem",
            }}
          >
            Name:
          </p>
          <p
            className="text"
            style={{
              marginLeft: "2rem",
            }}
          >
            Weapon:
          </p>
        </div>
      </div>
      {/* <div
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
      </div> */}
    </>
  );
}
