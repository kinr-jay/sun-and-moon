import React, { useContext } from "react";
import { LocationContext } from "../App.jsx";
import { useIPG } from "../api-calls/useIPG";
import { useFarmsense } from "../api-calls/useFarmsense";

const MoonData = () => {
  const location = useContext(LocationContext).location;

  // API Call for ipgeolocation.
  const [ipgData, setIpgData] = useIPG(null);

  React.useEffect(() => {
    setIpgData(location);
  }, [location]);

  // API Call for Farmsense API. Date in Unix Timestamp.
  const [farmsenseData, setFarmsenseData] = useFarmsense(null);

  React.useEffect(() => {
    setFarmsenseData();
  }, [location]);

  // JSX to render when loading vs loaded
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className="moondata">
        <h1>Howl at the moon. Awwoooo!!</h1>
        <h2>
          {location}, {ipgData.location.state}
        </h2>
        <div className="data-grid">
          <p>Moonrise: {ipgData.moonrise}</p>
          <p>Moonset: {ipgData.moonset}</p>
          <p>Phase: {farmsenseData.Phase}</p>
          <p>Illumination: {farmsenseData.Illumination.toFixed(2) * 100}%</p>
          <p>Altitude: {ipgData.moon_altitude.toFixed(2)}&deg;</p>
          <p>Azimuth: {ipgData.moon_azimuth.toFixed(2)}&deg;</p>
          <p>Distance: {(ipgData.moon_distance * 0.621371).toFixed(0)} miles</p>
        </div>
      </div>
    );
  };

  return ipgData ? loaded() : loading();
};

export default MoonData;
