import React from "react";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function CreatePlayer() {
  const [name, setName] = useState("");
  const [hp, setHP] = useState(10);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [pointsLeft, setPointsLeft] = useState(10);

  function handleAttackAdd() {
    if (pointsLeft > 0) {
      setAttack((prevAttack) => prevAttack + 1);
      setPointsLeft((prevPoints) => prevPoints - 1);
    }
  }

  function handleAttackSubtract() {
    if (attack > 0) {
      setAttack((prevAttack) => prevAttack - 1);
      setPointsLeft((prevPoints) => prevPoints + 1);
    }
  }

  function handleDefenseAdd() {
    if (pointsLeft > 0) {
      setDefense((prevDef) => prevDef + 1);
      setPointsLeft((prevPoints) => prevPoints - 1);
    }
  }

  function handleDefenseSubtract() {
    if (defense > 0) {
      setDefense((prevDef) => prevDef - 1);
      setPointsLeft((prevPoints) => prevPoints + 1);
    }
  }

  function handleSpeedAdd() {
    if (pointsLeft > 0) {
      setSpeed((prevSpeed) => prevSpeed + 1);
      setPointsLeft((prevPoints) => prevPoints - 1);
    }
  }

  function handleSpeedSubtract() {
    if (speed > 0) {
      setSpeed((prevSpeed) => prevSpeed - 1);
      setPointsLeft((prevPoints) => prevPoints + 1);
    }
  }
  console.log(name);

  return (
    <>
      <p className="text-3xl font-cursive ml-4 mt-8">Spend: {pointsLeft}</p>
      <div className=" text-center font-cursive">
        <p className="text-5xl">Create Player</p>
        <div className="mt-4 font-cursive text-3xl">
          <div className="flex justify-center">
            Player name:
            <Form className="ml-5 w-2/6">
              <input placeholder="" onChange={(e) => setName(e.target.value)} />
            </Form>
          </div>
          <div>HP: {hp}</div>
          <div>
            Attack: {attack}
            <span className="ml-5">
              <Button.Group>
                <Button
                  compact
                  onClick={handleAttackAdd}
                  disabled={pointsLeft === 0}
                >
                  +1
                </Button>
                <Button
                  compact
                  onClick={handleAttackSubtract}
                  disabled={attack === 0}
                >
                  -1
                </Button>
              </Button.Group>
            </span>
          </div>
          <div>
            Defense: {defense}
            <span className="ml-5">
              <Button.Group>
                <Button
                  compact
                  onClick={handleDefenseAdd}
                  disabled={pointsLeft === 0}
                >
                  +1
                </Button>
                <Button
                  compact
                  onClick={handleDefenseSubtract}
                  disabled={defense === 0}
                >
                  -1
                </Button>
              </Button.Group>
            </span>
          </div>
          <div>
            Speed: {speed}
            <span className="ml-5">
              <Button.Group>
                <Button
                  compact
                  onClick={handleSpeedAdd}
                  disabled={pointsLeft === 0}
                >
                  +1
                </Button>
                <Button
                  compact
                  onClick={handleSpeedSubtract}
                  disabled={speed === 0}
                >
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
