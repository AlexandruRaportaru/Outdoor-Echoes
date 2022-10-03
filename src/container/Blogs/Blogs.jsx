import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";
import { data, images } from '../../constants';

import './Blogs.css';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Blogs = () => (
  <div className='app__blogs'>
    <h1 className='app__blogs-title title'>Useful Links</h1>
    <div className='app__blogs-content'>
      <div className='app__blogs-wrapper'>
        <Swiper 
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 70,
            shadowScale: 0.94,
          }}
          modules={[EffectCube]}
          className='app__blogs-wrapper_swiper'
          >
          {data.blogs.map((blog, index) => (
            <SwiperSlide key={index} className='app__blogs-wrapper_swiper-slide'>
              <a 
                href={blog.blogLink}
                target='_blank' 
                rel='noreferrer' 
                className='app__blogs-wrapper_blog'
              >
                <div className='app__blogs-wrapper_blog-image'>
                  <img src={blog.blogImage} alt={blog.blogHeadtext}/>
                </div>
                <div className='app__blogs-wrapper_blog-text'>
                  <div  className='click'>
                    <img src={images.click} alt='click'/>
                  </div>
                  <h3 className='p__headtext'>{blog.blogHeadtext}</h3>
                  <p className='p__yanone'>{blog.blogText}</p>
                  <div  className='rotate'>
                    <img src={images.cube} alt='rotate'/>
                  </div>
                </div>
                <div className='blog__background purple__bg'></div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div> 
  </div>
);

export default Blogs;
