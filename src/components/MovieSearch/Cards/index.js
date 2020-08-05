import PropType from 'prop-types'
import React from 'react'

//import api from 'api'

import './Cards.css'

export const Cards = ({ movies, showSimilar, isVisible }) => {

  const handleToggle = () => {
    //const similarMovies = await api.similar(event.target.elements[0].value)
    showSimilar()
  }

  // const renderSimilarMovies = async () => {

  // }

return movies.map((movie, i) => (
  <figure key={i}>
    <img alt="" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}>
    </img>
    <figcaption>
      <p>Title: &quot;{movie.title}&quot;</p>
      <p>Release date: {movie.release_date}</p>
      <p className={movie.vote_average >= 7 ? "good" : "bad"}>Rating: {movie.vote_average}</p>
      <p>Description: {movie.overview}</p>
      <button onClick={handleToggle}>Similar movies</button>
      {isVisible && (
        <div className="similarMovies">

        <div>

        </div>
        </div>
      )}
    </figcaption>
  </figure>
))
}

Cards.propType = {
  movies: PropType.array,
  handler: PropType.func,
  similarMoviesHandler: PropType.func,
}
