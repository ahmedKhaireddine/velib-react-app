import React, { useContext } from "react"
import Station from "./Station"
import { VelibContext } from "../../../contexts/Velib"
import "./ListStation.css"

const ListStation = (props) => {
  const { stations } = useContext(VelibContext)

  const stationsCardsJsx = stations.map((station, index) => {
    return <Station key={index} station={station} />
  })

  return (
    <div className="list-stations">
      <div className="list-stations-header">
        <h2>Liste de stations à proximité</h2>
      </div>
      <div className="stations">
        {stationsCardsJsx}
      </div>
    </div>
  )
}

export default ListStation