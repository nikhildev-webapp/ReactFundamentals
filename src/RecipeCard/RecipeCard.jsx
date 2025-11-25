import React from 'react'

const RecipeCard = ({Name,category,time,image,ingredients,instruction}) => {
  return (
    <div style={{border:'1px solid',display:'inline-block',padding:'10px'}}>
          <h1>Recipe:{Name}</h1>
          <p><strong>Category:</strong>{category}</p>
          <p><strong>Time:</strong>{time}</p>
          <img src={image} alt="image" />
          <p><strong>Ingredients:</strong>{ingredients}</p>
          <p><strong>Instructions:</strong>{instruction}</p>
    </div>
  )
}

export default RecipeCard