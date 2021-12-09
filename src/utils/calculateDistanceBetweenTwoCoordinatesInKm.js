const PI = 3.141592653589793;
const EARTH_RADIUS = 6371;

const convertToRadians = value => value * PI / 180;

const  calculateDistanceBetweenTwoCoordinatesInKm = (
  firstLatitude,
  firstLongitude,
  secondLatitude,
  secondLongitude
) => {
  const firstLng = convertToRadians(firstLongitude)
  const firstLat = convertToRadians(firstLatitude)
  const secondLng = convertToRadians(secondLongitude)
  const secondLat = convertToRadians(secondLatitude)

  const deltaLat = secondLat - firstLat
  const deltaLng = secondLng - firstLng

  const calc = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(firstLat) * Math.cos(secondLat) * Math.pow(Math.sin(deltaLng/2), 2)

  const angle = 2 * Math.asin(Math.sqrt(calc))

  return angle * EARTH_RADIUS //km
}

export default calculateDistanceBetweenTwoCoordinatesInKm


