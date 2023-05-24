import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Box, Modal } from "@mui/material";

export default function CreatePlayer() {
  const [name, setName] = useState("");
  const [hp, setHP] = useState(10);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [pointsLeft, setPointsLeft] = useState(10);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [basicSword, setBasicSword] = useState();
  const [basicDagger, setBasicDagger] = useState();
  const [basicBattleAxe, setBasicBattleAxe] = useState();
  const [basicBow, setBasicBow] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/weapons/basic", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        setBasicSword(response.data[0]);
        setBasicDagger(response.data[1]);
        setBasicBattleAxe(response.data[2]);
        setBasicBow(response.data[3]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(basicSword);

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
          <div>
            <div>Weapon: </div>
            <Button onClick={handleOpen} size="large">
              <span className=" font-cursive">Select Weapon</span>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-1/3 left-1/3 w-1/3 border-2 border-solid border-black bg-white shadow-lg shadow-black">
                <div
                  id="modal-modal-description"
                  className=" text-center font-cursive text-xl"
                >
                  <div>Basic Sword</div>
                  <img src="src/temp-img/basicsword.png" />
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
