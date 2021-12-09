import React from "react"
import "./Options.css"

const Options = (props) => {
  const options = ["mechanical", "ebike", "numdocksavailable"]

  const buttonItemsJsx = options.map((option, index) => {
    return <button key={index} onClick={() => props.onClick(option)}></button>
  })

  return (
    <div className="button-group">
      {buttonItemsJsx}
    </div>
  )
}

export default Options