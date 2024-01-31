import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

import './Header.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Header = () => {
  return (
    <>
      <div className='relative header'>
        <img src={images.headerBackground} alt='header-cover' className='object-cover w-full'/>
        <div className='bg-dark absolute top-0 left-0 w-full h-full z-20 opacity-20'></div>
        <div className='absolute z-30 content'>
          <h1 className='font-anton text-white'>EXPLOREAZĂ ÎMPREJURIMILE</h1>
          <p className='font-yanone text-white font-bold'>Pentru a sparge recorduri sau pentru a doborî bariere.<br/> Toți facem asta, cu un anume motiv. Doar tu poți să-ți descoperi calea.</p>
          <Link to={`/products`} className='custom__button'>DESCOPERĂ</Link>
        </div>
      </div>
    </>
  )
};

export default Header;