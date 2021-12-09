import { useContext, useState } from "react"
import GoogleMapReact from 'google-map-react';
import { VelibContext } from "../../../contexts/Velib"
import ButtonTogglePanel from "./ButtonTogglePanel"
import Options from "./Options"
import Marker from "./Marker"
import CircleMarker from "./CircleMarker"
import "./Map.css"

const Map = (props) => {
  const { coords, stations } = useContext(VelibContext)
  const [option, setOption] = useState("numbikesavailable")
  // console.log("Map coords => ", coords);
  // console.log(" sations => ", stations)
  if (coords.length === 0) return <div>Chargement en cours</div>

  return(
    <div className="google-map-container">
      <Options onClick={setOption}/>
      <ButtonTogglePanel/>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ""}}
        defaultCenter={[48.856614, 2.3522219]}
        defaultZoom={18}
        center={coords}
      >
        {coords && <CircleMarker lat={coords[0]} lng={coords[1]} />}
        {stations.length > 0 && stations.map((station, index) => (
          <Marker
            key={index}
            lat={station.fields.coordonnees_geo[0]}
            lng={station.fields.coordonnees_geo[1]}
            station={station}
            option={option}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
// import { MapContainer, TileLayer } from "react-leaflet"
// const Map = (props) => {
//   const { coords } = useContext(VelibContext)
//   console.log("Map coords => ", coords);
//   return (
//     <MapContainer center={coords} zoom={15} scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <ListMarker />
//     </MapContainer>
//   )
// }