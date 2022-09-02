import React, { useState, useRef } from 'react';
import { data } from '../../constants';
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
    document.getElementsByTagName("html")[0].style.overflow = "hidden";

    setTimeout(() => {
      backgroundRef.current.style.display = 'block';
    }, 310)
  }
  
  const handleMenuHidden = () => {
    setToggleMenu(false);
    document.getElementsByTagName("html")[0].style.overflow = "visible";
    backgroundRef.current.style.display = 'none';
  }

  return (
    <>
      <Link to='#' className='app__navbar-menu' onClick={handleMenuVisible}>
        <div>
          <FiMenu color='var(--color-yellow)' fontSize={30}/>
          <p className='p__text'>MENU</p>
        </div>
      </Link>

      <div className={toggleMenu ? 'app__navbar-smallMenu active' : 'app__navbar-smallMenu'}>
        <ul className='app__navbar-smallMenu_items'>
          <li className='app__navbar-toggle'>
            <Link to='#' className='app__navbar-menu__close' onClick={handleMenuHidden}>
              <AiOutlineClose color='var(--color-yellow)' fontSize={30}/>
              <p className='p__text'>CLOSE</p>
            </Link>

            <div className='app__navbar-icons icons-smallMenu'>
              <div className='app__navbar-icons__contact'>
                <a href='true'>
                  <MdOutlineContactSupport style={{color: 'var(--color-yellow)'}} fontSize={24}/>
                  <span className='p__text'>CONTACT US</span>
                </a>
              </div>
              <div className='app__navbar-icons__login'>
                <a href='true'>
                  <FaUserAlt style={{color: 'var(--color-yellow)'}} fontSize={24}/>
                  <span className='p__text'>SIGN IN</span>
                </a>
              </div>
            </div>
          </li>
          {data.menus.map((menu, index) => (
            <Link to={menu.path}>
              <li key={index} className={menu.className}>
                {menu.icon}{menu.title}
              </li>
            </Link>
          ))}
          <li className='app__navbar-smallMenu_items-social'>
            <a href='https://www.facebook.com/login/'>
              <BsFacebook />
            </a>
            <a href='https://www.instagram.com/'>
              <BsInstagram />
            </a>
            <a href='https://twitter.com/'>
              <BsTwitter />
            </a>
            <a href='https://www.youtube.com/'>
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className='app__navbar-menu__background' onClick={handleMenuHidden} ref={backgroundRef}></div>
    </> 
  )
}

export default Menu