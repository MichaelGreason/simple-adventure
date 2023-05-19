import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";

export default function Play() {
  function rollDie() {
    const options = {
      method: "GET",
      url: "https://dice-roll-simulator.p.rapidapi.com/custom-die",
      params: { sides: "20" },
      headers: {
        "X-RapidAPI-Key": "e66b370ec4msh98f67ac18fcb312p13c236jsna6a87d6a9095",
        "X-RapidAPI-Host": "dice-roll-simulator.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data); // Handle the response data
      })
      .catch(function (error) {
        console.error(error); // Handle any errors
      });
  }

  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <img
          onClick={rollDie}
          className="w-1/5 cursor-pointer"
          src="src/temp-img/pngwing.com.png"
        />
      </div>
    </>
  );
}
