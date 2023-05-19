import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import React from "react";
import SignUp from "./pages/sign-up";
import "semantic-ui-css/semantic.min.css";
import SignIn from "./pages/sign-in";
import Play from "./pages/play";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
