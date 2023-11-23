/* eslint-disable react/prop-types */
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './pages/404'
import { Router } from './components/Router'
import SearchPage from './pages/Search'
const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main className='flex flex-col justify-center items-center text-white gap-6'>
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}

export default App
