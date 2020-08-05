import React from 'react'
import PropType from 'prop-types'

import './Form.css'

export const Form = ({ handler }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    handler(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input></input>
      <button type="Submit">Search</button>
    </form>
  )
}

Form.propType = {
  handler: PropType.func,
}
