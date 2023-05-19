import { useState } from "react";
import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handlePlay() {
    navigate("/play");
  }

  return (
    <>
      <div className=" text-center mt-10">
        <h1 className="title text-6xl">Simple Adventure</h1>
      </div>
      <div className="flex items-center mx-5 mt-5">
        <div className="flex flex-col w-1/2 m-auto mt-10">
          <img
            src="/src/temp-img/hero1.png"
            alt="avatar"
            className="mb-5 h-48 self-center"
          ></img>
          <div className="flex flex-col items-center justify-center">
            <p className="font-cursive ml-2 text-2xl">Name:</p>
            <p className="font-cursive ml-2 text-2xl">Weapon:</p>
            <p className="font-cursive ml-2 text-2xl">HP:</p>
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
    </>
  );
}
