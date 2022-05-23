import React from "react";
import { WeatherResponse } from "../interfaces/interfaces";

interface weatherStateInterface {
  weatherData: WeatherResponse | null;
  currentLocation: string;
  changeLocation: (location: string) => void;
  isCelsius: boolean;
  changeUnit: (currentTemperature: number) => void;
  isLoading: boolean;
}

const weatherState: weatherStateInterface = {
  weatherData: null,
  currentLocation: "Porto",
  changeLocation: () => {},
  isCelsius: true,
  changeUnit: () => {},
  isLoading: true,
};

export const WeatherContext = React.createContext(weatherState);
