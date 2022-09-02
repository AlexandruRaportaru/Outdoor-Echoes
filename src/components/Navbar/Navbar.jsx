import React, { useRef } from 'react';
import { FaUserAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';
import { Menu, Logo, Cart} from '../../components';
import { data } from '../../constants';

import './Navbar.css';


const Navbar = () => {
  const placeholderRef = useRef();

  const handleInputChange = (e) => {

    if (e.currentTarget.value === '') {
      placeholderRef.current.style.display = 'inline-flex';
    } else {
      placeholderRef.current.style.display = 'none';
    }
  }

  const handleInputClick = (e) => {
    placeholderRef.current.style.display = 'none';
  }

  return (
    <nav className='app__navbar box1'>
      <Menu />

      <a href='/' aria-label='Go to HomePage' className='app__navbar-logo box2'>
        <Logo/>
      </a>

      <div className='app__navbar-search flex__center box3'>
        <form method='get' action='/search'>
          <input type='search' autoComplete='off' onChange={handleInputChange} onClick={handleInputClick}/>
          <div className='app__navbar-search__placeholder' ref={placeholderRef}>
            <span className='app__navbar-search__placeholder-static' style={{position: 'relative'}}>SEARCH FOR </span>
            <span className='app__navbar-search__placeholder-dots'>...</span>
              <ul className='app__navbar-search__placeholder-dynamic' style={{marginLeft: '6px'}}>
                {data.productsExamples.map(example => (
                  <li key={example}>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
          </div>
          <button type='submit' className='flex__center'>
            <FaSearch style={{color: 'var(--color-purple)'}} fontSize={20} />
          </button>
        </form>
      </div>
        
      <div className='app__navbar-icons box4'>
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

      <Cart className='box5'/>
    </nav>
  )
};

export default Navbar;
