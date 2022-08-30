import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { images, data } from '../../constants';

import './Header.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Header = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  return (
    <>
      <div className='app__header' id='home'>
        <img src={images.headerBackground} alt='header-cover'/>
        <div className='app__header-background'></div>
        <div className='app__header-wrapper section__padding'>
          <Swiper 
            modules={[Navigation]}
            navigation={{
              prevEl: swiperPrevRef.current,
              nextEl: swiperNextRef.current
            }}
            speed={800}
            slidesPerView={1}
            loop
            className='app__header-wrapper__swiper'
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperPrevRef.current;
              swiper.params.navigation.nextEl = swiperNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            >
            {data.swiperImages.map((slide, index) => (
              <SwiperSlide className='app__header-wrapper__swiper-slide'>
                <img key={index} src={slide.slideBrand} alt='index'/>
                <div className='background'></div>
              </SwiperSlide>
            ))}
            <div className='swiper-left' ref={swiperPrevRef}>
              <BsChevronDoubleLeft />
            </div>
            <div className='swiper-right' ref={swiperNextRef}>
              <BsChevronDoubleRight />
            </div>
          </Swiper>
          <div className='app__header-wrapper__content'>
            <div className='app__header-wrapper__content-discount'>

            </div>
            <div className='app__header-wrapper__content-facebook'>
              <p></p>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;
