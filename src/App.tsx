import React, { useEffect, useState } from "react";
import "./App.scss";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import { getWeatherDataForCity } from "./api/api";
import { WeatherResponse } from "./interfaces/interfaces";
import EmptyState from "./components/EmptyState/EmptyState";
import { WeatherContext } from "./context/context";
import { convertToUnit, WeatherUnits } from "./functions";
import LoadingState from "./components/LoadingState/LoadingState";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [location, setLocation] = useState("Porto");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(async () => {
      const weather = await getWeatherDataForCity(location);
      setWeatherData(weather);
      setIsLoading(false);
    }, 250);
  }, [location]);

  const handleLocation = (newLocation: string): void => {
    setLocation(newLocation);
  };

  const handleUnits = (currentTemperature: number) => {
    const updatedTemperature = convertToUnit(
      currentTemperature,
      isCelsius ? WeatherUnits.FAHRENHEIT : WeatherUnits.CELSIUS
    );
    if (weatherData) {
      let updatedWeatherData = {
        ...weatherData,
        weather: {
          ...weatherData?.weather,
          temperature: Number(updatedTemperature.toFixed(2)),
        },
      };
      setWeatherData(updatedWeatherData);
      setIsCelsius((prevState) => !prevState);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        currentLocation: location,
        changeLocation: handleLocation,
        isCelsius,
        changeUnit: handleUnits,
        isLoading,
      }}
    >
      <div className="App">
        <Left />
        {isLoading ? (
          <LoadingState />
        ) : weatherData ? (
          <Right />
        ) : (
          <EmptyState />
        )}
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
