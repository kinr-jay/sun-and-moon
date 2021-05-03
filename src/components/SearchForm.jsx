import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router";

import { LocationContext } from "../App.jsx";

const SearchForm = () => {
  let history = useHistory();
  let location = useLocation();
  
  const setLocation = useContext(LocationContext).setLocation;

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = () => {
    setLocation(searchInput);
    location.pathname === "/" && history.push("/sun");
  };

  return (
    <div className="search">
      <label htmlFor="location">Search by City Name: </label>
      <input
        type="text"
        name="location"
        id="location"
        value={searchInput}
        onChange={handleChange}
      />
      <button type="button" name="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
