import React, { useState } from 'react'

const ColorBox = () => {
    const [color, setColor] = useState('#000');
    const generateNewColor = () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').slice(0, 6);
    }
    const changeColor = () => {
        const newColor = generateNewColor;
        setColor(newColor)
    }
  return (
      <>
          <h1>Exercise-4</h1>
          <p>Display Color box add a button that changes its color randomly</p>
          <div style={{backgroundColor:color}}>{color}</div>
          <button onClick={changeColor}>changeColor</button>
      </>
  )
}

export default ColorBox