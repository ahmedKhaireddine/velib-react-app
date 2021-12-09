import { useEffect, useState } from "react"
import axios from "axios";

export const useGetStations = () => {
  const [stations, setStations] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const { data:{ records } } = await axios.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=1438&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes")

        setStations(records)
      } catch ({ message }) {
        // console.log("error => ", message)
      }
    })()
  }, [])

  return [stations, setStations]
}