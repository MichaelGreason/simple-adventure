import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import TokenContext from "./context/AuthContext";
import Home from "./pages/home";
import React from "react";
import SignUp from "./pages/sign-up";
import "semantic-ui-css/semantic.min.css";
import SignIn from "./pages/sign-in";
import Play from "./pages/play";
import CreatePlayer from "./pages/create-player";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

function App() {
  const [token, setToken] = useLocalStorageState("token", null);
  const [playAttack, setPlayAttack] = useState(0);
  const [playDefense, setPlayDefense] = useState(0);
  const [playSpeed, setPlaySpeed] = useState(0);
  const [name, setName] = useState(" ");
  const [hp, setHp] = useState(0);
  const [weapon, setWeapon] = useState({});
  const [damage, setDamage] = useState(0);

  return (
    <>
      <TokenContext.Provider value={token}>
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <Home
                  setToken={setToken}
                  playAttack={playAttack}
                  setPlayAttack={setPlayAttack}
                  playDefense={playDefense}
                  setPlayDefense={setPlayDefense}
                  playSpeed={playSpeed}
                  setPlaySpeed={setPlaySpeed}
                  name={name}
                  setName={setName}
                  hp={hp}
                  setHp={setHp}
                  weapon={weapon}
                  setWeapon={setWeapon}
                  damage={damage}
                  setDamage={setDamage}
                />
              ) : (
                <SignUp setToken={setToken} />
              )
            }
          />
          <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
          <Route path="/sign-in" element={<SignIn setToken={setToken} />} />
          <Route
            path="/play"
            element={
              <Play
                setToken={setToken}
                playAttack={playAttack}
                setPlayAttack={setPlayAttack}
                playDefense={playDefense}
                setPlayDefense={setPlayDefense}
                playSpeed={playSpeed}
                setPlaySpeed={setPlaySpeed}
                name={name}
                setName={setName}
                hp={hp}
                setHp={setHp}
                weapon={weapon}
                setWeapon={setWeapon}
                damage={damage}
                setDamage={setDamage}
              />
            }
          />
          <Route path="/create-player" element={<CreatePlayer />} />
        </Routes>
      </TokenContext.Provider>
    </>
  );
}

export default App;
