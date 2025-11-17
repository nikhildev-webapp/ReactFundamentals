import React, { useState } from 'react'

const ConditionGreeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
      <>
          <h1>Condition Greeting</h1>
          <p>Check the user is logged in or not and then greet message</p>
          {isLoggedIn ? (
            <p>Welcome!</p>
          ): (
             <p>Please Login</p>     
          )}
      </>
  )
}

export default ConditionGreeting