import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

import { Logo } from '../../components';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <Logo />

      <ul className='app__navbar-links'>
        <li className='p__text'><a href='#men'>Men</a></li>
        <li className='p__text'><a href='#women'>Women</a></li>
        <li className='p__text'><a href='#kids'>Kids</a></li>
        <li className='p__text'><a href='#equipment'>Equipment</a></li>
      </ul>

      <div className='app__navbar-icons'>
        <div className='app__navbar-icons__search flex__center' >
          <input type='search' />
          <div>
            <FaSearch style={{color: 'var(--color-yellow)'}} fontSize={30} />
          </div>
        </div>
        <FaUserAlt style={{color: 'var(--color-yellow)'}} fontSize={30} />
        <MdFavorite style={{color: 'var(--color-yellow)'}} fontSize={30} />
        <FaShoppingCart style={{color: 'var(--color-yellow)'}} fontSize={30} />
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='var(--color-golden)' fontSize={30} cursor='pointer' onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide__bottom'>
            <img src='' alt='machine' className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__text'><a href='#men' onClick={() => setToggleMenu(false)}>Men</a></li>
              <li className='p__text'><a href='#women' onClick={() => setToggleMenu(false)}>Women</a></li>
              <li className='p__text'><a href='#kids' onClick={() => setToggleMenu(false)}>Kids</a></li>
              <li className='p__text'><a href='#equipment' onClick={() => setToggleMenu(false)}>Equipment</a></li>
            </ul>
            <div className='break-line'></div>
            
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
