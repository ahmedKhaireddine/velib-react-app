import Map from "./core/map/Map"
import SidePanel from "./core/side-panel/SidePanel"

const Velib = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <SidePanel />
      <Map />
    </div>
  );
}

export default Velib