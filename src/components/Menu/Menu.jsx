import React, { useState, useRef } from 'react';
import { data } from '../../constants';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';

import './Menu.css';

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const backgroundRef = useRef();

  const handleMenuToggle = () => {
    setToggleMenu(true);
    setTimeout(() => {
      backgroundRef.current.style.display = 'block';
    }, 310)
    
  }
  
  const handleModalClose = () => {
    setToggleMenu(false);
    backgroundRef.current.style.display = 'none';
  }

  return (
    <>
      <Link to='#' className='app__navbar-menu' onClick={handleMenuToggle}>
        <div>
          <FiMenu color='var(--color-yellow)' fontSize={30}/>
          <p className='p__text'>MENU</p>
        </div>
      </Link>

      <div className={toggleMenu ? 'app__navbar-smallMenu active' : 'app__navbar-smallMenu'}>
        <ul className='app__navbar-smallMenu_items'>
          <li className='app__navbar-toggle'>
            <Link to='#' className='app__navbar-menu__close' onClick={handleModalClose}>
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
            <li key={index} className={menu.className}>
              <Link to={menu.path}>
                {menu.icon}
                <span className='p__text'>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='app__navbar-menu__background' onClick={handleModalClose} ref={backgroundRef}></div>
    </> 
  )
}

export default Menu