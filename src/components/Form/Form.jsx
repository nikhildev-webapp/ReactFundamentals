// Signup Form – Basic form with validation and submit alert.
import React from 'react'
const FormContainer = {
    border: '1px solid',
    padding: '25px',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '20px',
}
const Form = () => {
  return (
      <>
          <div  style={FormContainer}>
              <h1 style={{textAlign:"center",fontWeight:'bold'}}>Signup Form</h1>
              <form>
                  <div>
                      <label htmlFor="firstName">FirstName:</label>
                      <input type="text" name="firstName" id="firstName" placeholder='Enter your FirstName'/>
                  </div>
                  <div>
                      <label htmlFor="lastName">LastName: </label>
                      <input type="text" name="lastName" id="lastName" placeholder='Enter your LastName'/>
                  </div>
                  <div>
                      <label htmlFor="userName">PhoneNo:</label>
                      <input type="tel" name="userName" id="userName" placeholder='Enter your PhoneNumber'/>
                  </div>
                  <div>
                      <label htmlFor="userName">Email:</label>
                      <input type="tel" name="userName" id="userName" placeholder='Enter your Email'/>
                  </div>
                  <button type='submit' style={{ margin: '10px', display: 'flex', justifySelf: "center", textAlign:'center'}}>Signup</button>
              </form>
          </div>
      </>
  )
}

export default Form
