import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
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
        <h1 className='app__selection-title title'>Our recommendation</h1>
        <div className='app__selection-wrapper'>
          <Swiper 
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: swiperPrevRef.current,
              nextEl: swiperNextRef.current
            }}
            spaceBetween={25}
            speed={800}
            loopFillGroupWithBlank={true}
            loop
            className='app__selection-wrapper__swiper'
            breakpoints={{
              280: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              430: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              620: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1150: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              1500: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
              2000: {
                slidesPerView: 7,
                slidesPerGroup: 7,
              }
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperPrevRef.current;
              swiper.params.navigation.nextEl = swiperNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            >
            {
            Array(70).fill().map((idx, index) => {
            const randomIndex = Math.floor(70 * Math.random());
            const product = data.products[randomIndex];

            return (
              <SwiperSlide key={`product-${index}`} className='app__selection-wrapper__swiper-slide'>
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
                <div className='selection__swiper-background purple__bg'></div>
              </SwiperSlide>
            )})}
            <div className='swiper-left' ref={swiperPrevRef}>
              <BsFillArrowLeftSquareFill />
            </div>
            <div className='swiper-right' ref={swiperNextRef}>
              <BsFillArrowRightSquareFill />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
};

export default Selection;
