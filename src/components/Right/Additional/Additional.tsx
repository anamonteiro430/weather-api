import React, { useContext } from "react";
import Divider from "../../Shared/Divider/Divider";
import "./Additional.scss";
import Sunrise from "../../../assets/sunrise.svg";
import Sunset from "../../../assets/sunrise.svg";
import { WeatherContext } from "../../../context/context";
import { getTime } from "../../../functions";

function Additional() {
  const { weatherData } = useContext(WeatherContext);
  const { sunrise, sunset } = weatherData || {};
  const sunriseTime = getTime(sunrise || 0);
  const sunsetTime = getTime(sunset || 0);

  return (
    <div className="additional">
      <div className="additional-sun">
        <div className="additional-sunrise">
          <img src={Sunrise} alt="sunrise time" />
          <p>Sunrise</p>
          <Divider color={"accentColor"} />
          <p className="additional-time">{sunriseTime}</p>
        </div>
        <div className="additional-sunset">
          <img src={Sunset} alt="sunset time" />
          <p>Sunset</p>
          <Divider color={"accentColor"} />
          <p className="additional-time">{sunsetTime}</p>
        </div>
      </div>
    </div>
  );
}

export default Additional;
