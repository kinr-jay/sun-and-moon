import { useState } from "react"
import { positionstack } from "./positionstack"

export const useStormglass = () => {
  const [stormglassData, setStormglassData] = useState(null)

  const stormglassKey =
    "7a9b91ac-d480-11eb-8d12-0242ac130002-7a9b9242-d480-11eb-8d12-0242ac130002"
  const url = "https://api.stormglass.io/v2/astronomy/point"

  const getStormglassData = async ({ city, state }) => {
    const formattedCity = city.split(" ").join("%20")
    const formattedState = state.split(" ").join("%20")
    const coords = await positionstack(formattedCity, formattedState)
    const response = await fetch(
      `${url}?lat=${coords.latitude}&lng=${coords.longitude}`,
      {
        headers: {
          Authorization: stormglassKey,
        },
      }
    )
    const data = await response.json()
    setStormglassData(data.data[0])
  }

  return [stormglassData, getStormglassData]
}
