import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const handleOpenProduct = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <>
      <div className='relative py-12 px-6'>
        <h1 className='title italic text-right'>Recomandările noastre</h1>
        <div className='flex justify-between'>
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
            className='app__selection-wrapper__swiper relative'
            breakpoints={{
              280: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              430: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              680: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1150: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1500: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              2000: {
                slidesPerView: 6,
                slidesPerGroup: 6,
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
            const randomIndex = Math.floor(140 * Math.random());
            const product = data.products[randomIndex];

            return (
              <SwiperSlide 
                key={`product-${index}`} 
                className='relative flex flex-col items-center cursor-pointer rounded-lg p-5 gap-y-3 app__selection-wrapper__swiper-slide' 
                onClick={() => handleOpenProduct(product.id)}
              >
                <div className='w-full app__selection-wrapper__swiper-slide__image'>
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className='w-full app__selection-wrapper__swiper-slide__image'
                  />
                </div>
                <div className='flex flex-col justify-between items-center h-full gap-y-3 text-center'>
                  <h1 className='p__headtext'>{product.name}</h1>
                  <p className='font-menu text-lg font-bold tracking-wider text-blue'>{(product.price).toFixed(2)} RON</p>
                </div>
              </SwiperSlide>
            )})}
            <div className='left-8 top-1/2 opacity-100 rounded-lg text-yellow bg-dark swiper-left' ref={swiperPrevRef}>
              <BsFillArrowLeftSquareFill />
            </div>
            <div className='right-8 top-1/2 opacity-100 rounded-lg text-yellow bg-dark swiper-right' ref={swiperNextRef}>
              <BsFillArrowRightSquareFill />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
};

export default Selection;
