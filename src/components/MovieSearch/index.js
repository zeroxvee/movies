import React, { useState } from "react"

import { Cards } from "./Cards"
import { Form } from "./Form"

import "./MovieSearch.css"

import api from "api"

export const MovieSearch = () => {
  const [movies, setMovies] = useState([])

  const searchHandler = async (event) => {
    event.preventDefault()

    // we only need the results property
    const { results } = await api.index(event.target.elements[0].value)
    setMovies(results)
  }

  return (
    <main>
      <Form handler={searchHandler} />
      <div className="cards">
        <Cards movies={movies} />
      </div>
    </main>
  )
}
