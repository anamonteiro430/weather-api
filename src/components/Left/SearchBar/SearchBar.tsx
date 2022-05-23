import React, { useContext, useState } from "react";
import "./SearchBar.scss";
import Search from "../../../assets/search.svg";
import Divider from "../../Shared/Divider/Divider";
import { WeatherContext } from "../../../context/context";

function SearchBar() {
  const { changeLocation, currentLocation } = useContext(WeatherContext);
  const [input, setInput] = useState(currentLocation);

  return (
    <div className="search-bar">
      <Divider color={"baseColor"} />
      <div className="search-bar--container">
        <input
          type="text"
          placeholder="Enter a city..."
          onKeyDown={(e) => e.key === "Enter" && changeLocation(input)}
          name="search-location"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button
          className="search-bar-button"
          onClick={() => changeLocation(input)}
        >
          <img src={Search} alt="searchbar" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
