import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import { useState } from "react";

export default function Play() {
  const [roll, setRoll] = useState();

  function rollDie() {
    setRoll(_.random(1, 20));
    console.log(roll);
  }

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
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
