import React from "react";
import SearchForm from "../components/SearchForm";

const HomePage = () => {
  return (
    <div className="landing">
      <h1>Where are you?</h1>
      <h2>
        Position is relative. Find out how your relate to the Sun and Moon to
        understand the bigger picture.
      </h2>
      <SearchForm />
    </div>
  );
};

export default HomePage;
