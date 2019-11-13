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
  const Screen = useMemo(
    () =>
      config.map(cfg => {
        if (cfg.path === '' || cfg.path === '/')
          return React.cloneElement(cfg.screen, { key: cfg.path })
        const path = cfg.path.startsWith('/')
          ? cfg.path.replace('/', '')
          : cfg.path
        console.log('path', path, 'route', route)
        if (path === route) {
          const Comp = cfg.screen
          return <Comp key={path} />
        }
      }),
    [route]
  )

  return <Suspense fallback={<span>Loading</span>}>{Screen}</Suspense>
}

const Link = ({ title, path }) => {
  const [, actions] = useStora()

  return useMemo(
    () => (
      <span
        style={{
          cursor: 'pointer',
          color: 'blue',
          textDecoration: 'underline'
        }}
        onClick={() => {
          path = path.startsWith('/') ? path.replace('/', '') : path
          actions.routra.visit(path)
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
