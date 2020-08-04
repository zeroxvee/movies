import PropType from 'prop-types'
import React from 'react'

import './Cards.css'

export const Cards = ({ movies }) => {

 return movies.map((movie, i) =>
    <figure key={i}>
      <img alt="" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}>
      </img>
      <figcaption>
      <p>Title: &quot;{movie.title}&quot;</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Description: {movie.overview}</p>
      </figcaption>
    </figure>)
}

Cards.propType = {
  movies: PropType.array,
  submitHandler: PropType.func,
  value: PropType.string,
  search: PropType.string,
  handler: PropType.func,
}
