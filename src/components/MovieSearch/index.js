import React, {useEffect, useState} from 'react'

import {Cards} from './Cards'
import {Form} from './Form'

import api from 'api'

export const MovieSearch = () => {

  const [movies, SetMovies] = useState([])

  useEffect(() => {
    (async () => {
      SetMovies(await api.index())
    })()

  }, [])

  return (
    <main>
      <Form />
      <Cards />
    </main>
  )
}
