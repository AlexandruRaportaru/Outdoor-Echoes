import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaUserAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdFavorite, MdOutlineContactSupport } from 'react-icons/md';
import { Logo } from '../../components';

import './Navbar.css';



const Navbar = () => {
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-menu'>
        <div>
          <FiMenu color='var(--color-yellow)' fontSize={30}/>
          <p className='p__text'>MENU</p>
        </div>
      </div>

      <a href='/' aria-label='Go to HomePage' className='app__navbar-logo'>
        <Logo/>
      </a>

      <div className='app__navbar-search flex__center'>
        <form method='get' action='/search'>
          <input type='search' autoComplete='off'/>
          <div className='app__navbar-search__placeholder'>
            <span className='app__navbar-search__placeholder-text'>DO YOU NEED A </span>
          </div>
          <button type='submit' className='flex__center'>
            <FaSearch style={{color: 'var(--color-purple)'}} fontSize={20} />
          </button>

        </form>
      </div>
        
      <div className='app__navbar-icons'>
        <div className='app__navbar-icons__contact'>
          <a>
            <MdOutlineContactSupport style={{color: 'var(--color-yellow)'}} fontSize={24}/>
            <span className='p__text'>CONTACT US</span>
          </a>
        </div>
        <div className='app__navbar-icons__login'>
          <a>
            <FaUserAlt style={{color: 'var(--color-yellow)'}} fontSize={24}/>
            <span className='p__text'>LOGIN</span>
          </a>
        </div>
        <div className='app__navbar-icons__favourites'>
          <a>
            <div className='app__navbar-icons__favourites-count p__text'>0</div>
            <MdFavorite style={{color: 'var(--color-yellow)'}} fontSize={24}/>
            <span className='p__text'>MY FAVORITES</span>
          </a>
        </div>
      </div>

      <div className='app__navbar-cart' style={{background: 'var(--color-yellow)'}}>
        <a>
          <div className='app__navbar-cart__count p__text'>0</div>
          <FaShoppingCart style={{color: 'var(--color-purple)'}} fontSize={24}/>
          <span className='p__text'>MY BASKET</span>
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
