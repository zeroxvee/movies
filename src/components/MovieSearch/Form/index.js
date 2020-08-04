import React from 'react'
import PropType from 'prop-types'

import './Form.css'

export const Form = ({movies, handler}) => {

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(event)
  //   submitHandler(event)
  // }

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
  movies: PropType.string,
  submitHandler: PropType.func,
  value: PropType.string,
  search: PropType.string,
  handler: PropType.func,
}
