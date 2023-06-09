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

function App() {
  const [token, setToken] = useLocalStorageState("token", null);

  return (
    <>
      <TokenContext.Provider value={token}>
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <Home setToken={setToken} />
              ) : (
                <SignUp setToken={setToken} />
              )
            }
          />
          <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
          <Route path="/sign-in" element={<SignIn setToken={setToken} />} />
          <Route path="/play" element={<Play />} />
          <Route path="/create-player" element={<CreatePlayer />} />
        </Routes>
      </TokenContext.Provider>
    </>
  );
}

export default App;
