import dotenv from 'dotenv'

dotenv.config()

export default {
  async index(query) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&include_adult=false`)

      if (res.status > 400) {
        throw new Error(res.status)
      }

      return await res.json()
    }

    catch (error) {
      return `Currently facing issue with: ${error.message}`
    }
  },

  // Use movie id to find the recommendations
  async similar(id) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)

      if (res.status > 400) {
        throw new Error(res.status)
      }

      return await res.json()
    }

    catch (error) {
      return `Currently facing issue with: ${error.message}`
    }

  },

}
