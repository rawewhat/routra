import React, { Suspense, useEffect, useMemo } from 'react'
import useStora from '@rawewhat/stora'

function getConfig(config) {
  if (config) return config
  try {
    return require('../../../routra.config').default
  } catch (e) {
    try {
      return require('../../../src/routra.config').default
    } catch (e) {
      return [
        {
          path: '/',
          screen: <span>Routra Demo</span>
        }
      ]
    }
  }
}

const Router = () => {
  const [
    {
      routra: { route }
    }
  ] = useStora()
  const config = getConfig()
  let Component = <span>Error</span>
  config.forEach(cfg => {
    if (cfg.path.length <= 1 && cfg.path.startsWith('/'))
      Component = React.cloneElement(cfg.screen)
    else {
      const path = cfg.path.startsWith('/')
        ? cfg.path.replace('/', '')
        : cfg.path
      console.log('path', path, 'route', route)
      if (path === route) {
        const Comp = cfg.screen
        Component = <Comp />
      }
    }
  })
  const Screen = useMemo(() => Component, [route])

  return <Suspense fallback={<span>Loading</span>}>{Screen}</Suspense>
}

const Link = ({ title, path }) => {
  const [
    ,
    {
      routra: { visit }
    }
  ] = useStora()

  return useMemo(
    () => (
      <span
        style={{
          cursor: 'pointer',
          color: 'blue',
          textDecoration: 'underline'
        }}
        onClick={() => {
          if (path.length > 1 && path.startsWith('/')) {
            path = path.replace('/', '')
          }
          visit(path)
          window.history.pushState(
            {
              title,
              path
            },
            title,
            path
          )
        }}
      >
        {title}
      </span>
    ),
    []
  )
}

export { Link }
export default Router
