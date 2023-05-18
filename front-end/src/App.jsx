import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/home";
import React from "react";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
