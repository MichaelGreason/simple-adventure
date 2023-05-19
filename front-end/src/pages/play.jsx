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
      <div className=" flex justify-center items-center flex-col h-screen">
        <div className="flex flex-col mb-10">
          <div className="font-cursive text-xl">HP:</div>
          <img
            src="/src/temp-img/hero1.png"
            alt="avatar"
            className="h-48 self-center"
          ></img>
        </div>
        <div className="flex items-center justify-center">
          <img
            onClick={rollDie}
            className="w-1/5 cursor-pointer"
            src="src/temp-img/pngwing.com.png"
          />
          <div className="text-xl font-cursive">
            {roll === 11 ? `You rolled an ${roll}` : `You rolled a ${roll}`}{" "}
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <img
            src="/src/temp-img/hero1.png"
            alt="avatar"
            className="mt-10 h-48 self-center"
          ></img>
          <div className="font-cursive text-xl">HP:</div>
        </div>
      </div>
      <div className="absolute bottom-5 left-5">
        <Button color="black" onClick={handleQuit}>
          <span className="font-cursive">QUIT</span>
        </Button>
      </div>
    </>
  );
}
