import React from 'react';
import { images } from '../../constants';

import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='relative flex flex-col items-center h-96 app__newsletter'>
        <img src={images.newsletter} alt='newsletter' className='absolute h-full w-full app__newsletter-banner'/>
        <div className='h-full opacity-5 app__newsletter-background purple__bg'></div>
        <div className='flex flex-col justify-center items-start h-full py-10 app__newsletter-content'>
            <h1 className='text-center text-dark px-5 p__headtext'>Abonează-te pentru a avea beneficii!</h1>
            <div className='flex mt-5 ml-20 app__newsletter-content_gif'>
                <img src={images.hiker} alt='hiker' className='w-16 h-full'/>
            </div>
            <form method='post' className='flex justify-center items-center w-full'>
                <input type='email' className='text-dark w-1/2 border-r-0 h-10 font-menu text-lg px-2' placeholder='Adresa de email...'/>
                <button type='submit' className='h-10 custom__button'>ABONEAZĂ-TE</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter