import React, { useState } from "react";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
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
      <button type="button" name="submit">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
