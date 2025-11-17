import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count+1)
    }
    const minusCount = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
    }
  return (
      <>
          <h1>Exercise-3</h1>
          <h1>Counter</h1>
          <p>Count{count}</p>
          <button onClick={addCount}>AddValue</button>
          <button onClick={minusCount}>MinusValue</button>
          <button onClick={reset}>reset</button>
      </>
  )
}

export default Counter