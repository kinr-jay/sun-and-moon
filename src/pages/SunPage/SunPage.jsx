import React from "react";

import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import SunData from "../../components/SunData";

const SunPage = () => {
  return (
    <div className="sun">
      <Header />
      <SearchForm />
      <h1>Sun Page</h1>
      <SunData />
    </div>
  );
};

export default SunPage;
