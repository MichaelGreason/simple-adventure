import { useContext, useState } from "react";
import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import TokenContext from "../context/AuthContext";
import axios from "axios";

export default function Home({ setToken }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [weapon, setWeapon] = useState();
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const token = useContext(TokenContext);

  console.log("Token:", token);

  function handlePlay() {
    navigate("/play");
  }

  function chooseSword() {
    setWeapon("Sword");
    setAttack("5");
    setDefense("5");
    setOpen(false);
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
            <p className="font-cursive ml-2 text-2xl">Name:</p>
            <p className="font-cursive ml-2 text-2xl">HP:</p>
            <p className="font-cursive ml-2 text-2xl">
              Weapon:{" "}
              {weapon ? (
                weapon
              ) : (
                <Button compact size="small" onClick={handleOpen}>
                  <span className="font-cursive">Choose</span>
                </Button>
              )}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="absolute top-1/3 left-1/3 w-1/3 border-2 border-solid border-black bg-white shadow-lg shadow-black">
                  <div id="modal-modal-title" className=" flex justify-center">
                    Choose Weapon
                  </div>
                  <div id="modal-modal-description">
                    <ul>
                      <div
                        className="flex justify-between mx-2 mt-1 border-b-2 cursor-pointer"
                        onClick={chooseSword}
                      >
                        <li>Sword</li>
                        <li>Attack: 5 Defense: 5</li>
                      </div>
                      <div className="flex justify-between mx-2 border-b-2 cursor-pointer">
                        <li>Axe</li>
                        <li>Attack: 7 Defense: 3</li>
                      </div>
                      <div className="flex justify-between mx-2 border-b-2 cursor-pointer">
                        <li>Spear</li>
                        <li>Attack: 8 Defense: 2</li>
                      </div>
                      <div className="flex justify-between mx-2 border-b-2 cursor-pointer">
                        <li>Bow</li>
                        <li>Attack: 9 Defense: 1</li>
                      </div>
                      <div className="flex justify-between mx-2 mb-1 cursor-pointer">
                        <li>Mace</li>
                        <li>Attack: 4 Defense: 6</li>
                      </div>
                    </ul>
                  </div>
                </Box>
              </Modal>
            </p>
            <p className="font-cursive ml-2 text-2xl">Attack: {attack}</p>
            <p className="font-cursive ml-2 text-2xl">Defense: {defense}</p>
            <p className="font-cursive ml-2 text-2xl">Speed:</p>
            <p className="font-cursive ml-2 text-2xl">Kills:</p>
            <p className="font-cursive ml-2 text-2xl">Deaths:</p>
            <p className="font-cursive ml-2 text-2xl">Highest Streak:</p>
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
