import React, { useState } from "react";

const APItest = () => {
  // Test API Call for ipgeolocation, current time (not specified), in Denver, CO
  const ipgApiKey = "c219cd1bd2f04e179ca9bb7d441e4493";
  const [ipgData, setIpgData] = useState(null);

  const getIpgData = async () => {
    const response = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${ipgApiKey}&location=Denver,%20US`
    );
    const data = await response.json();
    console.log(data);
    setIpgData(data);
  };

  // Test API Call for Farmsense API. Location not required, date in Unix timestamp
  // pulled from online, not created dynamically here
  const [farmsenseData, setFarmsenseData] = useState(null);

  const getFarmsenseData = async () => {
    const response = await fetch(
      `http://api.farmsense.net/v1/moonphases/?d=1619665990`
    );
    const data = await response.json();
    console.log(data[0]);
    setFarmsenseData(data[0]);
  };

  // useEffect calls
  React.useEffect(() => {
    getIpgData();
  }, []);

  React.useEffect(() => {
    getFarmsenseData();
  }, []);

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className="test">
        <h1>Goodbye Cruel World</h1>
      </div>
    );
  };

  return ipgData && farmsenseData ? loaded() : loading();
};

export default APItest;
