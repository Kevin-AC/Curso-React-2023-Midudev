// import { useEffect, useRef, useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  // const [query, setQuery] = useState('')
  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) => {
    const newSearch = event.target.value // buscar letra por letra
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header className="text-center text-white mb-8">
        <h1 className="mb-4 text-3xl font-semibold">Buscador de peliculas</h1>
        <form className="flex gap-4 items-center justify-center" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' className="bg-slate-900 rounded-lg p-2" placeholder="Avenger,Captain Marvel ..." />
          <input type="checkbox" onChange={handleSort} name="" id="" />
          <button type='submit' className="w-auto  p-2 border border-white rounded-xl hover:bg-slate-900">Buscar</button>
        </form>

        {error && <p className='text-red-700'>{error}</p>}
      </header>
      <main className='w-full  max-w-[80%] text-white text-center' >
        {loading ? <p>Cargando...</p> : <Movies movies={movies}></Movies>}

      </main>
    </div>
  )
}

export default App
