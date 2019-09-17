
import React from 'react'
import {useRoutes} from 'hookrouter'

import One from './One'
import Two from './Two'

const routes = {
    '/one': () => <One />,
    '/two': () => <Two />
}

function App () {
  const routeResult = useRoutes(routes)
  return routeResult || <One />
}

export default App