import React, { useState } from 'react'

const TooglePassword = () => {
    const [inputType, setInputType] = useState('password');

    //function toggle the input when checkbox changes
    const toggleVisibility = () => {
        setInputType(prevType=>prevType==='password'?'text':'paswword')
    }
  return (
      <div style={{padding:'10px',border:'1px solid #ccc'}}>
          <h2>Password visibility</h2>
          <label htmlFor="passwordInput" style={{ marginRight: '10px' }}>Password</label>
          <input type={inputType} id='passwordInput' placeholder='Enter your password' />
          <div style={{ marginTop: '10px' }}>
              <input type='checkbox' id='toggleCheckBox' onChange={toggleVisibility} />
              <label htmlFor="toggleCheckBox" style={{marginLeft:'5px'}}>showPassword</label>
          </div>
      </div>
  )
}

export default TooglePassword
