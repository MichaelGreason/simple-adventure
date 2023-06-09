import { useContext, useEffect, useState } from "react";
import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import TokenContext from "../context/AuthContext";
import axios from "axios";

export default function Home({ setToken }) {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [hp, setHp] = useState();
  const [weapon, setWeapon] = useState();
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const [speed, setSpeed] = useState();
  const [kills, setKills] = useState();
  const [deaths, setDeaths] = useState();
  const [streak, setStreak] = useState();
  const [weapons, setWeapons] = useState();
  const [open, setOpen] = useState(false);
  const token = useContext(TokenContext);
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
        setName(response.data.name);
        setHp(response.data.hit_points);
        setWeapon(response.data.weapon);
        setAttack(response.data.attack);
        setDefense(response.data.defense);
        setSpeed(response.data.speed);
        setKills(response.data.kills);
        setDeaths(response.data.deaths);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      }),
    []
  );

  function handlePlay() {
    navigate("/play");
  }

  function handleLogout() {
    axios
      .post(
        "http://127.0.0.1:8000/auth/token/logout/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        setToken(null);
        localStorage.removeItem("Token");
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className=" text-center mt-10">
        <h1 className="title text-6xl">Simple Adventure</h1>
      </div>
      <div className="flex items-center mx-5 mt-5">
        <div className="flex flex-col w-1/2 m-auto mt-10">
          <img
            src="/src/temp-img/paladin.png"
            alt="avatar"
            className="mb-5 h-48 self-center"
          ></img>
          <div className="flex flex-col items-center justify-center">
            <p className="font-cursive ml-2 text-2xl">Name: {name}</p>
            <p className="font-cursive ml-2 text-2xl">HP: {hp}</p>
            <p className="font-cursive ml-2 text-2xl">
              Weapon:{" "}
              <Button compact onClick={handleOpen} size="large" className="">
                <span className=" font-cursive">
                  {weapon === 1 && "Basic Sword"}
                  {weapon === 2 && "Basic Dagger"}
                  {weapon === 3 && "Basic Battle Axe"}
                  {weapon === 4 && "Basic Bow"}
                </span>
              </Button>
              {/* <Modal
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
                  ></div>
                  {weapons &&
                    weapons.map((weapon, index) => (
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
                      </div>
                    ))}
                </Box>
              </Modal> */}
            </p>
            <p className="font-cursive ml-2 text-2xl">Attack: {attack}</p>
            <p className="font-cursive ml-2 text-2xl">Defense: {defense}</p>
            <p className="font-cursive ml-2 text-2xl">Speed: {speed}</p>
            <p className="font-cursive ml-2 text-2xl">Kills: {kills}</p>
            <p className="font-cursive ml-2 text-2xl">Deaths: {deaths}</p>
            <p className="font-cursive ml-2 text-2xl">
              Highest Streak: {streak}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button className="h-20" color="black" circular onClick={handlePlay}>
          <span className="font-cursive">PLAY</span>
        </Button>
      </div>
      <div className="mt-10 text-center">
        <Button
          className="h-20 w-20"
          color="black"
          circular
          onClick={handleLogout}
        >
          <span className="font-cursive flex-wrap">Sign Out</span>
        </Button>
      </div>
    </>
  );
}
