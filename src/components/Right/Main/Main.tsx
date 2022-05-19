import React from 'react';
import Divider from '../../Shared/Divider/Divider';
import { MainProps } from './Main.types';
import './Main.scss'
import { CloudRain, Sun, CloudSnow, Cloud} from 'react-feather'

function Main({weatherData, isCelsius}: MainProps) {
  const {weather, country, city} = weatherData
  const {title, description, temperature} = weather

  const getWeatherIcon = () => {
    switch (title) {
      case 'Clear':
        return <Sun size={'72'}/>
      case 'Clouds':
        return <Cloud size={'72'}/>
      case 'Rain':
        return <CloudRain size={'72'}/>
      case 'Snow':
        return <CloudSnow size={'72'}/>
      default:
        return  
    }    
  }
 
  return (
    <div className="main">
      <div className="main-weather">
        <p className="main-weather--today">Today</p>
        <p className="main-weather--location">{`${city}, ${country}`}</p>
        <Divider color={"accentColor"}/>
        <p className="main-weather--temperature">{temperature}{isCelsius ? `ºC` : `ºF`}</p>
        <Divider color={"accentColor"}/>
        <p className="main-weather--title">{title}</p>
        <div className="main-weather--icon">
          {getWeatherIcon()}
        </div>
        <p className="main-weather--description">{description}</p>
      </div>
      
    </div>
  );
}

export default Main;
  