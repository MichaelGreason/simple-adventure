import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";

export default function CreatePlayer() {
  const [hp, setHP] = useState(10);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const pointsSpent = attack + defense + speed;
  const [pointsLeft, setPointsLeft] = useState(10);

  function handleAttackAdd() {
    setAttack((prevAttack) => prevAttack + 1);
    setPointsLeft((prevPoints) => prevPoints - 1);
  }
  function handleAttackSubtract() {
    setAttack((prevAttack) => prevAttack - 1);
    setPointsLeft((prevPoints) => prevPoints + 1);
  }
  function handleDefenseAdd() {
    setDefense((prevDef) => prevDef + 1);
    setPointsLeft((prevPoints) => prevPoints - 1);
  }
  function handleDefenseSubtract() {
    setDefense((prevDef) => prevDef - 1);
    setPointsLeft((prevPoints) => prevPoints + 1);
  }
  function handleSpeedAdd() {
    setSpeed((prevSpeed) => prevSpeed + 1);
    setPointsLeft((prevPoints) => prevPoints - 1);
  }
  function handleSpeedSubtract() {
    setSpeed((prevSpeed) => prevSpeed - 1);
    setPointsLeft((prevPoints) => prevPoints + 1);
  }

  return (
    <>
      <p className="text-3xl font-cursive ml-4 mt-8">Spend: {pointsLeft}</p>
      <div className=" text-center font-cursive">
        <p className="text-5xl">Create Player</p>
        <div className="mt-4 font-cursive text-3xl">
          <div>Name: </div>
          <div>HP: {hp}</div>
          <div>
            Attack: {attack}
            <span className="ml-5">
              <Button.Group>
                <Button compact onClick={handleAttackAdd}>
                  +1
                </Button>
                <Button compact onClick={handleAttackSubtract}>
                  -1
                </Button>
              </Button.Group>
            </span>
          </div>
          <div>
            Defense: {defense}
            <span className="ml-5">
              <Button.Group>
                <Button compact onClick={handleDefenseAdd}>
                  +1
                </Button>
                <Button compact onClick={handleDefenseSubtract}>
                  -1
                </Button>
              </Button.Group>
            </span>
          </div>
          <div>
            Speed: {speed}
            <span className="ml-5">
              <Button.Group>
                <Button compact onClick={handleSpeedAdd}>
                  +1
                </Button>
                <Button compact onClick={handleSpeedSubtract}>
                  -1
                </Button>
              </Button.Group>
            </span>
          </div>
          <div>Select Weapon</div>
        </div>
      </div>
    </>
  );
}
