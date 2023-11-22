export const searchMovies = async ({ search }) => {
  const MOVIE_API = `https://www.omdbapi.com/?apikey=f3fb1fb0&s=${search}`
  if (search === '') return null
  try {
    const response = await fetch(MOVIE_API)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error al buscar Movies')
  }
}
