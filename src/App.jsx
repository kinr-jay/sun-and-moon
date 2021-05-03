import React, { useState, createContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Media from "react-media";

import HomePage from "./pages/HomePage"
import SunPage from "./pages/SunPage"
import MoonPage from "./pages/MoonPage"
import DesktopPage from "./pages/DesktopPage";

import "./App.scss";

export const LocationContext = createContext(null);

function App() {

  const [location, setLocation] = useState(null);
  
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Media queries={{ small: { maxWidth: 726 } }}>
            {(matches) =>
              matches.small ? (
                <>
                  <Route path="/sun-and-moon">
                    {location ? (
                      <Redirect to="/sun" />
                    ) : (
                      <Redirect to="/" />
                    )}
                  </Route>
                  <Route path="/sun">
                    {location ? <SunPage /> : <Redirect to="/" />}
                  </Route>
                  <Route path="/moon">
                    {location ? <MoonPage /> : <Redirect to="/" />}
                  </Route>
                </>
              ) : (
                <>
                  <Route path="/sun-and-moon">
                    {location ? (
                      <DesktopPage />
                    ) : (
                      <Redirect to="/" />
                    )}
                  </Route>
                  <Route path="/sun">
                    {location ? (
                      <Redirect to="/sun-and-moon" />
                    ) : (
                      <Redirect to="/" />
                    )}
                  </Route>
                  <Route path="/moon">
                    {location ? (
                      <Redirect to="/sun-and-moon" />
                    ) : (
                      <Redirect to="/" />
                    )}
                  </Route>
                </>
              )
            }
          </Media>
        </Switch>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
