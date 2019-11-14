# RoutRa

RoutRa is a [StoRa](https://github.com/rawewhat/stora) plugin for simple routing solution in React.

## Content

- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Example](#example)
- [License](#license)

## Install

using npm  
`npm i @rawewhat/routra`

using yarn  
`yarn add @rawewhat/routra`

## Setup

create a routra config file in either root or src directory of your project.

Example:
/routra.config.js
/src/routra.config.js

```javascript
import React, { lazy } from 'react'
// Code splitting with lazy and dynamic import
const Demo1 = lazy(() => import('./screens/Demo1'))
const Demo2 = lazy(() => import('./screens/Demo2'))
const Demo3 = lazy(() => import('./screens/Demo3'))

export default [
  {
    path: '/',
    screen: <span>Stora Demo</span>
  },
  {
    path: '/demo-1',
    screen: Demo1
  },
  {
    path: '/demo-2',
    screen: Demo2
  },
  {
    path: '/demo-3',
    screen: Demo3
  }
]
```

_lazy and dynamic import is to do code splitting out of the box_

## Usage

- import Router and Link

`import Router, { Link } from '@rawewhat/routra'`

- use `<Router />` will switch component based on current route.

```javascript
<Container>
  <Nav />
  <Content>
    <Router />
  </Content>
</Container>
```

- use `<Link />` to navigate between route.

```javascript
// when clicked url will switch to http://example.com/demo-screen
<Link title="Demo Screen" path="/demo-screen" />
```

## Example

```javascript
import React from 'react'
import Router, { Link } from '@rawewhat/routra'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%'
      }}
    >
      <NavContainer>
        <Link title="Home" path="/" />
        <Link title="Demo 1" path="/demo-1" />
        <Link title="Demo 2" path="/demo-2" />
        <Link title="Demo 3" path="/demo-3" />
      </NavContainer>
      <Router />
    </div>
  )
}

const NavContainer = ({ children }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      {children}
    </nav>
  )
}

export default App
```

## License

```
MIT License
-----------

Copyright (c) 2019 Cheng Sokdara (https://rawewhat-team.com)
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
```
