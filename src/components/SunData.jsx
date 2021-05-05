import React, { useContext } from "react";
import { LocationContext } from "../App.jsx";
import { useIPG } from "../api-calls/useIPG";

const SunData = () => {
  const location = useContext(LocationContext).location;
  const [ipgData, setIpgData] = useIPG(null);

  React.useEffect(() => {
    setIpgData(location);
  }, [location]);

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className="sundata">
        <h1>Here comes the Sun. Doo doo doo doo.</h1>
        <h2>
          {ipgData.location.city}, {ipgData.location.state}
        </h2>
        <div className="data-grid">
          <p>Sunrise: {ipgData.sunrise}</p>
          <p>Sunset: {ipgData.sunset}</p>
          <p>Solar Noon: {ipgData.solar_noon}</p>
          <p>Daylight: {ipgData.day_length}</p>
          <p>Altitude: {ipgData.sun_altitude.toFixed(2)}&deg;</p>
          <p>Azimuth: {ipgData.sun_azimuth.toFixed(2)}&deg;</p>
          <p>
            Distance:{" "}
            {(ipgData.sun_distance * 0.621371).toLocaleString().split(".")[0]}{" "}
            miles
          </p>
        </div>
      </div>
    );
  };

  return ipgData ? loaded() : loading();
};

export default SunData;
