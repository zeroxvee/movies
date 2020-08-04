import PropType from 'prop-types'
import React from 'react'

export const Cards = ({movies}) => {


  return (
    <div className="cards">

    </div>
  )
}

Cards.propType = {
  movies: PropType.array,
  submitHandler: PropType.func,
  value: PropType.string,
  search: PropType.string,
  handler: PropType.func,
}
