import React from 'react';
import Logo from '../Logo/Logo';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer'>
    <div className='app__footer-content'>
      <div className='app__footer-content_services'>
        <div className='flex__center service1'>
          <img src={images.delivery} alt='delivery'/>
          <p className='p__yanone'>Free next day delivery when you spend 200.00 RON on orders placed before 8pm, Sun - Fri.</p>
        </div>
        <div className='flex__center service2'>
          <img src={images.paypal} alt='paypal' className='paypal'/>
          <p className='p__yanone'>Spread the cost and pay later with PayPal.</p>
        </div>
        <div className='flex__center service3'>
          <img src={images.spring} alt='spring' style={{width: '50px'}}/>
          <p className='p__yanone'>Spring Green is committed to an initiative to reduce its carbon footprint until 2023.</p>
        </div>
      </div>


      <div className='app__footer-content_bottom section__padding'>
        <div className='app__footer-content_bottom-left footer1'>
          <h4 className='title'>CONTACT</h4>
          <div>
            <h5 className='p__logo'>Address:</h5>
            <p className='p__text'>Pajistei 30, 4<sup>th</sup> Sector,<br />
            041 249, Bucharest, Romania
            </p>
          </div>
          <div>
            <h5 className='p__logo'>Phone:</h5>
            <a href="tel:0729941554" className='p__text'>+40 729 941 554</a>
          </div>
          <div>
            <h5 className='p__logo'>Email:</h5>
            <a href="mailto:alexandru.c.raportaru@gmail.com" className='p__text'>info@outdoorechoes.com</a>
          </div>
        </div>

        <div className='app__footer-content_bottom-center footer2'>
          <div>
            <h5 className='p__text'>"The mountains are calling and I must go."
              <span className='p__logo' style={{color: 'var(--color-purple)', marginLeft: '10px'}}>- John Muir</span>
            </h5>
          </div>
          <div className='app__footer-content_bottom-center_logo'>
            <Logo />
          </div>
          <h5 className='p__text'>Made with love for hiking by Alex Raportaru</h5>
        </div>

        <div className='app__footer-content_bottom-right footer3'>
          <h4 className='title'>ABOUT</h4>
          <div className='app__footer-content_bottom-right_links'>
            <a href="/" className='p__text'>About us</a>
            <a href="/" className='p__text'>Shipping</a>
            <a href="/" className='p__text'>Returns</a>
            <a href="/" className='p__text'>Reviews</a>
            <a href="/" className='p__text'>Events</a>
            <a href="/" className='p__text'>My Account</a>
          </div>
          <div className='app__footer-content_bottom-right_icons'>
            <a href='https://www.facebook.com/login/'>
              <BsFacebook size={25}/>
            </a>
            <a href='https://www.instagram.com/'>
              <BsInstagram size={25}/>
            </a>
            <a href='https://twitter.com/'>
              <BsTwitter size={25}/>
            </a>
            <a href='https://www.youtube.com/'>
              <BsYoutube size={25}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
