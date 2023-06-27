import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../context/AuthContext";

export default function Play({
  setToken,
  playAttack,
  playDefense,
  playSpeed,
  hp,
  name,
  weapon,
  damage,
}) {
  const [enemy, setEnemy] = useState();
  const [roll, setRoll] = useState("");
  const [rolls, setRolls] = useState([]);
  const navigate = useNavigate();
  const an = [11, 18];
  const [enemyName, setEnemyName] = useState();
  const [enemyHP, setEnemyHP] = useState();
  const [enemyDamage, setEnemyDamage] = useState();
  const [enemyAttack, setEnemyAttack] = useState();
  const [enemyDefense, setEnemyDefense] = useState();
  const [enemySpeed, setEnemySpeed] = useState();
  const token = useContext(TokenContext);
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/enemies", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setEnemy(_.sample(response.data));
      });
  }, [token]);

  useEffect(() => {
    if (enemy) {
      setEnemyHP(enemy.hit_points);
      setEnemyName(enemy.name);
      setEnemyDamage(enemy.weapon_damage);
      setEnemyAttack(enemy.weapon_attack);
      setEnemyDefense(enemy.weapon_defense);
      setEnemySpeed(enemy.weapon_speed);
    }
  }, [enemy]);

  function rollDie() {
    const newRoll = _.random(1, 20);
    setRoll(newRoll);
    setRolls((prevRolls) => [newRoll, ...prevRolls]);
    console.log(roll);
  }

  function handleQuit() {
    navigate("/");
  }

  if (enemy)
    return (
      <>
        <div className=" flex justify-center items-center flex-col my-20">
          <div className="flex mb-10">
            <img
              src="/src/temp-img/ogre.png"
              alt="avatar"
              className="h-48 self-center"
            ></img>
            <div className="flex flex-col text-center justify-center ml-5">
              <div className="font-cursive text-3xl self-center">
                {enemyName}
              </div>
              <div className="font-cursive text-xl self-center">
                HP: {enemyHP}
              </div>
              <div className="font-cursive text-xl self-center">
                Damage: {enemyDamage}
              </div>
              <div className="font-cursive text-xl self-center">
                Attack: {enemyAttack}
              </div>
              <div className="font-cursive text-xl self-center">
                Defense: {enemyDefense}
              </div>
              <div className="font-cursive text-xl self-center">
                Speed: {enemySpeed}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              onClick={rollDie}
              className="w-1/5 cursor-pointer"
              src="/src/temp-img/20sideddie.png"
            />
          </div>
          <div className="flex mt-10">
            <img
              src="/src/temp-img/paladin.png"
              alt="avatar"
              className="h-48 self-center"
            ></img>
            <div className="flex flex-col text-center justify-center ml-5">
              <div className="font-cursive text-3xl self-center">{name}</div>
              <div className="font-cursive text-xl self-center">HP: {hp}</div>
              <div className="font-cursive text-xl self-center">
                Damage: {damage}
              </div>
              <div className="font-cursive text-xl self-center">
                Attack: {playAttack}
              </div>
              <div className="font-cursive text-xl self-center">
                Defense: {playDefense}
              </div>
              <div className="font-cursive text-xl self-center">
                Speed: {playSpeed}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-5">
          <Button color="black" onClick={handleQuit}>
            <span className="font-cursive">QUIT</span>
          </Button>
        </div>
        <div className=" border-t-4">
          {" "}
          <div className="text-2xl font-cursive ml-2">
            {rolls.map((r, index) => (
              <div key={index}>
                {r > 0
                  ? an.includes(r)
                    ? `You rolled an ${r} `
                    : `You rolled a ${r} `
                  : ""}
              </div>
            ))}
          </div>
        </div>
      </>
    );
}
