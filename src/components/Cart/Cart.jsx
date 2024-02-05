import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCartX } from 'react-icons/bs';

import './Cart.css';

const Cart = ({cartProducts, disableCart}) => {
    const [toggleCart, setToggleCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const backgroundRef = useRef();
  
    const handleCartVisible = () => {
        const root = document.querySelector('#root');

        if(!disableCart){
            setToggleCart(true);

            setTimeout(() => {
                root.classList.add('fixed-root');
            }, 200)
  
            setTimeout(() => {
                backgroundRef.current.style.display = 'block';
            }, 400);
        } 
    }
    
    const handleCartHidden = () => {
        const root = document.querySelector('#root');

        setToggleCart(false);
        root.classList.remove('fixed-root');
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
        <Link to='#' className='relative flex flex-col justify-center items-center self-stretch bg-yellow min-w-max px-2.5 app__navbar-cart' onClick={handleCartVisible}>
            <div className='flex flex-col justify-center items-center app__navbar-cart__icon'>
                <div className='app__navbar-cart__count p__text'>{cartCount}</div>
                <FaShoppingCart style={{color: 'var(--color-purple)'}} fontSize={24}/>
            </div>
            <span className='p__text'>COȘUL MEU</span>
        </Link>
  
        <div className={toggleCart ? 'app__navbar-smallCart active' : 'app__navbar-smallCart'}>
            <ul className='app__navbar-smallCart_items'>
                <li className='app__navbar-smallCart_items-visible'>
                    <h1>COȘUL MEU</h1>
                    <Link to='#' className='app__navbar-cart__close' onClick={handleCartHidden}>
                        <AiOutlineClose color='var(--color-yellow)' fontSize={30}/>
                        <p className='p__text'>ÎNCHIDE</p>
                    </Link>
                </li>
                
                <li className='app__navbar-smallCart_items-content'>
                    {cartProducts.length === 0 
                        ? (<div className='app__navbar-smallCart_items-content_empty flex__center'>
                            <BsCartX className='app__navbar-smallCart_items-content_empty-icon'/>
                            <h1 className='title'>COȘUL TĂU DE CUMPĂRĂTURI ESTE GOL</h1>
                            <p className='p__yanone'>Înainte de a continua, trebuie să adaugi produse în coș.
                                <br/>Poți găsi mai multe produse interesante în pagina "Produse".</p>
                        </div>) 
                        : cartProducts.map(prod => (
                                <CartItem key={`${prod.id}_${prod.selectedSize}`} product={prod}/>
                        ))
                    }
                </li>
                

                {cartProducts.length !== 0 
                && <li className='app__navbar-smallCart_items-checkout'>
                    <div className='app__navbar-smallCart_items-checkout_total'>
                        <p className='p__yanone'>Subtotal:</p>
                        <p className='p__yanone'>{cartTotalPrice.toFixed(2)} RON</p>
                    </div>
                    <Link to='/checkout' className='custom__button' onClick={handleCartHidden}>PROCEED TO CHECKOUT</Link>
                </li>
                }

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