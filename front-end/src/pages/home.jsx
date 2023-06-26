import { useContext, useEffect, useState } from "react";
import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Box, Modal, Tooltip } from "@mui/material";
import TokenContext from "../context/AuthContext";
import axios from "axios";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Home({
  setToken,
  playAttack,
  setPlayAttack,
  playDefense,
  setPlayDefense,
  playSpeed,
  setPlaySpeed,
  hp,
  setHp,
  name,
  setName,
  weapon,
  setWeapon,
  damage,
  setDamage,
}) {
  const navigate = useNavigate();
  const [weaponName, setWeaponName] = useState();
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
  const [weaponAttack, setWeaponAttack] = useState();
  const [weaponDefense, setWeaponDefense] = useState();
  const [weaponSpeed, setWeaponSpeed] = useState();

  useEffect(() => {
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
    axios
      .get("http://127.0.0.1:8000/profile", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setHp(response.data.hit_points);
        setWeaponName(response.data.weapon_name);
        setAttack(response.data.attack);
        setDefense(response.data.defense);
        setSpeed(response.data.speed);
        setKills(response.data.kills);
        setDeaths(response.data.deaths);
        setWeapon(response.data.weapon);
        setDamage(response.data.weapon_damage);
        setWeaponAttack(response.data.weapon_attack);
        setWeaponDefense(response.data.weapon_defense);
        setWeaponSpeed(response.data.weapon_speed);
        setPlayAttack(response.data.attack + response.data.weapon_attack);
        setPlayDefense(response.data.defense + response.data.weapon_defense);
        setPlaySpeed(response.data.speed + response.data.weapon_speed);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [token, playAttack]);

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

  if (weapons && name && hp && playAttack && attack) {
    return (
      <>
        <div className=" text-center mt-10">
          <h1 className="title text-6xl">Simple Adventure</h1>
        </div>
        <div className="flex items-center mx-5 mt-5">
          <div className="flex flex-col w-4/5 m-auto mt-10">
            <img
              src="src/temp-img/paladin.png"
              alt="avatar"
              className="mb-5 h-48 self-center"
            ></img>
            <div className="flex flex-col items-center justify-center">
              <p className="font-cursive ml-2 text-2xl">Name: {name}</p>
              <p className="font-cursive ml-2 text-2xl">HP: {hp}</p>
              <p className="font-cursive ml-2 text-2xl">
                Weapon:
                <Button onClick={handleOpen} size="large" compact>
                  <span className=" font-cursive">
                    {`${weaponName} (${damage} Damage)`} <ArrowRightAltIcon />
                  </span>
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className=" overflow-auto mb-10"
                >
                  <Box className="absolute top-1/4 left-1/3 w-1/3 border-2 border-solid border-black bg-white shadow-lg shadow-black overflow-auto max-w-screen-2xl">
                    <div className="flex flex-col text-center my-2">
                      <span>Attack: {weaponAttack}</span>
                      <span>Damage: {damage}</span>
                      <span>Defense: {weaponDefense}</span>
                      <span>Speed: {weaponSpeed}</span>
                      {weaponName === "Basic Sword" && (
                        <span className="flex justify-center">
                          <img
                            className="w-1/3 center"
                            src="src/temp-img/basicsword.png"
                          />
                        </span>
                      )}
                      {weaponName === "Basic Dagger" && (
                        <span className="flex justify-center">
                          <img
                            className="w-1/3 center"
                            src="src/temp-img/basicdagger.png"
                          />
                        </span>
                      )}
                      {weaponName === "Basic Battle Axe" && (
                        <span className="flex justify-center">
                          <img
                            className="w-1/3 center"
                            src="src/temp-img/basicbattleaxe.png"
                          />
                        </span>
                      )}
                      {weaponName === "Basic Bow" && (
                        <span className="flex justify-center">
                          <img
                            className="w-1/3 center"
                            src="src/temp-img/basicbow.png"
                          />
                        </span>
                      )}
                    </div>
                  </Box>
                </Modal>
              </p>
              <Tooltip
                title={`Player(${attack}) + Weapon(${weaponAttack})`}
                placement="right"
              >
                <p className="font-cursive ml-2 text-2xl">
                  Attack: {playAttack}
                </p>
              </Tooltip>
              <Tooltip
                title={`Player(${defense}) + Weapon(${weaponDefense})`}
                placement="right"
              >
                <p className="font-cursive ml-2 text-2xl">
                  Defense: {playDefense}
                </p>
              </Tooltip>
              <Tooltip
                title={`Player(${speed}) + Weapon(${weaponSpeed})`}
                placement="right"
              >
                <p className="font-cursive ml-2 text-2xl">Speed: {playSpeed}</p>
              </Tooltip>
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
}
