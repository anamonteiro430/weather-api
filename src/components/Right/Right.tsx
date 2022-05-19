import React from 'react';
import Additional from './Additional/Additional';
import Main from './Main/Main';
import './Right.scss';
import { RightProps } from './Right.types';

function Right({weatherData, isCelsius}: RightProps) {
  return (
    <div className="right-container">
      <Main weatherData={weatherData} isCelsius={isCelsius}/> 
      <Additional sunrise={weatherData?.sunrise} sunset={weatherData?.sunset} />
    </div>
  );
}

export default Right;
  