import { useContext } from "react"
import { VelibContext } from "../../../contexts/Velib"
import ArrowLeft from "../../../assets/arrow_left_2x.png"
import "./ButtonTogglePanel.css"

const ButtonTogglePanel = () => {
  const { openSidePanel, setOpenSidePanel } = useContext(VelibContext)

  return (
    <button
      className={`collapse-button-panel ${openSidePanel ? "panel-collapsed" : " panel-expand"}`}
      onClick={() => setOpenSidePanel(!openSidePanel)}
    >
      <img src={ArrowLeft} alt=""/>
    </button>
  )
}

export default ButtonTogglePanel