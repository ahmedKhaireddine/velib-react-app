import { useContext } from "react"
import { VelibContext } from "../../../contexts/Velib"
import "./Marker.css"

const Marker = (props) => {
  const { station, option } = props

  const { setSelectedStation } = useContext(VelibContext)
  let color =  ""

  switch(option) {
    case "ebike":
      color = "#80adb3"
      break;
    case "mechanical":
      color = "#769e43"
      break;
    case "numdocksavailable":
      color = "#a260a0"
      break;
    default: color = "#999999"
  }

  return (
    <div
      className="marker"
      onClick={() => setSelectedStation(station.recordid)}
    >
      <div
        className="marker-text"
        style={{ backgroundColor: color }}
      >
        {station.fields[option]}
      </div>
    </div>
  )
}

Marker.defaultProps = {
  option: "",
  station: {}
}

export default Marker