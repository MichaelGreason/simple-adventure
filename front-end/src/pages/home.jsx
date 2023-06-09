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
  const token = useContext(TokenContext);

  useEffect(() => {
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
      [];
  });

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
              Weapon: {weapon === 1 && "Basic Sword"}
              {weapon === 2 && "Basic Dagger"}
              {weapon === 3 && "Basic Battle Axe"}
              {weapon === 4 && "Basic Bow"}
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
