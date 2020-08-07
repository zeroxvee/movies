import React, { useState } from 'react'

import { Cards } from './Cards'
import { Form } from './Form'

import './MovieSearch.css'

import api from 'api'

export const MovieSearch = () => {
  const [movies, SetMovies] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])

  const searchHandler = async (event) => {
    // we only need the results property
    const { results } = await api.index(event.target.elements[0].value)
    SetMovies(results)
  }

  // const fetchSimilar = async (event) => {
  //   // we only need the results property
  //   const {results} = await api.similar(event)
  //   SetMovies(results)
  // }

  const showSimilarSection = async (id) => {
    const { results } = await api.similar(id)
    setSimilarMovies(results)
    return (
      results.map((movie, i) => (
        <div key={i}>
          <p>{movie.title}</p>
        </div>
      )
      )
    )
  }

  return (
    <main>
      <Form handler={searchHandler} />
      <div className="cards">
        <Cards movies={movies}  />
      </div>
    </main>
  )
}

//showSimilar={showSimilarSection}
