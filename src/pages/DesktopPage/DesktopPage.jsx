import React from "react";
import SunData from "../../components/DataDisplays/SunData";
import MoonData from "../../components/DataDisplays/MoonData";

import "./desktoppage.scss";

const DesktopPage = () => {
  return (
    <div className="desktop">
      <h1>Hello</h1>
      <div className="data">
        <SunData />
        <MoonData />
      </div>
    </div>
  );
};

export default DesktopPage;
