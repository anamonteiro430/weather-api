import moment from 'moment';
import React from 'react';
import { Sunrise, Sunset } from 'react-feather';
import Divider from '../../Shared/Divider/Divider';
import './Additional.scss'
import { AdditionalProps } from './Additional.types';

function Additional({sunrise, sunset}: AdditionalProps) {
  return (
    <div className="additional">
      <div className="additional-sun">
      <div className="additional-sunrise">
        <Sunrise size={48} />
        <p>Sunrise</p>
        <Divider color={'accentColor'} />
        <p className="additional-time">{moment.unix(sunrise).hours()}:{`0${String(moment.unix(sunrise).minutes())}`.slice(-2)}H</p>
      </div>
      <div className="additional-sunset">
        <Sunset size={48} />
        <p>Sunset</p>
        <Divider color={'accentColor'} />
        <p className="additional-time">{moment.unix(sunset).hours()}:{`0${String(moment.unix(sunset).minutes())}`.slice(-2)}H</p>
      </div>
    </div>
    </div>
  );
}

export default Additional;
  