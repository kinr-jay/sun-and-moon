import React, { useState, useContext } from "react";
import { LocationContext } from "../App.jsx";

const SunData = () => {
  const location = useContext(LocationContext).location;

  const ipgApiKey = "c219cd1bd2f04e179ca9bb7d441e4493";
  const [ipgData, setIpgData] = useState(null);

  const getIpgData = async () => {
    const response = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${ipgApiKey}&location=${location},%20US`
    );
    const data = await response.json();
    console.log(data);
    setIpgData(data);
  };

  React.useEffect(() => {
    getIpgData();
  }, []);

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
          <p>Altitude: {ipgData.sun_altitude}</p>
          <p>Azimuth: {ipgData.sun_azimuth}</p>
          <p>Distance: {ipgData.sun_distance}</p>
        </div>
      </div>
    );
  };

  return ipgData ? loaded() : loading();
};

export default SunData;
