import React from "react"
import PropTypes from "prop-types"

import Wine from "./wine"

const Wines = ({ wines }) => (
  <div className="wine-list">
    {wines
      .sort(function(a, b) {
        return a.priority - b.priority
      })
      .map((wine, index) => (
        <Wine wine={wine} key={index} />
      ))}
  </div>
)

Wines.propTypes = {
  wines: PropTypes.array,
}

export default Wines
