import PropTypes from "prop-types"
import React, { useState } from "react"

import api from "api"

import "./Cards.css"

export const Cards = ({ movies, showSimilar }) => {

  const handleToggle = (event) => {

    console.log(event.target.parentNode.elements[1])

  }

  return movies.map((movie, i) => {
    console.log('works!')
    return (
      <figure key={i}>
        <img alt="" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}>
        </img>
        <figcaption>
          <div>
            <p>Title: &quot;{movie.title}&quot;</p>
            <p>Release date: {movie.release_date}</p>
            <p className={movie.vote_average >= 7 ? "good" : "bad"}>Rating: {movie.vote_average}</p>
            <p>Description: {movie.overview}</p>
          </div>
          <div>
            <button onClick={handleToggle}>Similar movies</button>
            <div className="similarMovies">
            </div>
          </div>
        </figcaption>
      </figure>
    )
  }
  )
}
Cards.propTypes = {
  movies: PropTypes.array,
  handler: PropTypes.func,
  showSimilar: PropTypes.func,
}
