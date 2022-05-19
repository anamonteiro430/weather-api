import React from 'react';
import './Divider.scss';
import { DividerProps } from './Divider.types';

function Divider({color}: DividerProps) {
  return (
    <div className={`divider-${color}`}>
    </div>
  );
}
  
export default Divider;