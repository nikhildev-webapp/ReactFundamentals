import React, { useState } from 'react'

const InputTracker = () => {
    const [inputText, setInputText] = useState('')
    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }
  return (
        <>
          <h1>Enxercise-Real Time Input Tracker</h1>
          <input type="text" value={inputText} onChange={handleInputChange} />
          <p>Text <typed:strong>{inputText}</typed:strong></p>
        </>
  )
}

export default InputTracker