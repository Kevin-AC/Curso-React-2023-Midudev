/* eslint-disable react/prop-types */
import { Suspense, lazy } from 'react'

import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Router } from './components/Router'
import { Route } from './components/Route'

const lazyHomePage = lazy(() => import('./pages/Home.jsx'))// import dinamico
const lazyAboutPage = lazy(() => import('./pages/About.jsx'))// import dinamico
// al usar lazy se debe envolver las rutas en suspense
const routes = [
  {
    path: '/:lang/about',
    Component: lazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main className='flex flex-col justify-center items-center text-white gap-6'>
      <Suspense fallback={<div>Loading...</div>}>{/* fallback muestra algo mientras carga */}
        <Router routes={routes} defaultComponent={Page404}>
          <Route path={'/'} Component={lazyHomePage}/>
          <Route path={'/about'} Component={lazyAboutPage} />
        </Router>
      </Suspense>

    </main>
  )
}

export default App
