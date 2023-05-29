import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

function WeatherPage() {
  const { state } = useLocation();
  const { result } = state; // Read values passed on state
  const navigate = useNavigate();

  const kelvin = result?.main.temp;
  const celcius = kelvin - 273.15;
  const feelsLike = result?.main.feels_like - 273.15;
  const cityName = result?.name;
  const windSpeed = result?.wind.speed;
  const humidity = result?.main.humidity;

  return (
    <div className="weather-page">
      <div className="weather-card">
        <h1 className="weather-head">Weather Report</h1>
        <h3>
          City: <span className="gry-class">{cityName}</span>
        </h3>
        <div className="weather-details">
          <div>
            <p className="main-tem">{Math.round(celcius) + "°C"}</p>
            <p className="gry-class">
              Feels like {Math.round(feelsLike) + "°"}
            </p>
          </div>
          <div>
            <p>Party cloudy</p>
            <p className="gry-class">Humidity: {humidity + "%"}</p>
            <p className="gry-class">Wind: {windSpeed + "km"}</p>
          </div>
        </div>
        <button
          className="btn-el"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default WeatherPage;
