import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Play() {
  const [roll, setRoll] = useState();
  const navigate = useNavigate();

  function rollDie() {
    setRoll(_.random(1, 20));
    console.log(roll);
  }

  function handleQuit() {
    navigate("/");
  }

  return (
    <>
      <div className="absolute bottom-5 left-5">
        <Button onClick={handleQuit}>
          <span className="font-cursive">QUIT</span>
        </Button>
      </div>
      <div className=" flex justify-center items-center flex-col h-screen">
        <img
          onClick={rollDie}
          className="w-1/5 cursor-pointer"
          src="src/temp-img/pngwing.com.png"
        />
        <div className="text-xl">You rolled a {roll}</div>
      </div>
    </>
  );
}
