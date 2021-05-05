import { useState } from "react";

export const useIPG = () => {
  const ipgApiKey = "c219cd1bd2f04e179ca9bb7d441e4493";
  const [ipgData, setIpgData] = useState(null);

  const getIpgData = async (location) => {
    const response = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${ipgApiKey}&location=${location},%20US`
    );
    const data = await response.json();
    setIpgData(data);
  };

  return [ipgData, getIpgData];
};
