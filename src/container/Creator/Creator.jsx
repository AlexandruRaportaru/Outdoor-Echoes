import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { data, images } from '../../constants';

import './Creator.css';
import 'swiper/css';
import "swiper/css/effect-cards";

const Creator = () => (
  <div className='app__creator section__padding'>
    <h1 className='app__creator-title title'>Creator's Word</h1>
    <div className='app__creator-wrapper'>
      
      <Swiper 
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className='app__creator-wrapper_swiper'
        >
        {data.creatorImages.map((image, index) => (
          <SwiperSlide key={index} className='app__creator-wrapper_swiper-slide'>
            <div className='app__creator-wrapper_swiper-slide_image'>
              <img src={image} alt={index} />
            </div>
            <div className='creator__swiper-background purple__bg'></div>
          </SwiperSlide>
        ))}
        <div className='swipe__hand'>
          <img src={images.swipe} alt='swipe'/>
          <span className='p__yanone' style={{color: 'var(--color-blue)'}}>SWIPE</span>
        </div>
      </Swiper>
      
      
      <div className='app__creator-wrapper_content'>
        <h1 className='p__logo'>What We Belive In</h1>
        <div>
          <img src={images.quote} alt='quote'/>
          <p>I’m a mountain addict and I’ll always be. My whole life is mountains. I love them and feel so alive each time I climb one. </p>
        </div>
        <br />
        <p>You find deep peacefulness when spending time on a mountain. It is a unique feeling of calm and tranquility that you need to experience to understand. It filters through you, and stays with you for a time after you leave. <br /><br /> When walking on a mountain, take time to sit down and reflect for a while: appreciate the stillness, and listen to the silence. You’ll be glad you did.</p>
        <h2 className='p__logo'>Alex Raportaru</h2>
        <span>Website Owner & Creator</span>
      </div>
    </div>
  </div>
);

export default Creator;
