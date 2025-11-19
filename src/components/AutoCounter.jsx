import React, { useState } from 'react'

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    setInterval(() => {
       setCount(count+1) 
    },1000);
  return (
      <>
          <h1>AutoCounter</h1>
          <p>The Increment of Count automatically every second</p>
          <p>Count Value <strong>{count}</strong></p>
      </>
  )
}

export default AutoCounter