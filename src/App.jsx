import React, { useState, createContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useMediaQuery } from "react-responsive"
// import Media from "react-media";

import HomePage from "./pages/HomePage"
import RouteLogic from "./components/RouteLogic"
// import SunPage from "./pages/SunPage"
// import MoonPage from "./pages/MoonPage"
// import DesktopPage from "./pages/DesktopPage";

import "./App.scss";

export const LocationContext = createContext(null);

function App() {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 726px" });

  const [location, setLocation] = useState(null);
  
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {location ? (
            <RouteLogic isTabletOrMobile={isTabletOrMobile} />
          ) : (
            <Redirect to="/"/>
          )}
          
        </Switch>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
