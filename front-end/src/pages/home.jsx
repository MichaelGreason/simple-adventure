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
        <div style={{ display: "flex", width: "50%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
              marginLeft: "20%",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
              marginLeft: "20%",
            }}
          >
            <p
              className="text"
              style={{
                marginLeft: "2rem",
              }}
            >
              Wins:
            </p>
            <p
              className="text"
              style={{
                marginLeft: "2rem",
              }}
            >
              Losses:
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          borderRadius: "",
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
        }}
      >
        <button
          style={{
            height: "5rem",
            width: "5rem",
            borderRadius: "50%",
          }}
        >
          Play
        </button>
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
