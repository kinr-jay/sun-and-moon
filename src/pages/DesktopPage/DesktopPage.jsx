/* eslint-disable react-hooks/exhaustive-deps */
// React import, context import, custom hook imports
import React, { useContext } from "react";
import { LocationContext } from "../../App.jsx";
import { useIPG } from "../../api-calls/useIPG";
import { useStormglass } from "../../api-calls/useStormglass"

// Component imports
import SearchForm from "../../components/SearchForm";
import TheSun from "../../components/Icons/TheSun";
import TheMoon from "../../components/Icons/TheMoon";
import SunData from "../../components/DataDisplays/SunData";
import MoonData from "../../components/DataDisplays/MoonData";

// SCSS import
import "./desktoppage.scss";

const DesktopPage = () => {
  const location = useContext(LocationContext).location;

  // API call to ipgeolocation
  const [ipgData, setIpgData] = useIPG(null);

  React.useEffect(() => {
    setIpgData(location);
  }, [location]);

  // API Call for Farmsense API. Date in Unix Timestamp.
  const [stormglassData, setStormglassData] = useStormglass(null)

  React.useEffect(() => {
    setStormglassData(location)
  }, [location]);

  // Renders for when API data is loading and loaded
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className="desktop">
        <SearchForm />
        <div className="icons">
          <TheSun sunAzimuth={ipgData.sun_azimuth} />
          <TheMoon moonAzimuth={ipgData.moon_azimuth} />
        </div>
        <h2>
          {location.city}, {location.state}
        </h2>
        <div className="data">
          <SunData ipgData={ipgData} />
          <MoonData ipgData={ipgData} stormglassData={stormglassData} />
        </div>
      </div>
    )
  }

  return ipgData && stormglassData ? loaded() : loading()
};

export default DesktopPage;
