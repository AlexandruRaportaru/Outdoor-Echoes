import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { images, data } from '../../constants';

import './Header.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Header = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  return (
    <>
      <div className='app__header'>
        <img src={images.headerBackground} alt='header-cover' className='app__header-image'/>
        <div className='app__header-background purple__bg'></div>
        <div className='app__header-wrapper section__padding'>
          <Swiper 
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: swiperPrevRef.current,
              nextEl: swiperNextRef.current
            }}
            speed={800}
            slidesPerView={1}
            autoplay
            loop
            className='app__header-wrapper__swiper'
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperPrevRef.current;
              swiper.params.navigation.nextEl = swiperNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            >
            {data.swiperImages.map(slide => (
              <SwiperSlide key={slide.slideName} className='app__header-wrapper__swiper-slide'>
                <img 
                  src={slide.slideBrand} 
                  alt={slide.slideName} 
                  className='app__header-wrapper__swiper-slide__image'
                />
                <img 
                  src={slide.slideLogo} 
                  alt={slide.slideName} 
                  className='app__header-wrapper__swiper-slide__logo' 
                  style={{width: `${slide.logoSize}%`}}
                />
                <h1 className='p__headtext'>{slide.slideTitle}</h1>
                <p className='p__yanone'>{slide.slideParagraph}</p>
                <div className='swiper-background purple__bg'></div>
                <Link to={`/products/brand_${slide.path}`} className='custom__button'>VIEW MORE</Link>
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
              <img src={images.discount} alt='discount' className='app__header-wrapper__content-discount__image'/>
              <img src={images.discountLogo} alt='discount-logo' className='app__header-wrapper__content-discount__logo'/>
              <div className='discount-background purple__bg'></div>
              <a href='/' className='custom__button'>SHOP NOW</a>
            </div>

            <div className='app__header-wrapper__content-facebook'>
              <h1 className='app__header-wrapper__content-facebook__title'>Follow us on <span style={{color: 'var(--color-blue)'}}>Facebook</span></h1>
              <p className='app__header-wrapper__content-facebook__text'>Show us how you play in the outdoors. Mention @outdoorechoes in your photos on Facebook.</p>
              <a href='https://www.facebook.com/login/' className='custom__button'>
                <FaFacebookF style={{marginRight: '10px'}}/>FOLLOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;