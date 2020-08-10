import PropTypes from "prop-types"
import React, {useState} from "react"

import api from "api"

export const Card = ({ movie }) => {
  // TODO{v.bazhutin}: Consider removing state management from here and adding 'similarMovies' to the 'top level' movies for more consolidated state.
  const [similarMovies, setSimilarMovies] = useState([])

  const handleClick = async (event) => {
    const { results } = await api.similar(event.target.parentElement.dataset.id)

    // Only show 3 of them
    setSimilarMovies(results.slice(0, 2))
  }

  const renderSimilarMovies = () => {
    return <ul><li>{similarMovies[0].title}</li></ul>
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
        {similarMovies.length ? renderSimilarMovies() : null}
      </figcaption>
    </figure>
  )
}

Card.propTypes = {
  movie: PropTypes.object.isRequired,
}
