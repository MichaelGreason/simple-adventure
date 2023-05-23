import React from "react";
import { useState } from "react";

export default function CreatePlayer() {
  const [hp, setHP] = useState(10);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  return (
    <>
      <div className=" text-center">
        <p className="font-cursive text-5xl">Create Player</p>
        <div className="mt-10 font-cursive text-3xl">
          <div>Name: </div>
          <div>HP: {hp}</div>
          <div>Attack: {attack}</div>
          <div>Defense: {defense}</div>
          <div>Speed: {speed}</div>
          <div>Select Weapon</div>
        </div>
      </div>
    </>
  );
}
