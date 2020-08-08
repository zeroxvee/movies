import PropTypes from "prop-types"
import React from "react"

import api from "api"


export const Card = ({ movie }) => {
  const [similarMovies, setSimilarMovies] = useState([])

  const handleClick = async (event) => {
    const { results } = await api.similar(event.target.parentElement.dataset.id)

    // Only show 3 of them
    setSimilarMovies(results.slice(0, 2))
  }

  return (
    <figure>
      <img
        alt={`${movie.title} poster`}
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
  )
}

Card.propTypes = {
  movie: PropTypes.object.isRequired,
}
