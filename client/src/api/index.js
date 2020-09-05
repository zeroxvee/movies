import dotenv from "dotenv"

dotenv.config()

// Exporting out a FUNCTION (not an Object!)
export default (baseURL = `http://localhost:${process.env.REACT_APP_PORT}`) =>
  // Invoking this function returns an object that ENCLOSES whatever 'baseURL' is
  ({
    // This is nothing but a method that is inside of the returned object 👆🏽
    async index(query) {
      const res = await fetch(`${baseURL}?query=${query}`)

      return await res.json()
    },
  })
