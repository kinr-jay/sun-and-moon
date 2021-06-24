export const positionstack = async (city, state) => {
  const apikey = "4259d04f67876f798aee0d860f9fa139"
  const url = `http://api.positionstack.com/v1/forward?access_key=${apikey}&query=${city}%20${state}`

  const response = await fetch(url + `${city}%20${state}`)
  const data = await response.json()
  const coords = {
    latitude: data.data[0].latitude,
    longitude: data.data[0].longitude,
  }

  return coords
}
