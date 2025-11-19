import React, { useState } from 'react'


const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleloginSubmit = (event) => {
        event.preventDefault();
        if (!userName || !password) {
            alert('please fill the filed');
            setIsSubmitted(false);
            return
        }
        setIsSubmitted(true)
        alert("Thank you for Login");
    }

    const savUserName = (event) => {
        setUserName(event.target.value)
        setIsSubmitted(false)
    }

    const savePassword = (event) => {
        setPassword(event.target.value)
        setIsSubmitted(false);
    }
  return (
      <>
          <div>
              <h1>Dummy-Login Form</h1>
              <form onSubmit={handleloginSubmit}>
                  <div>
                      <label htmlFor="userName">Name:</label>
                      <input type="text" value={userName} id='userName' placeholder='Enter userName...' onChange={savUserName}/>
                  </div>
                  <div>
                      <label htmlFor="password">Password:</label>
                      <input type="password"  value={password} id='password' placeholder='Enter Password' onChange={savePassword}/>
                  </div>
                  <button type="submit">Login</button>
                  {isSubmitted ? (
                      <div>
                          <p>UserDeatils:</p>
                          <p>UserName:{userName}</p>
                          <p>Password:{password}</p>
                      </div>
                  ) : (
                          <p>Please Fill the details</p>
                 )}
              </form>
          </div>    
      </>
  )
}

export default LoginForm