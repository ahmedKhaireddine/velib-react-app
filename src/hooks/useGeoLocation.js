import { useEffect, useState } from "react"

export const useGeoLocation = (active) => {
  const [coords, setCoords] = useState([])
  const [error, setError] = useState(null)

  const onChange = ({
    coords:{ latitude, longitude }
  }) => setCoords([latitude, longitude])

  const onError = ({ message }) => setError(message)

  useEffect(() => {
    let watcher

    if (active) {
      watcher = navigator.geolocation.watchPosition(onChange, onError)
    }

    return () => navigator.geolocation.clearWatch(watcher)
  }, [active])

  return [coords, error]
}