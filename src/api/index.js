export default {
  async index() {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=1337c95de66011a29077e1459037757d"
    )

  return await res.json()
  },
}
