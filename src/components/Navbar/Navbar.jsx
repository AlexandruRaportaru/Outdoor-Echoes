import React, { useRef, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FaUserAlt, FaSearch } from 'react-icons/fa';
import { Menu, Cart} from '../../components';
import { data, images } from '../../constants';

import './Navbar.css';


const Navbar = ({disableCart}) => {
  const [inputValue, setInputValue] = useState(''); 
  const searchOptionsRef = useRef();

  const handleInputChange = (e) => {
    if (e.currentTarget.value === '') {
      searchOptionsRef.current.style.display = 'none';
    } else {
      searchOptionsRef.current.style.display = 'block';
    }
    setInputValue(e.target.value);
  }

  const handleInputClick = (e) => {
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
    <nav className='flex items-center w-full bg-dark app__navbar box1'>
      <Menu />

      <Link to={'/'} aria-label='Go to HomePage' className='box2'>
        <img src={images.logo} alt='header-cover' className='h-20 py-3'/>
      </Link>

      <div className='flex items-center justify-center w-full relative py-3.5 px-4 app__navbar-search box3'>
        <form method='get' action='/search' className='flex relative w-full'>
          <input 
            type='search' 
            value={inputValue} 
            onChange={handleInputChange} 
            onClick={handleInputClick} 
            placeholder='Caută produs sau referință' 
            title='Caută produs sau referință' 
            className='relative font-bold uppercase w-full leading-5 text-xl py-1.5 px-2.5 max-h-14 border-r-0 tracking-wider font-menu'
          />

          <button type='submit' className='flex items-center justify-center py-2 px-4 bg-yellow cursor-pointer' onClick={() => handleSearchProduct(inputValue)}>
            <FaSearch className='text-dark' fontSize={20}/>
          </button>
        </form>
        <div className='hidden w-full absolute z-50 overflow-y-scroll bg-white -bottom-72 top-14' ref={searchOptionsRef}>
          <div className='bg-white flex flex-wrap justify-center overflow-hidden gap-y-2.5 gap-x-5 p-5'>
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
        
      <div className='flex self-stretch app__navbar-icons box4'>
        <div className='flex justify-center relative app__navbar-icons__login'>
          <Link to={'/error'}>
            <FaUserAlt className='text-yellow' fontSize={24}/>
            <span className='p__text'>CONTUL MEU</span>
          </Link>
        </div>
      </div>

      <Cart className='box5' disableCart={disableCart}/>
    </nav>
  )
};

export default Navbar;