import React from 'react';
import './Left.scss';
import { LeftProps } from './Left.types';
import SearchBar from  './SearchBar/SearchBar'
import { ToggleLeft , ToggleRight} from 'react-feather'
import { baseColor } from '../../functions';
import Rainbow from '../../assets/rainbow.gif'

function Left({handleLocation, location, isCelsius, handleUnits}: LeftProps) {
    return (
      <div className="left-container">
        <div className="left-container--title">
          <h1>CHECK THE WEATHER</h1>
          <img src={Rainbow} width={24} height={24}/>
        </div>
        <SearchBar handleLocation={handleLocation} location={location} />
        <div className="left-container--toggle">
          <p className={isCelsius ? `underlined` : ``}>ºC</p>
          {isCelsius ? 
              <ToggleLeft size={36} color={baseColor} onClick={() => handleUnits()} /> 
            : 
            <ToggleRight size={36} color={baseColor} onClick={() => handleUnits()} />
          }
          <p className={!isCelsius ? `underlined` : ``}>ºF</p>
        </div>
      </div>
    );
  }
  
  export default Left;
  