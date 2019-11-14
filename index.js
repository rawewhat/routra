'use strict'

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = exports.Link = void 0

var _react = _interopRequireWildcard(require('react'))

var _stora = _interopRequireDefault(require('@rawewhat/stora'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj['default'] = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  )
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === '[object Arguments]'
    )
  ) {
    return
  }
  var _arr = []
  var _n = true
  var _d = false
  var _e = undefined
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value)
      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']()
    } finally {
      if (_d) throw _e
    }
  }
  return _arr
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr
}

function getConfig(config) {
  if (config) return config

  try {
    return require('../../../routra.config')['default']
  } catch (e) {
    try {
      return require('../../../src/routra.config')['default']
    } catch (e) {
      return [
        {
          path: '/',
          screen: _react['default'].createElement('span', null, 'Routra Demo')
        }
      ]
    }
  }
}

var Router = function Router() {
  var _useStora = (0, _stora['default'])(),
    _useStora2 = _slicedToArray(_useStora, 1),
    route = _useStora2[0].routra.route

  var config = getConfig()

  var Component = _react['default'].createElement('span', null, 'Error')

  config.forEach(function(cfg) {
    if (cfg.path.length <= 1 && cfg.path.startsWith('/'))
      Component = _react['default'].cloneElement(cfg.screen)
    else {
      var path = cfg.path.startsWith('/') ? cfg.path.replace('/', '') : cfg.path
      console.log('path', path, 'route', route)

      if (path === route) {
        var Comp = cfg.screen
        Component = _react['default'].createElement(Comp, null)
      }
    }
  })
  var Screen = (0, _react.useMemo)(
    function() {
      return Component
    },
    [route]
  )
  return _react['default'].createElement(
    _react.Suspense,
    {
      fallback: _react['default'].createElement('span', null, 'Loading')
    },
    Screen
  )
}

var Link = function Link(_ref) {
  var title = _ref.title,
    path = _ref.path

  var _useStora3 = (0, _stora['default'])(),
    _useStora4 = _slicedToArray(_useStora3, 2),
    visit = _useStora4[1].routra.visit

  return (0, _react.useMemo)(function() {
    return _react['default'].createElement(
      'span',
      {
        style: {
          cursor: 'pointer',
          color: 'blue',
          textDecoration: 'underline'
        },
        onClick: function onClick() {
          if (path.length > 1 && path.startsWith('/')) {
            path = path.replace('/', '')
          }

          visit(path)
          window.history.pushState(
            {
              title: title,
              path: path
            },
            title,
            path
          )
        }
      },
      title
    )
  }, [])
}

exports.Link = Link
var _default = Router
exports['default'] = _default
