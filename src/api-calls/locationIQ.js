export const locationIQ = async (city, state) => {
  const apikey = "pk.c3761586244026fa9555c475b8ea53fe"
  const url = `https://us1.locationiq.com/v1/search.php?key=${apikey}&q=${city}%20${state}&format=json`

  const response = await fetch(url)
  const data = await response.json()
  const coords = {
    latitude: data[0].lat,
    longitude: data[0].lon,
  }

  return coords
}
