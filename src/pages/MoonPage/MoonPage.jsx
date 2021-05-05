import React from "react";

import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import MoonData from "../../components/DataDisplays/MoonData";

import "./moonpage.scss";

const MoonPage = () => {
  return (
    <div className="moon">
      <Header />
      <SearchForm />
      <h1>Moon Page</h1>
      <MoonData />
    </div>
  );
};

export default MoonPage;
