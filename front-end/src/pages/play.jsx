import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Play({
  setToken,
  playAttack,
  playDefense,
  playSpeed,
  hp,
  name,
  weapon,
  damage,
}) {
  console.log(playAttack);

  const [roll, setRoll] = useState();
  const navigate = useNavigate();
  const an = [11, 18];
  const [enemyHP, setEnemyHP] = useState(10);
  const [enemyDefense, setEnemyDefense] = useState(10);
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
            src="/src/temp-img/ogre.png"
            alt="avatar"
            className="h-48 self-center"
          ></img>
          <div className="flex flex-col text-center justify-center ml-5">
            <div className="font-cursive text-3xl self-center">Enemy</div>
            <div className="font-cursive text-xl self-center">
              HP: {enemyHP}
            </div>
            <div className="font-cursive text-xl self-center">
              Defense: {enemyDefense}
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
            src="/src/temp-img/20sideddie.png"
          />
          <div className="text-2xl font-cursive ml-2">
            {roll > 0
              ? an.includes(roll)
                ? `You rolled an ${roll} `
                : `You rolled a ${roll} `
              : "Roll!"}
          </div>
        </div>
        <div className="flex mt-10">
          <img
            src="/src/temp-img/paladin.png"
            alt="avatar"
            className="h-48 self-center"
          ></img>
          <div className="flex flex-col text-center justify-center ml-5">
            <div className="font-cursive text-3xl self-center">{name}</div>
            <div className="font-cursive text-xl self-center">HP: {hp}</div>
            <div className="font-cursive text-xl self-center">
              Damage: {damage}
            </div>
            <div className="font-cursive text-xl self-center">
              Attack: {playAttack}
            </div>
            <div className="font-cursive text-xl self-center">
              Defense: {playDefense}
            </div>
            <div className="font-cursive text-xl self-center">
              Speed: {playSpeed}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-5">
        <Button color="black" onClick={handleQuit}>
          <span className="font-cursive">QUIT</span>
        </Button>
      </div>
    </>
  );
}
