import { useState } from "react";
import { locationIQ } from "./locationIQ.js"

export const useIPG = () => {
  const ipgApiKey = "c219cd1bd2f04e179ca9bb7d441e4493"
  const [ipgData, setIpgData] = useState(null)

  const getIpgData = async ({ city, state }) => {
    const formattedCity = city.split(" ").join("%20")
    const formattedState = state.split(" ").join("%20")
    const coords = await locationIQ(formattedCity, formattedState)
    const response = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${ipgApiKey}&lat=${coords.latitude}&long=${coords.longitude}`
    )
    const data = await response.json()
    setIpgData(data)
  }

  return [ipgData, getIpgData]
};
