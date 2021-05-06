import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router";

import { LocationContext } from "../App.jsx";

const SearchForm = () => {
  let history = useHistory();
  let location = useLocation();
  
  const setLocation = useContext(LocationContext).setLocation;

  const [searchInput, setSearchInput] = useState({
    city: "",
    state: "",
  });

  const handleChange = (event) => {
    setSearchInput({ ...searchInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    setLocation(searchInput);
    location.pathname === "/" && history.push("/sun");
  };

  return (
    <div className="search-inputs">
      <div className="city-input">
        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          id="city"
          value={searchInput.city}
          onChange={handleChange}
        />
      </div>
      <div className="state-input">
        <label htmlFor="state">State: </label>
        <input
          type="text"
          name="state"
          id="state"
          value={searchInput.state}
          onChange={handleChange}
        />
      </div>
      <button type="button" name="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
