import React, { useState } from "react";
import "./index.scss";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  let onSubmitValue = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("please enter value");
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data?.message !== "city not found") {
            navigate("/weatherpage", { state: { result: data } });
          } else {
            alert("city not found");
          }
        })
        .catch((error) => alert("city not found"));
      setCity("");
    }
  };
  return (
    <div className="Home-container">
      <form className="from-el">
        <h3>Weather App</h3>
        <input
          type="text"
          value={city}
          placeholder="Please enter city name"
          className="InputEl"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button className="Button-el" onClick={(e) => onSubmitValue(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default HomePage;
