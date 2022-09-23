import React, { useState, useRef } from 'react';
import { data } from '../../constants';
import { onDisableScroll, onEnableScroll } from '../../utils';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import './Cart.css';

const Cart = () => {
    const [toggleCart, setToggleCart] = useState(false);
    const backgroundRef = useRef();
  
    const handleCartVisible = () => {
        setToggleCart(true);
        onDisableScroll();
  
        setTimeout(() => {
            backgroundRef.current.style.display = 'block';
        }, 310)
    }
    
    const handleCartHidden = () => {
        setToggleCart(false);
        onEnableScroll();
        backgroundRef.current.style.display = 'none';
    }
  
    return (
      <>
        <Link to='#' className='app__navbar-cart' onClick={handleCartVisible}>
            <div className='app__navbar-cart__icon'>
                <div className='app__navbar-cart__count p__text'>0</div>
                <FaShoppingCart style={{color: 'var(--color-purple)'}} fontSize={24}/>
            </div>
            <span className='p__text'>MY BASKET</span>
        </Link>
  
        <div className={toggleCart ? 'app__navbar-smallCart active' : 'app__navbar-smallCart'}>
            <ul className='app__navbar-smallCart_items'>
                <li className='app__navbar-smallCart_items-visible'>
                    <h1>SHOPPING CART</h1>
                    <Link to='#' className='app__navbar-cart__close' onClick={handleCartHidden}>
                        <AiOutlineClose color='var(--color-yellow)' fontSize={30}/>
                        <p className='p__text'>CLOSE</p>
                    </Link>
                </li>

                <li className='app__navbar-smallCart_items-content'></li>
            
                <li className='app__navbar-smallCart_items-checkout'>
                    <Link to='#' className='custom__button'>PROCEED TO CHECKOUT</Link>
                </li>
            </ul>
        </div>
        <div className='app__navbar-cart__background' onClick={handleCartHidden} ref={backgroundRef}></div>
      </> 
    )
  }

export default Cart