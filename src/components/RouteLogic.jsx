import React from "react";
import { Route, Redirect } from "react-router-dom";

import SunPage from "../pages/SunPage";
import MoonPage from "../pages/MoonPage";
import DesktopPage from "../pages/DesktopPage";

const RouteLogic = ({ isTabletOrMobile }) => {
  if (isTabletOrMobile) {
    return (
      <>
        <Route path="/sun-and-moon">
          <Redirect to="/sun" />
        </Route>
        <Route path="/sun">
          <SunPage />
        </Route>
        <Route path="/moon">
          <MoonPage />
        </Route>
      </>
    );
  } else {
    return (
      <>
        <Route path="/sun-and-moon">
          <DesktopPage />
        </Route>
        <Route path="/sun">
          <Redirect to="/sun-and-moon" />
        </Route>
        <Route path="/moon">
          <Redirect to="/sun-and-moon" />
        </Route>
      </>
    );
  }
};

export default RouteLogic;
