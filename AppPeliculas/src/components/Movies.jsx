/* eslint-disable react/prop-types */
export function ListMovies ({ movies }) {
  return (
        <ul className='movies gap-4'>
            {
                movies.map(movie => (
                  <li className='text-white text-center' key={movie.id}>
                        <h3 className='font-bold'>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title} />
                        <span>{movie.year}</span>
                    </li>
                ))
            }

        </ul>
  )
}
export function NoMoivesResult () {
  return (
        <p>No se encontraron resultados</p>
  )
}
export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListMovies movies={movies}></ListMovies>
      : <NoMoivesResult></NoMoivesResult>
  )
}
