//create a greet card and pass the value using props
import React from 'react'

const GreetingCard = ({name,age,greet,quote}) => {
  return (
      <>
          <div>
              <h3>Happ{age}th BirthDay.</h3>
              <h3>{name}</h3>
              <p>{quote}</p>
         </div>
      </>
  )
}

export default GreetingCard