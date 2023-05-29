import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/weatherpage" element={<WeatherPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
