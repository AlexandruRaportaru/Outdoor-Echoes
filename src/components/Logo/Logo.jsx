import React from 'react';
import { GiHiking } from 'react-icons/gi';

import './Logo.css';

const Logo = () => (
  <div className='logo'>
    <GiHiking style={{color: 'var(--color-yellow)'}} size={45}/>
    <div className='logo__text'>
      <p className='p__logo'>outdoor</p>
      <div className='flex__center'>
        <p className='p__logo'>ECHO</p>
        <div className='logo__text-letter'>
          <p className='p__logo reverse'>E</p>
        </div>
        <p className='p__logo'>S</p>
      </div>
    </div>
  </div>
);

export default Logo;
