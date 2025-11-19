import React from 'react'

const AccordionItem = ({question,answer,isOpen,onClick}) => {
  return (
      <>
          <div className='accordion-item'>
              <button className='accordion-title' onClick={onClick} aria-expanded={isOpen}>
                  <div>{question}</div>
                  <div>{isOpen? "-":'+'}</div>
              </button>
              {isOpen && (
                  <div className='accordion-content'>
                      <p>{answer}</p>
                  </div>
              )}
          </div>
      </>
  )
}

export default AccordionItem