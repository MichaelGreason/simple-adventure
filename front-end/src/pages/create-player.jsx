import React from "react";
import { useState, useEffect, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Box, Modal, Pagination } from "@mui/material";
import TokenContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreatePlayer() {
  const token = useContext(TokenContext);
  const [name, setName] = useState("");
  const [hp, setHP] = useState(10);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [pointsLeft, setPointsLeft] = useState(10);
  const [weapons, setWeapons] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 1;
  const [selectedWeapon, setSelectedWeapon] = useState({});
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(
    () => {
      axios
        .get("http://127.0.0.1:8000/weapons/basic", {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
          setWeapons(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    axios
      .get("http://127.0.0.1:8000/profile", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      }),
    [token]
  );

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

  function handleChangePage(event, selectedPage) {
    setPage(selectedPage);
  }

  function selectWeapon(weapon) {
    setSelectedWeapon(weapon);
    handleClose();
  }

  console.log(name);
  console.log(attack);
  console.log(defense);
  console.log(speed);
  console.log(selectedWeapon);
  console.log(hp);

  function handlePlayGame() {
    const data = {
      hit_points: hp,
      name: name,
      attack: attack,
      defense: defense,
      speed: speed,
      weapon: selectedWeapon,
    };
    axios
      .patch("http://127.0.0.1:8000/profile", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (weapons)
    return (
      <>
        <p className="text-3xl font-cursive ml-4 mt-8">Spend: {pointsLeft}</p>
        <div className=" text-center font-cursive">
          <p className="text-5xl">Create Player</p>
          <div className="mt-4 font-cursive text-3xl">
            <div className="flex justify-center">
              Player name:
              <Form className="ml-5 w-2/6">
                <input
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                />
              </Form>
            </div>
            <div>HP: {hp}</div>
            <div>
              Attack: {attack}
              <span className="ml-5">
                <Button.Group>
                  <Button
                    compact
                    onClick={handleAttackSubtract}
                    disabled={attack === 0}
                  >
                    -1
                  </Button>
                  <Button
                    compact
                    onClick={handleAttackAdd}
                    disabled={pointsLeft === 0}
                  >
                    +1
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
                    onClick={handleDefenseSubtract}
                    disabled={defense === 0}
                  >
                    -1
                  </Button>
                  <Button
                    compact
                    onClick={handleDefenseAdd}
                    disabled={pointsLeft === 0}
                  >
                    +1
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
                    onClick={handleSpeedSubtract}
                    disabled={speed === 0}
                  >
                    -1
                  </Button>
                  <Button
                    compact
                    onClick={handleSpeedAdd}
                    disabled={pointsLeft === 0}
                  >
                    +1
                  </Button>
                </Button.Group>
              </span>
            </div>
            <div>
              <div>Weapon: </div>
              <Button onClick={handleOpen} size="large">
                <span className=" font-cursive">Select Weapon</span>
              </Button>
              <div>
                <div className="">{selectedWeapon.name}</div>
                {selectedWeapon.name === "Basic Sword" && (
                  <span className="flex justify-center">
                    <img
                      className="w-1/3 center"
                      src="src/temp-img/basicsword.png"
                    />
                  </span>
                )}
                {selectedWeapon.name === "Basic Dagger" && (
                  <span className="flex justify-center">
                    <img
                      className="w-1/3 center"
                      src="src/temp-img/basicdagger.png"
                    />
                  </span>
                )}
                {selectedWeapon.name === "Basic Battle Axe" && (
                  <span className="flex justify-center">
                    <img
                      className="w-1/3 center"
                      src="src/temp-img/basicbattleaxe.png"
                    />
                  </span>
                )}
                {selectedWeapon.name === "Basic Bow" && (
                  <span className="flex justify-center">
                    <img
                      className="w-1/3 center"
                      src="src/temp-img/basicbow.png"
                    />
                  </span>
                )}
                {selectedWeapon && (
                  <div>
                    <div>Attack: {selectedWeapon.attack}</div>
                    <div>Damage: {selectedWeapon.damage}</div>
                    <div>Defense: {selectedWeapon.defense}</div>
                    <div>Speed: {selectedWeapon.speed}</div>
                  </div>
                )}
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=" overflow-auto mb-10"
              >
                <Box className="absolute top-1/4 left-1/3 w-1/3 border-2 border-solid border-black bg-white shadow-lg shadow-black overflow-auto max-w-screen-2xl">
                  <div
                    id="modal-modal-description"
                    className=" text-center font-cursive text-xl"
                  >
                    {weapons
                      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                      .map((weapon, index) => (
                        <div key={index} className=" flex flex-col ">
                          <span className="text-2xl underline">
                            {weapon.name}
                          </span>
                          <span>Attack: {weapon.attack}</span>
                          <span>Damage: {weapon.damage}</span>
                          <span>Defense: {weapon.defense}</span>
                          <span>Speed: {weapon.speed}</span>
                          {weapon.name === "Basic Sword" && (
                            <img src="src/temp-img/basicsword.png" />
                          )}
                          {weapon.name === "Basic Dagger" && (
                            <img src="src/temp-img/basicdagger.png" />
                          )}
                          {weapon.name === "Basic Battle Axe" && (
                            <img src="src/temp-img/basicbattleaxe.png" />
                          )}
                          {weapon.name === "Basic Bow" && (
                            <img src="src/temp-img/basicbow.png" />
                          )}
                          <div className="my-2">
                            <Button
                              compact
                              onClick={() => selectWeapon(weapon)}
                            >
                              Select
                            </Button>
                          </div>
                        </div>
                      ))}
                    <div className="flex justify-center my-2">
                      <Pagination
                        hideNextButton
                        hidePrevButton
                        count={Math.ceil(weapons.length / itemsPerPage)} // Calculate the total number of pages
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                      />
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
            <div className=" flex justify-center mt-20">
              <Button onClick={handlePlayGame}>
                <span className=" font-cursive">PLAY GAME</span>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
}
