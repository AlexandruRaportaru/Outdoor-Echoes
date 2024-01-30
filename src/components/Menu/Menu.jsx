import React, { useState, useRef } from 'react';
import { data } from '../../constants';
import { onDisableScroll, onEnableScroll } from '../../utils';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

import './Menu.css';

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const backgroundRef = useRef();

  const handleMenuVisible = () => {
    setToggleMenu(true);
    onDisableScroll();

    setTimeout(() => {
      backgroundRef.current.classList.add('block');
      backgroundRef.current.classList.remove('hidden');
    }, 310)
  }

  const handleMenuHidden = () => {
    setToggleMenu(false);
    onEnableScroll();
    backgroundRef.current.classList.add('hidden');
    backgroundRef.current.classList.remove('block');
  }
  
  return (
    <>
      <Link to='#' className='flex justify-center items-center cursor-pointer self-stretch text-center mr-5 text-base shadow-xl bg-yellow app__navbar-menu' onClick={handleMenuVisible}>
        <div className='flex flex-col items-center'>
          <FiMenu color='var(--color-purple)' fontSize={30}/>
          <p className='p__text text-dark font-bold'>MENIU</p>
        </div>
      </Link>

      <div className={toggleMenu ? 'fixed w-72 flex justify-center bg-dark h-screen top-0 left-0 z-50 app__navbar-smallMenu active' : 'fixed w-72 flex justify-center bg-dark h-screen top-0 -left-full z-40 app__navbar-smallMenu'}>
        <ul className='w-full'>
          <li className='flex justify-between items-center h-16 mb-2.5 shadow-xl'>
            <Link to='#' className='flex flex-col items-center self-stretch text-base cursor-pointer py-2.5 px-5' onClick={handleMenuHidden}>
              <AiOutlineClose color='var(--color-yellow)' fontSize={30}/>
              <p className='p__text'>ÎNCHIDE</p>
            </Link>

            <div className='app__navbar-icons icons-smallMenu'>
              <div className='app__navbar-icons__contact'>
                <a href='true'>
                  <MdOutlineContactSupport style={{color: 'var(--color-yellow)'}} fontSize={24}/>
                  <span className='p__text'>CONTACT</span>
                </a>
              </div>
              <div className='app__navbar-icons__login'>
                <a href='true'>
                  <FaUserAlt style={{color: 'var(--color-yellow)'}} fontSize={24}/>
                  <span className='p__text'>CONTUL MEU</span>
                </a>
              </div>
            </div>
          </li>
          {data.menus.map((menu, index) => (
            <Link key={index} to={menu.path} onClick={handleMenuHidden}>
              <li className={menu.className}>
                {menu.icon}{menu.title}
              </li>
            </Link>
          ))}
          <div className='absolute w-full bg-yellow text-dark bottom-0'>
            <h1 className='font-anton text-center text-dark p-4 border-b-2 border-black'>Urmărește-ne pe rețelele sociale pentru mai multe noutăți</h1>
            <li className='flex justify-around items-center w-full p-4 app__navbar-smallMenu_items-social'>
              <a href='https://www.facebook.com/login/' className='text-3xl'>
                <BsFacebook />
              </a>
              <a href='https://www.instagram.com/' className='text-3xl'>
                <BsInstagram />
              </a>
              <a href='https://twitter.com/' className='text-3xl'>
                <BsTwitter />
              </a>
              <a href='https://www.youtube.com/' className='text-3xl'>
                <BsYoutube />
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className='absolute bg-dark hidden z-40 overflow-hidden h-screen w-full top-0 opacity-50' onClick={handleMenuHidden} ref={backgroundRef}></div>
    </> 
  )
}

export default Menu