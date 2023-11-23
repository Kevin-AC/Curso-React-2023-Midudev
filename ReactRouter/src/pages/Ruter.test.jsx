import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Router } from '../components/Router'
import { Route } from '../components/Route'
import { Link } from '../components/Link'
import { getCurrentPath } from '../utils/getCurrentPath'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  it('should render without problems', () => {
    render(<Router routes={[]}/>)
    expect(true).toBeTruthy()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} defaultComponet={() => <h1>404</h1>}/>)
    expect(screen.getByText('404')).toBeTruthy()
  })
  it('should render without problems', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]
    render(<Router routes={routes}/>)
    expect(screen.getByText('About')).toBeTruthy()
  })
  it('should navigate using link', async () => {
    getCurrentPath.mockReturnValueOnce('/')
    render(
    <Router >
      <Route path='/' component={() => {
        return (
          <>
            <h1>Home</h1>
            <Link to='/about' >Go to About</Link>
          </>
        )
      }}
      />
      <Route path='/about' component={() => <h1>About</h1>}/>

    </Router>)
    // click on the link
    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)
    const aboutTitle = await screen.findByText('About')
    // check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})
