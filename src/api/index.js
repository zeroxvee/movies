import dotenv from 'dotenv'

dotenv.config(  )

export default {
  async index() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`
    )

  return await res.json()
  },
}
