import React from "react";
import "./moondata.scss";

const MoonData = ({ ipgData, stormglassData }) => {

  let illumination = 0

  const phasePoint = stormglassData.moonPhase.current.value
  if (phasePoint <= 0.5) {
    illumination = phasePoint * 2
  } else {
    illumination = (1 - phasePoint) * 2
  }

  return (
    <div className="moondata">
      <h2 className="mobile-location-header">
        {ipgData.location.city}, {ipgData.location.state}
      </h2>
      <div className="data-grid">
        <p>Moonrise: {ipgData.moonrise}</p>
        <p>Moonset: {ipgData.moonset}</p>
        <p>Phase: {stormglassData.moonPhase.current.text}</p>
        <p>Illumination: {(illumination * 100).toFixed(2)}%</p>
        <p>Altitude: {ipgData.moon_altitude.toFixed(2)}&deg;</p>
        <p>Azimuth: {ipgData.moon_azimuth.toFixed(2)}&deg;</p>
        <p>Distance: {(ipgData.moon_distance * 0.621371).toFixed(0)} miles</p>
      </div>
    </div>
  );
};

export default MoonData;
