import PropTypes from "prop-types"
import React from "react"

import { Card } from "./Card"

import "./Cards.css"

export const Cards = ({ movies }) => {
  return movies.map((movie) => <Card key={movie.id} movie={movie} />)
}
Cards.propTypes = {
  movies: PropTypes.array.isRequired,
  handler: PropTypes.func,
  showSimilar: PropTypes.func,
}
