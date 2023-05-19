import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import _ from "lodash";

export default function Play() {
  function rollDie() {
    const result = _.random(1, 20);
    console.log(result);
  }

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <img
          onClick={rollDie}
          className="w-1/5 cursor-pointer"
          src="src/temp-img/pngwing.com.png"
        />
        You rolled a
      </div>
    </>
  );
}
