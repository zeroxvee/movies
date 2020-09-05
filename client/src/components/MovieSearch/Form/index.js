import PropType from "prop-types"
import React from "react"

import "./Form.css"

export const Form = ({ handler }) => (
  <form onSubmit={handler}>
    <input></input>
    <button type="Submit">Search</button>
  </form>
)

Form.propTypes = {
  handler: PropType.func,
}
