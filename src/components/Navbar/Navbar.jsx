import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaSearch } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';
import { Menu, Logo, Cart} from '../../components';
import { data } from '../../constants';

import './Navbar.css';


const Navbar = ({disableCart}) => {
  const [inputValue, setInputValue] = useState(''); 
  const placeholderRef = useRef();
  const searchOptionsRef = useRef();

  const handleInputChange = (e) => {
    if (e.currentTarget.value === '' && e.currentTarget !== document.activeElement) {
      searchOptionsRef.current.style.display = 'none';
    } else {
      placeholderRef.current.style.display = 'none';
    }

    if (e.currentTarget !== document.activeElement) {
      placeholderRef.current.style.display = 'inline-flex';
    }

    setInputValue(e.target.value);
  }



  const handleInputClick = (e) => {
    placeholderRef.current.style.display = 'none';
    searchOptionsRef.current.style.display = 'block';
  }



  const handleSearchProduct = (searchTerm) => {
    setInputValue(searchTerm);
  }



  const navigate = useNavigate();
  const handleOpenProduct = (productId) => {
    navigate(`/product/${productId}`)
  }
  

  return (
    <nav className='app__navbar box1'>
      <Menu />

      <a href='/' aria-label='Go to HomePage' className='app__navbar-logo box2'>
        <Logo/>
      </a>

      <div className='app__navbar-search flex__center box3'>
        <form method='get' action='/search'>
          <input type='search' value={inputValue} onChange={handleInputChange} onClick={handleInputClick}/>
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
          <button type='submit' className='flex__center' onClick={() => handleSearchProduct(inputValue)}>
            <FaSearch style={{color: 'var(--color-purple)'}} fontSize={20} />
          </button>
        </form>
        <div className='app__navbar-search_products' ref={searchOptionsRef}>
          <div className='app__navbar-search_products-container'>
            {data.products.filter(product => {
              const searchTerm = inputValue.toLowerCase();
              const fullName = product.name.toLowerCase();

              return searchTerm && fullName.includes(searchTerm);
            })
            .map(product => (
              <div key={product.name} className='app__navbar-search_products-container_card' onClick={() => handleOpenProduct(product.id)}>
                <div className='app__navbar-search_products-container_card-image'>
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div className='app__navbar-search_products-container_card-text'>
                  <h1 className='p__headtext'>{product.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      <Cart className='box5' disableCart={disableCart}/>
    </nav>
  )
};

export default Navbar;
