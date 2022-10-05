import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { data } from '../../constants';
import { onDisableScroll, onEnableScroll } from '../../utils';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import './Cart.css';

const Cart = ({cartProducts}) => {
    const [toggleCart, setToggleCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
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


    useEffect(() => {
        let count = 0;
        let totalPrice = 0;

        cartProducts.forEach(item => {
            count += item.qty;
            totalPrice += item.qty * item.price;
        });

        setCartTotalPrice(totalPrice);
        setCartCount(count);
    }, [cartProducts, cartCount, cartTotalPrice])





    return (
      <>
        <Link to='#' className='app__navbar-cart' onClick={handleCartVisible}>
            <div className='app__navbar-cart__icon'>
                <div className='app__navbar-cart__count p__text'>{cartCount}</div>
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
                
                <li className='app__navbar-smallCart_items-content'>
                    {cartProducts.map(prod => (
                        <CartItem key={prod.id} product={prod}/>
                    ))}
                </li>

                <li className='app__navbar-smallCart_items-total'>
                    <p className='p__yanone'>Total:</p>
                    <p className='p__yanone'>{cartTotalPrice.toFixed(2)} RON</p>
                </li>
            
                <li className='app__navbar-smallCart_items-checkout'>
                    <Link to='#' className='custom__button'>PROCEED TO CHECKOUT</Link>
                </li>
            </ul>
        </div>
        <div className='app__navbar-cart__background' onClick={handleCartHidden} ref={backgroundRef}></div>
      </> 
    )
  }


const mapStateToProps = state => {
    return {
        cartProducts: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)