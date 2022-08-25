import React, { useRef } from 'react';
import { FaUserAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdFavorite, MdOutlineContactSupport } from 'react-icons/md';
import { Menu, Logo } from '../../components';
import { data } from '../../constants';

import './Navbar.css';


const Navbar = () => {
  const placeholderRef = useRef();

  const handleInputChange = (e) => {
    placeholderRef.current.style.display = 'none';
  }

  return (
    <nav className='app__navbar'>
      <Menu />

      <a href='/' aria-label='Go to HomePage' className='app__navbar-logo'>
        <Logo/>
      </a>

      <div className='app__navbar-search flex__center'>
        <form method='get' action='/search'>
          <input type='search' autoComplete='off' onClick={handleInputChange}/>
          <div className='app__navbar-search__placeholder' ref={placeholderRef}>
            <span className='app__navbar-search__placeholder-static' style={{position: 'relative'}}>SEARCH FOR </span>
              <ul className='app__navbar-search__placeholder-dynamic' style={{marginLeft: '6px'}}>
                {data.products.map(product => (
                  <li key={product}>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
          </div>
          <button type='submit' className='flex__center'>
            <FaSearch style={{color: 'var(--color-purple)'}} fontSize={20} />
          </button>
        </form>
      </div>
        
      <div className='app__navbar-icons'>
        <div className='app__navbar-icons__contact'>
          <a href='true'>
            <MdOutlineContactSupport style={{color: 'var(--color-yellow)'}} fontSize={24}/>
            <span className='p__text'>CONTACT US</span>
          </a>
        </div>
        <div className='app__navbar-icons__login'>
          <a href='true'>
            <FaUserAlt style={{color: 'var(--color-yellow)'}} fontSize={24}/>
            <span className='p__text'>LOGIN</span>
          </a>
        </div>
        <div className='app__navbar-icons__favourites' style={{position: 'relative'}}>
          <a href='true'>
            <div className='app__navbar-icons__favourites-count p__text'>0</div>
            <MdFavorite style={{color: 'var(--color-yellow)'}} fontSize={24}/>
            <span className='p__text'>MY FAVORITES</span>
          </a>
        </div>
      </div>

      <div className='app__navbar-cart'>
        <a href='true'>
          <div className='app__navbar-cart__count p__text'>0</div>
          <FaShoppingCart style={{color: 'var(--color-purple)'}} fontSize={24}/>
          <span className='p__text'>MY BASKET</span>
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
