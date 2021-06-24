import React, { useContext } from "react"
import { LocationContext } from "../../App.jsx"
import "./sundata.scss"

const SunData = ({ ipgData }) => {
  const location = useContext(LocationContext).location
  return (
    <div className="sundata">
      <h2 className="mobile-location-header">
        {location.city}, {location.state}
      </h2>
      <div className="data-grid">
        <p>Sunrise: {ipgData.sunrise}</p>
        <p>Sunset: {ipgData.sunset}</p>
        <p>Daylight: {ipgData.day_length}</p>
        <p>Solar Noon: {ipgData.solar_noon}</p>
        <p>Altitude: {ipgData.sun_altitude.toFixed(2)}&deg;</p>
        <p>Azimuth: {ipgData.sun_azimuth.toFixed(2)}&deg;</p>
        <p>
          Distance:{" "}
          {(ipgData.sun_distance * 0.621371).toLocaleString().split(".")[0]}{" "}
          miles
        </p>
      </div>
    </div>
  )
}

export default SunData
