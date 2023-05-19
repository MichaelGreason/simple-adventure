import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Play() {
  const [roll, setRoll] = useState();
  const navigate = useNavigate();
  const an = [11, 18];
  const [userHP, setUserHP] = useState(10);
  const [enemyHP, setEnemyHP] = useState(10);
  const [userSpeed, setUserSpeed] = useState(5);
  const [enemySpeed, setEnemySpeed] = useState(5);

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
        <div className="flex mb-10">
          <img
            src="/src/temp-img/hero1.png"
            alt="avatar"
            className="h-48 self-center"
          ></img>
          <div className="flex flex-col text-center justify-center">
            <div className="font-cursive text-3xl self-center">Enemy</div>
            <div className="font-cursive text-xl self-center">
              HP: {enemyHP}
            </div>
            <div className="font-cursive text-xl self-center">
              Speed: {enemySpeed}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            onClick={rollDie}
            className="w-1/5 cursor-pointer"
            src="src/temp-img/pngwing.com.png"
          />
          <div className="text-xl font-cursive">
            {an.includes(roll)
              ? `You rolled an ${roll}`
              : `You rolled a ${roll}`}{" "}
          </div>
        </div>
        <div className="flex mt-10">
          <img
            src="/src/temp-img/hero1.png"
            alt="avatar"
            className="h-48 self-center"
          ></img>
          <div className="flex flex-col text-center justify-center">
            <div className="font-cursive text-3xl self-center">User</div>
            <div className="font-cursive text-xl self-center">HP: {userHP}</div>
            <div className="font-cursive text-xl self-center">
              Speed: {userSpeed}
            </div>
          </div>
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
