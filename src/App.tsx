import React, { useEffect, useState } from 'react';
import './App.scss';
import Left from './components/Left/Left';
import Right from './components/Right/Right';
import { getWeatherDataForCity } from './api/api';
import { WeatherResponse } from './interfaces/interfaces';
import EmptyState from './components/EmptyState/EmptyState';

function App() {
  const [location, setLocation] = useState<string>("Porto")
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [isCelsius, setIsCelsius] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const weather = await getWeatherDataForCity(location, isCelsius);
      setWeather(weather);
      setIsLoading(false)
    })();
  }, [location, isCelsius]);
  

  const handleLocation = (newLocation: string): void => {
    setLocation(newLocation)
  }

  const handleUnits = () => {
    setIsCelsius((prevState) => !prevState)
  }

  return (
    <div className="App" >
      <Left handleLocation={handleLocation} location={location} isCelsius={isCelsius} handleUnits={handleUnits} />
      {weather ? <Right weatherData={weather} isCelsius={isCelsius}/> : <EmptyState />}
    </div>
  );
}

export default App;
