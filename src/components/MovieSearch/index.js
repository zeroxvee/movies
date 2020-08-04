import React, { useState } from 'react'

import { Cards } from './Cards'
import { Form } from './Form'



import api from 'api'

export const MovieSearch = () => {
  const [movies, SetMovies] = useState([])
  const [search, SetSearch] = useState('')

  const searchHandler = async (event) => {
    // we only need the results property
    const {results} = await api.index(event.target.elements[0].value)
    SetMovies(results)
  }

  const cardHandler = (event) => {

  }

  return (
    <main>
      <Form search={search} handler={searchHandler}/>
      <Cards movies={movies} />
    </main>
  )
}
