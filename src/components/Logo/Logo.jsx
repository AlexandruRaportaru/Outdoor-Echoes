import React from 'react';
import { GiHiking } from 'react-icons/gi';

import './Logo.css';

const Logo = () => (
  <div className='logo'>
    <GiHiking className='logo__icon'/>
    
    <div className='logo__text'>
      <p className='p__logo flex__center'>outdoor</p>
      <span>
        <p className='p__logo'>ECHO</p>
        <div className='logo__text-letter'>
          <p className='p__logo reverse'>E</p>
        </div>
        <p className='p__logo'>S</p>
      </span>
    </div>
  </div>
);

export default Logo;
