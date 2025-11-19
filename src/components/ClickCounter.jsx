import React, { useState } from 'react'

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const buttonClicked = () => {
        setCount(count+1)
    }
    
  return (
      <>
          <h1>Count the Button How many time clicked</h1>
          <h4>Button clicked {count}times</h4>
          <button onClick={buttonClicked}>ClikcMe</button>
          <button onClick={()=>{setCount(0)}}>reset</button>
      </>
  )
}

export default ClickCounter