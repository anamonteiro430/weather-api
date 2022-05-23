import React, { useContext } from "react";
import Divider from "../../Shared/Divider/Divider";
import "./Main.scss";
import { WeatherContext } from "../../../context/context";
import CloudRain from "../../../assets/cloud-rain.svg";
import Sun from "../../../assets/sun.svg";
import CloudSnow from "../../../assets/cloud-snow.svg";
import Cloud from "../../../assets/cloud.svg";
import Thermometer from "../../../assets/thermometer.svg";

function Main() {
  const { weatherData, isCelsius } = useContext(WeatherContext);

  const { weather, country, city } = weatherData || {};
  const { title, description, temperature } = weather || {};

  const getWeatherIcon = (): { icon: string; alt: string } => {
    switch (title) {
      case "Clear":
        return {
          icon: Sun,
          alt: "Sun",
        };
      case "Clouds":
        return {
          icon: Cloud,
          alt: "Normal cloud",
        };
      case "Rain":
        return {
          icon: CloudRain,
          alt: "Raining cloud",
        };
      case "Snow":
        return {
          icon: CloudSnow,
          alt: "Snowing cloud",
        };
      default:
        return {
          icon: Thermometer,
          alt: "alternative weather icon",
        };
    }
  };

  return (
    <div className="main">
      <div className="main-weather">
        <p className="main-weather--today">Today</p>
        <p className="main-weather--location">{`${city}, ${country}`}</p>
        <Divider color={"accentColor"} />
        <p>{weatherData?.city}</p>
        <p className="main-weather--temperature">
          {temperature}
          {isCelsius ? `ºC` : `ºF`}
        </p>
        <Divider color={"accentColor"} />
        <p className="main-weather--title">{title}</p>
        <div className="main-weather--icon">
          <img src={getWeatherIcon()?.icon} alt={"weather icon"} />
        </div>
        <p className="main-weather--description">{description}</p>
      </div>
    </div>
  );
}

export default Main;
