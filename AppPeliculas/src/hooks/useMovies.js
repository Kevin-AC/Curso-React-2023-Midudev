import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      previousSearch.current = search
      searchMovies({ search }).then(setMovies)
    } catch {

    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { // ordenamos y guardamos en useMemo
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
