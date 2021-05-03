import React, { useState, createContext } from "react";
import {Switch, Route} from "react-router-dom"

import HomePage from "./pages/HomePage"
import SunPage from "./pages/SunPage"
import MoonPage from "./pages/MoonPage"

import "./App.scss";

const locationContext = createContext(null);

function App() {

  const [location, setLocation] = useState(null)
  
  return (
    <div className="App">
      <locationContext.Provider value ={location} >
            <Switch>
              <Route exact path="/" >
                <HomePage/>
              </Route>
              <Route path="/sun" >
                <SunPage/>
              </Route>
              <Route path="/moon" >
                <MoonPage/>
              </Route>
            </Switch>
      </locationContext.Provider>
    </div>
  );
}

export default App;
