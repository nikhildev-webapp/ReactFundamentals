import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [budget, setBudget] = useState('');
    const [message, setMeesage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name of Person:',name)
        console.log('Service he Want:', service)
        console.log('Budget he Have:',budget)
        console.log('Project requirment he want:',message)
    }
  return (
      <>
          <div className='formContainer'>
              <form action="" onSubmit={handleSubmit}>
                  <h2>ContactUs</h2>
                  <div className="contactImg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_urQ6ieDyKpiSVkGJje6lIMKLDWRfwdYa4w&s" alt="" />
                  </div>
                  <div className="inputContainer">
                      <label htmlFor="Name">Name</label><br />
                      <input type="text" required id='Name' value={name} placeholder='Your Name' onChange={(event)=>{setName(event.target.value)}}/>
                  </div>
                   <div className="inputContainer">
                      <label htmlFor="service">Service you need</label><br />
                      <select name="services" required id="service" value={service} onChange={(event)=>{setService(event.target.value)}}>
                          <option value="select">Select</option>
                          <option  required value="WebDevelopment">WebDevelopment</option>
                          <option required value="MobileDevelopment">AppDevelopment</option>
                          <option required value="DigitalMarketing">DigitalMarketing</option>
                      </select>
                  </div>
                  <div className="inputContainer">
                      <label htmlFor="budget">What budget do you have <br />available</label><br />
                      <input type="text" id='budget' required placeholder='Enter You Budget' value={budget} onChange={(event)=>{setBudget(event.target.value)}}/>
                  </div>
                  <div className="inputContainer">
                      <label htmlFor="projectDescription">Message</label><br />
                      <textarea  rows={5} type="text" id='projectDescription' required placeholder='Please tell us about you project and what you need' value={message} onChange={(event)=>{setMeesage(event.target.value)}}/>
                  </div>
                  <button>Send</button>
              </form>
         </div>
      </>
  )
}

export default Contact