import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { images } from '../../constants';

import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <div className='app__footer'>
    <div className='flex justify-center items-center bg-yellow p-5 app__footer-top'>
      <img src={images.delivery} alt='delivery' className='w-20 mr-5'/>
      <p className='text-dark p__yanone'>Livrare gratuită pentru comenzile mai mari de 200 de LEI.</p>
    </div>

    <div className='flex justify-between py-12 px-6 app__footer-center'>
        <div>
          <h4 className='mb-2 title'>Despre</h4>
          <div className='flex flex-col gap-y-3'>
            <Link className='text-dark hover:underline p__text'>Despre</Link>
            <Link className='text-dark hover:underline p__text'>Termeni și condiții</Link>
            <Link className='text-dark hover:underline p__text'>Politica de confidențialitate</Link>
            <Link className='text-dark hover:underline p__text'>Formular retur</Link>
          </div>
        </div>

        <div>
          <h4 className='mb-2 title'>Plata și livrare</h4>
          <div className='flex flex-col gap-y-3'>
            <Link className='text-dark hover:underline p__text'>Cum cumpăr?</Link>
            <Link className='text-dark hover:underline p__text'>Metode de plată</Link>
            <Link className='text-dark hover:underline p__text'>Livrare și retur</Link>
          </div>
        </div>

        <div>
          <h4 className='mb-2 title'>Asistență</h4>
          <div className='flex flex-col gap-y-3'>
            <Link className='text-dark hover:underline p__text'>Contact</Link>
            <Link className='text-dark hover:underline p__text'>Întrebări frecvente</Link>
            <Link className='text-dark hover:underline p__text'>ANPC</Link>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-y-8 text-center w-1/4 app__footer-center_logo'>
          <h5 className='p__text'>"The mountains are calling and<br/> I must go." - John Muir</h5>
          <img src={images.logo} alt='header-cover' className='w-2/3'/>
        </div>
    </div>

    <div className='flex justify-between items-center bg-yellow p-5 app__footer-end'>
      <p>&copy; {currentYear} Mountain Echoes</p>

      <div className='flex justify-between items-center w-16 app__footer-content_end'>
        <a href='https://www.facebook.com/login/'>
          <BsFacebook size={25}/>
        </a>
        <a href='https://www.instagram.com/'>
          <BsInstagram size={25}/>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
