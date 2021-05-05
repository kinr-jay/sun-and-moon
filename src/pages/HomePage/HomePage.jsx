import React from "react";
import SearchForm from "../../components/SearchForm";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="landing">
      <div className="center-box">
        <img
          src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/35928975213_1f154b8716_o.jpg"
          alt="Total Solar Eclipse Over Hopkinsville, Kentucky"
        />
        <div className="landing-text">
          <h1>Where are you?</h1>
          <h2>
            Position is relative. Find out your location with respect to our
            most important neighbors.
          </h2>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
