import React, { useState } from 'react'

import { Cards } from './Cards'
import { Form } from './Form'

import './MovieSearch.css'

import api from 'api'

export const MovieSearch = () => {
  const [movies, SetMovies] = useState([])
  const [isVisible, SetIsVisible] = useState(false)

  const searchHandler = async (event) => {
    // we only need the results property
    const {results} = await api.index(event.target.elements[0].value)
    SetMovies(results)
  }

  // const fetchSimilar = async (event) => {
  //   // we only need the results property
  //   const {results} = await api.similar(event)
  //   SetMovies(results)
  // }

  const showSimilarSection = () => {
    SetIsVisible(wasOpened => !wasOpened)
    //const results = await api.similar()
  }

  return (
    <main>
      <Form handler={searchHandler}/>
      <div className="cards">
      <Cards movies={movies} showSimilar={showSimilarSection} isVisible={isVisible}/>
      </div>
    </main>
  )
}
