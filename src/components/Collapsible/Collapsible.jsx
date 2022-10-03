import React, { useState, useRef, useEffect } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

import './Collapsible.css';

const Collapsible = ({children, title}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const ref = useRef();

  const handleOpenFilter = () => {
    ref.current.style.transition = 'height ease 0.4s';
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(true);
  }, []);
  
  return (
    <div className='collapsible'>
      <div className='collapse'>
        <h3 className='title'>{title}</h3>
        <button className='collapse__button' onClick={() => handleOpenFilter()}>
          {isOpen ? <FiMinusCircle /> : <FiPlusCircle />}
        </button>
      </div>
      <div 
        className='options' 
        ref={ref} 
        style={(isOpen && ref.current) ? {height: ref.current.scrollHeight + 'px'} : {height: '0px'}}
      >
        {children}
      </div>          
    </div>
  )
}

export default Collapsible;