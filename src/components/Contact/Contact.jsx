import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
      <>
          <div className='formContainer'>
              <form action="">
                  <h2>ContactUs</h2>
                  <div className="contactImg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_urQ6ieDyKpiSVkGJje6lIMKLDWRfwdYa4w&s" alt="" />
                  </div>
                  <div className="inputContainer">
                      <label htmlFor="Name">Name</label><br />
                      <input type="text" id='Name' placeholder='Your Name'/>
                  </div>
                   <div className="inputContainer">
                      <label htmlFor="service">Service you need</label><br />
                      <select name="services" id="service">
                          <option value="select">Select</option>
                          <option value="WebDevelopment">WebDevelopment</option>
                          <option value="MobileDevelopment">AppDevelopment</option>
                          <option value="DigitalMarketing">DigitalMarketing</option>
                      </select>
                  </div>
                  <div className="inputContainer">
                      <label htmlFor="budget">What budget do you have <br />available</label><br />
                      <input type="text" id='budget' placeholder='Enter You Budget'/>
                  </div>
                  <div className="inputContainer">
                      <label htmlFor="projectDescription">Message</label><br />
                      <textarea  rows={5} type="text" id='projectDescription' placeholder='Please tell us about you project and what you need'/>
                  </div>
                  <button>Send</button>
              </form>
         </div>
      </>
  )
}

export default Contact