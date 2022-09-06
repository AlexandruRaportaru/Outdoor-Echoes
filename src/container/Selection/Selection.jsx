import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { data } from '../../constants';

import './Selection.css';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const Selection = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  return (
    <>
      <div className='app__selection'>
        <h1 className='app__selection-title p__yanone'>Our selection</h1>
        <div className='app__selection-wrapper'>
          <Swiper 
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: swiperPrevRef.current,
              nextEl: swiperNextRef.current
            }}
            
            spaceBetween={20}
            
            speed={800}
            loopFillGroupWithBlank={true}
            loop
            className='app__selection-wrapper__swiper'
            breakpoints={{
              // when window width is >= 640px
              280: {
                slidesPerView: 1,
                slidesPerGroup: 1
              },
              430: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 14,
              },
              620: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 16,
              },
              // when window width is >= 768px
              812: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 18
              },
              1150: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 20
              },
              1500: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 22
              },
              2000: {
                slidesPerView: 7,
                slidesPerGroup: 7,
                spaceBetween: 24
              }
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperPrevRef.current;
              swiper.params.navigation.nextEl = swiperNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            >
            {data.products.map(product => (
              <SwiperSlide key={product.name} className='app__selection-wrapper__swiper-slide'>
                <img 
                  src={data.brands[product.brand].logo} 
                  alt={product.name} 
                  className='app__selection-wrapper__swiper-slide__logo' 
                  style={{width: `${data.brands[product.brand].logoSize}%`}}
                />
                <div className='app__selection-wrapper__swiper-slide__image'>
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className='app__selection-wrapper__swiper-slide__image'
                  />
                </div>
                <div className='app__selection-wrapper__swiper-slide__text'>
                  <h1 className='p__headtext'>{product.name}</h1>
                  <p>{(product.price).toFixed(2)} RON</p>
                </div>
                <div className='swiper-background purple__bg'></div>
              </SwiperSlide>
            ))}
            <div className='swiper-left' ref={swiperPrevRef}>
              <BsChevronDoubleLeft />
            </div>
            <div className='swiper-right' ref={swiperNextRef}>
              <BsChevronDoubleRight />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
};

export default Selection;
