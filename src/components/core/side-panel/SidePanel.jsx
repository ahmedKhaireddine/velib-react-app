import React, { useContext } from "react"

import ListStation from "./ListStation"
import { VelibContext } from "../../../contexts/Velib"
import "./SidePanel.css"

const SidePanel = (props) => {
  const { openSidePanel } = useContext(VelibContext)

  return (
    <div className="side-panel-box" style={{ display: openSidePanel ? "block" : "none"}}>
      <ListStation />
    </div>
  )
}

export default SidePanel