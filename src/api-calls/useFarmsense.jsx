import { useState } from "react";

export const useFarmsense = () => {
  const [farmsenseData, setFarmsenseData] = useState(null);

  const getFarmsenseData = async () => {
    const unixTimeStamp = Math.round(new Date().getTime() / 1000);
    const response = await fetch(
      `http://api.farmsense.net/v1/moonphases/?d=${unixTimeStamp}`
    );
    const data = await response.json();
    setFarmsenseData(data[0]);
  };

  return [farmsenseData, getFarmsenseData];
};
