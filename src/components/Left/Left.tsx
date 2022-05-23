import React, { useContext } from "react";
import "./Left.scss";
import SearchBar from "./SearchBar/SearchBar";
import Rainbow from "../../assets/rainbow.gif";
import { WeatherContext } from "../../context/context";
import ToggleLeft from "../../assets/toggle-left.svg";
import ToggleRight from "../../assets/toggle-right.svg";

function Left() {
  const { isCelsius, changeUnit, weatherData } = useContext(WeatherContext);
  const currentTemperature = weatherData?.weather.temperature || 0;

  return (
    <div className="left-container">
      <div className="left-container--title">
        <h1>CHECK THE WEATHER</h1>
        <img src={Rainbow} width={24} height={24} alt="logo" />
      </div>
      <SearchBar />
      <div className="left-container--toggle">
        <p className={isCelsius ? `underlined` : ``}>ºC</p>
        <img
          src={isCelsius ? ToggleLeft : ToggleRight}
          alt={"toggle to change units"}
          onClick={() => changeUnit(currentTemperature)}
        />
        <p className={!isCelsius ? `underlined` : ``}>ºF</p>
      </div>
    </div>
  );
}

export default Left;
