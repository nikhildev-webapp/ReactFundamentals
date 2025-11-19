import React, { useState } from 'react'
import { faqData } from '../../Data';
import AccordionItem from './AccordionItem';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex)=>(prevIndex===index?null:index))
    }
  return (
      <>
          <div className='accordion-container'>
              {faqData.map((item, index) => (
                  <AccordionItem
                      key={item.id}
                      question={item.question}
                      answer={item.answer}
                      isOpen={activeIndex === index}
                      onClick={()=>handleItemClick(index)}
                  />
              ))}
          </div>
      </>
  )
}

export default Accordion