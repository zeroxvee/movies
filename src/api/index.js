import dotenv from 'dotenv'

dotenv.config(  )

export default {
  async index(query) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&include_adult=false`

    )
  return await res.json()
  },

  async similar(query) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${query}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

    )
  return await res.json()
  },
}
