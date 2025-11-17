import React from 'react'
import { useState } from 'react'

const ToggleMessage = () => {
    const [isVissble, setIsVissbile] = useState(false);
    const toggleMessage = () => {
        setIsVissbile(!isVissble);
    }
  return (
      <>
          <h1>Exercise-4</h1>
          <button onClick={toggleMessage}>
              {isVissble?'Hide Message':'show message'}
          </button>
          {isVissble && (
              <div style={{ marginTop: '10px', padding: '10px', border: '1px solid black' }}>
                  <p>I love Software devlopment</p>
              </div>
          )}
      </>
  )
}

export default ToggleMessage