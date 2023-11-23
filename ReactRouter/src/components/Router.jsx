/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { EVENTS } from '../utils/consts'

import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponet: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationchange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationchange)
    window.addEventListener(EVENTS.POPSTATE, onLocationchange)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationchange)
      window.addEventListener(EVENTS.POPSTATE, onLocationchange)
    }
  }, [])
  let routeParams = {}
  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true
    // path to regex para rutas dinamicas
    const mathcheUrl = match(path, { decode: decodeURIComponent })
    const matched = mathcheUrl(currentPath)
    if (!matched) return false
    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
