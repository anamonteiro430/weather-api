import React, { useState } from 'react';
import './SearchBar.scss';
import { SearchBarProps } from './SearchBar.types';
import { Search } from 'react-feather'
import { baseColor } from '../../../functions';
import Divider from '../../Shared/Divider/Divider';

function SearchBar({handleLocation, location}: SearchBarProps) {
  const [input, setInput] = useState(location)
  
  return (
    <div className='search-bar'>
      <Divider color={'baseColor'} />
      <div className="search-bar--container">
        <input type='text' placeholder='Enter a city...' onKeyDown={(e) => e.key === "Enter" && handleLocation(input)} name='search-location' value={input} onChange={(e: any) => setInput(e.target.value)} />
        <button className="search-bar-button" onClick={() => handleLocation(input)}><Search color={baseColor} size={'16'} /></button>
      </div>
    </div>
  );
}
  
export default SearchBar;
  