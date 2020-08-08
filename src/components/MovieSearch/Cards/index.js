import PropTypes from "prop-types"
import React, { useState } from "react"

import api from "api"

import "./Cards.css"

export const Cards = ({ movies }) => {
  const [similarMovies, setSimilarMovies] = useState([])

  const handleClick = async (event) => {
    const { results } = await api.similar(event.target.parentElement.dataset.id)
    setSimilarMovies(results)
  }

  return movies.map((movie, i) => (
    <figure key={i}>
      <img
        alt=""
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
      ></img>
      <figcaption data-id={movie.id}>
          <p>Title: &quot;{movie.title}&quot;</p>
          <p>Release date: {movie.release_date}</p>
          <p className={movie.vote_average >= 7 ? "good" : "bad"}>
            Rating: {movie.vote_average}
          </p>
          <p>Description: {movie.overview}</p>
          <button onClick={handleClick}>Similar Movies</button>
      </figcaption>
    </figure>
    // TODO{v.bazhutin}: Pass similarmovies to another component and add a parent wrapper (<Fragment>)
  ))
}
Cards.propTypes = {
  movies: PropTypes.array.isRequired,
  handler: PropTypes.func,
  showSimilar: PropTypes.func,
}
