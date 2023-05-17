import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/home";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
