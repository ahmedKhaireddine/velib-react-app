import React, { useState, useRef, useContext, useEffect } from "react"
import { MdOutlineElectricBike, MdOutlinePedalBike } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { RiParkingBoxLine } from "react-icons/ri";
import "./Station.css"
import { VelibContext } from "../../../contexts/Velib";

const iconsItems = [
  {
    Component: MdOutlinePedalBike,
    defaultText: "Nombre de vélos mécanique : ",
    key: "mechanical",
    name: "Mbike",
    unit: ""
  },
  {
    Component: MdOutlineElectricBike,
    defaultText: "Nombre de vélos électrique : ",
    key: "ebike",
    name: "Ebike",
    unit: ""
  },
  {
    Component: RiParkingBoxLine,
    defaultText: "Nombre de quais disponibles : ",
    key: "numdocksavailable",
    name: "Parking",
    unit: ""
  },
  {
    Component: GiPathDistance,
    defaultText: "Distance a parcourir : ",
    key: "distance",
    name: "Route",
    unit: "km"
  }
]

const Station = (props) => {
  const {
    station : {
      fields,
      recordid
    }
  } = props

  const [sentence, setSentence] = useState({
    name: "Mbike",
    text: `Nombre de vélos mécanique : ${fields.mechanical}`
  })

  const { selectedStation } = useContext(VelibContext)
  const ref = useRef()

  useEffect(() => {
    if (selectedStation === recordid) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedStation, recordid])

  const iconsItemsJsx = iconsItems.map((
    {
      Component,
      defaultText,
      key,
      name,
      unit
    }
    , index
  ) => {
    return (
      <div key={index} onClick={() => setSentence({
        name,
        text: `${defaultText} ${fields[key]}${unit}`
      })}>
        <Component style={{ fill: sentence.name === name ? "black" : "grey" }}/>
      </div>
    )
  })


  return (
    <div
      className="sation-box"
      ref={ref}
      style={{ backgroundColor: selectedStation === recordid && "#dcdcdc" }}
    >
      <h3>{fields.name}</h3>
      <p>{sentence.text}</p>
      <div className="icons-group">
        {iconsItemsJsx}
      </div>
    </div>
  )
}

export default Station