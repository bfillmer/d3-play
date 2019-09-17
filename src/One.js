
import React from 'react'
import * as d3 from 'd3'
import useInterval from '@use-it/interval'

const MAX_POINTS = 8
const INTERVAL = 100

const initialState = {
  data: [],
  count: 0
}

const line = d3.line()
  .x(function(d) { return d[0] })
  .y(function(d) { return d[1] })

function reducer (state, action) {
  if (action) {
    return {
      data: [...state.data, action.value],
      count: action.count
    }
  }
  return state
}

function One() {
  const [{count, data}, dispatch] = React.useReducer(reducer, initialState)

  useInterval(() => {
    dispatch({
      value: [count * 100, Math.floor(Math.random() * 60)],
      count: count + 1
    })
  }, count <= MAX_POINTS ? INTERVAL : null)

  return (
    <svg width='100%' height='100%'>
      <path d={line(data)} stroke='#a00' strokeWidth='3' fill='transparent' />
    </svg>
  )
}

export default One
