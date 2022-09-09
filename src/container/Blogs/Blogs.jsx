import React from 'react';
import { images } from '../../constants';

import './Blogs.css';

const Blogs = () => (
  <div className='app__blogs'>
    <h1 className='app__blogs-title p__yanone'>Useful Links</h1>
    <div className='app__blogs-wrapper'>
      <a href='/' className='app__blogs-wrapper_blog'>
        <div className='app__blogs-wrapper_blog-image'>
          <img src={images.rain} alt='rain'/>
        </div>
        <div className='app__blogs-wrapper_blog-text'>
          <h3 className='p__headtext'>Waterproof buying guide</h3>
          <p className='p__yanone'>Find out everything you need to know about this outdoor essential.</p>
        </div>
        <div className='blog__background purple__bg'></div>
      </a>

      <a href='/' className='app__blogs-wrapper_blog'>
        <div className='app__blogs-wrapper_blog-image'>
          <img src={images.boot} alt='rain'/>
        </div>
        <div className='app__blogs-wrapper_blog-text'>
          <h3 className='p__headtext'>Fit your footwear</h3>
          <p className='p__yanone'>Let our experts help you make the right boot choice.</p>
        </div>
        <div className='blog__background purple__bg'></div>
      </a>

      <a href='https://alexandruraportaru.github.io/Alex-s-Weather-App/' target='_blank' rel='noreferrer' className='app__blogs-wrapper_blog'>
        <div className='app__blogs-wrapper_blog-image'>
          <img src={images.weather} alt='rain'/>
        </div>
        <div className='app__blogs-wrapper_blog-text'>
          <h3 className='p__headtext'>Best Weather App</h3>
          <p className='p__yanone'>Check the weather forecast before making your hiking plans.</p>
        </div>
        <div className='blog__background purple__bg'></div>
      </a>

      <a href='https://alexandruraportaru.github.io/Alex-s-Todo-List/' target='_blank' rel='noreferrer' className='app__blogs-wrapper_blog'>
        <div className='app__blogs-wrapper_blog-image'>
          <img src={images.todo} alt='rain'/>
        </div>
        <div className='app__blogs-wrapper_blog-text'>
          <h3 className='p__headtext'>Use the Todo App</h3>
          <p className='p__yanone'>Make a list of things you need on the mountain. It's better to be prepared.</p>
        </div>
        <div className='blog__background purple__bg'></div>
      </a>

      <a href='/'className='app__blogs-wrapper_blog'>
        <div className='app__blogs-wrapper_blog-image'>
          <img src={images.night} alt='rain'/>
        </div>
        <div className='app__blogs-wrapper_blog-text'>
          <h3 className='p__headtext'>Tips for Night Walk</h3>
          <p className='p__yanone'>The mountains at night can be hazardous, but also wonderful. Take some notes.</p>
        </div>
        <div className='blog__background purple__bg'></div>
      </a>
    </div>
  </div>
);

export default Blogs;
