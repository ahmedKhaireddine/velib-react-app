import { createContext, useEffect, useState } from "react"
import _ from "lodash"
import { useGeoLocation } from "../hooks/useGeoLocation"
import { useGetStations } from "../hooks/useGetStations"
import { usePrevious } from "../hooks/usePrevious"
import calculateDistanceBetweenTwoCoordinatesInKm from "../utils/calculateDistanceBetweenTwoCoordinatesInKm.js"

const VelibContext = createContext({})

const VelibContextProvider = ({ children }) => {
  const [active, setActive] = useState(true)
  const [openSidePanel, setOpenSidePanel] = useState(false)
  const [radius] = useState(1)
  const [coords] = useGeoLocation(active)
  const [stations, setStations] = useGetStations()
  const [selectedStation, setSelectedStation] = useState(null)
  const prevCoords = usePrevious(coords)

  useEffect(() => {
    if (stations.length > 0 && coords.length > 0) {
      if (!_.isEqual(coords, prevCoords) || prevCoords === []) {
        const stationsWithDistance = stations.map((station) => {
          station.fields.distance = calculateDistanceBetweenTwoCoordinatesInKm(coords[0], coords[1], station.fields.coordonnees_geo[0], station.fields.coordonnees_geo[1]).toFixed(3)

          return station
        })
        setStations(stationsWithDistance)
      }
    }
  }, [stations, coords, prevCoords, setStations])

  const filteredStationInTwoKmRadius = stations
    .filter((element) => parseFloat(element.fields.distance) <= radius)
    .sort((a, b) => a.fields.distance - b.fields.distance)

  const value = {
    active,
    coords: coords,
    openSidePanel,
    setOpenSidePanel,
    setActive,
    stations: filteredStationInTwoKmRadius,
    selectedStation,
    setSelectedStation
  }

  return (
    <VelibContext.Provider value={value}>
      {children}
    </VelibContext.Provider>
  )
}

export {
  VelibContext,
  VelibContextProvider
}