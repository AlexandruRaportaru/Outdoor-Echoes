import React from 'react';
import { images } from '../../constants';

import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
        <img src={images.newsletter} alt='newsletter' className='app__newsletter-banner'/>
        <div className='app__newsletter-background purple__bg'></div>
        <div className='app__newsletter-content'>
            <h1 className='p__headtext'>Join and receive exclusive benefits</h1>
            <div className='app__newsletter-content_gif'>
                <img src={images.hiker} alt='hiker'/>
            </div>
            <form method='post' className='app__newsletter-content_input'>
                <input type='text' placeholder='Enter your email...'/>
                <button type='submit' className='custom__button'>SUBSCRIBE</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter