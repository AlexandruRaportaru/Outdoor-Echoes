import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import { images } from '../../constants';

import './Checkout.css';

const Checkout = ({cartProducts}) => {
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(subTotalPrice);
    const [currentShipping, setCurrentShipping] = useState(0);
    const modal = document.querySelector('.app__checkout-modal');


    function addInputValue(e) {
        const checkboxes = document.querySelectorAll('.app__checkout-content_products-shipping-section_options input');
        let limit = 0;
  
        checkboxes.forEach(checkbox => {
          if(checkbox.checked === true) {
            limit = limit + 1;
          }
        })
  
        if (limit > 0) {
          checkboxes.forEach(checkbox => {
            if(checkbox.checked === false) {
              checkbox.setAttribute('disabled', '');
            }
          })
        } else {
          checkboxes.forEach(checkbox => {
              checkbox.removeAttribute('disabled');
          })
        }


        const shippingPrice = +e.target.value;

        if (currentShipping === shippingPrice) {
            setCurrentShipping(0);
        } else {
            setCurrentShipping(shippingPrice);
        }
    }


    useEffect(() => {
        let subTotal = 0;

        cartProducts.forEach(item => {
            subTotal += item.qty * item.price;
        });

        setSubTotalPrice(subTotal);
    }, [cartProducts, subTotalPrice])


    useEffect(() => {
        setTotalPrice(subTotalPrice + currentShipping);
    }, [subTotalPrice, currentShipping])


    
    const navigate = useNavigate();
    const handlePlaceOrder = () => {
        modal.style.display = 'block';

        setTimeout(() => {
            modal.style.display = 'none';

            navigate('/');
        }, 6000);
    }

    

  return (
    <div className='app__checkout'>
        <h1 className='app__checkout-title title'>Checkout</h1>
        <form 
            className='app__checkout-content' 
        >
            <div className='app__checkout-content_section'>
                <div className='app__checkout-content_section-contact'>
                    <h1 className='app__checkout-content_section-contact_title p__headtext'>Contact and Billing</h1>
                    <div className='app__checkout-content_section-contact_details'>
                        <input type='text' placeholder='First Name: *' />
                        <input type='text' placeholder='Last Name: *' />
                        <input type='text' placeholder='E-Mail: *' />
                        <input type='number' placeholder='Phone Number: *' />
                        <input type='text' placeholder='Address: *' />
                        <input type='text' placeholder='Post Code: *' />
                        <input type='text' placeholder='City: *' />
                        <input type='text' placeholder='Country: *' />
                    </div>
                </div>
                <div className='app__checkout-content_section-payment'>
                    <h1 className='app__checkout-content_section-payment_title p__headtext'>Payment method</h1>
                    <div className='app__checkout-content_section-payment_details'>
                        <div className='app__checkout-content_section-payment_details-paypal'>
                            <div className='flex__center'>
                                <input type='radio'/>
                                <p className='p__yanone'>Paypal</p>
                            </div>
                            <img src={images.paypal} alt='Paypal Logo'/>
                        </div>
                        <div className='app__checkout-content_section-payment_details-card'>
                            <div className='app__checkout-content_section-payment_details-card_option'>
                                <div className='flex__center'>
                                    <input type='radio'/>
                                    <p className='p__yanone'>Credit / Debit card</p>
                                </div>
                                <div className='flex__center'>
                                    <img src={images.visa} alt='Visa Logo'/>
                                    <img src={images.maestro} alt='Maestro Logo'/>
                                    <img src={images.mastercard} alt='MasterCard Logo'/>
                                    <img src={images.americanexpress} alt='AmericanExpress Logo'/>
                                </div>
                            </div>
                            <div className='app__checkout-content_section-payment_details-card_details'>
                                <div>
                                    <label className='p__yanone'>Card number</label>
                                    <input type='number' placeholder='1234 5678 9012 3456' />
                                </div>
                                <div>
                                    <label className='p__yanone'>Card holder name</label>
                                    <input type='text' placeholder='Mr. Alexandru C. Raportaru' />
                                </div>
                                <div>
                                    <label className='p__yanone'>Expiration date</label>
                                    <input type='number' placeholder='MM/YYYY' />
                                </div>
                                <div>
                                    <label className='p__yanone'>CVC/CVV/CID</label>
                                    <input type='number' placeholder='3 digits' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='app__checkout-content_section-consent flex__center'>
                    <input type='checkbox' style={{height: '20px'}} />
                    <label className='p__yanone'>I accept your <span>Terms and Conditions</span> and your <span>Privacy Policy</span>.</label>
                </div>
                <div className='app__checkout-content_section-button'>
                    <button 
                        className='custom__button' 
                        type='submit' 
                        value='submit'
                        onClick={handlePlaceOrder}
                    >PLACE ORDER</button>
                </div>
            </div>
            <div className='app__checkout-content_products'>
                <div className='app__checkout-content_products-section'>
                    <h1 className='app__checkout-content_products-section_title p__headtext'>Shopping Basket</h1>
                    <div style={{marginTop: '20px'}}>
                        {cartProducts.map(product => (
                            <CheckoutItem key={`${product.id}_${product.selectedSize}`} product={product}/>
                        ))}
                    </div>
                    <div className='app__checkout-content_products-section_subtotal'>
                        <p className='p__yanone'>Subtotal:</p>
                        <p className='p__yanone'>{subTotalPrice.toFixed(2)} RON</p>
                    </div>
                </div>
                <div className='app__checkout-content_products-shipping'>
                    <h1 className='app__checkout-content_products-shipping_title p__headtext'>Order Summery</h1>
                    <div className='app__checkout-content_products-shipping-section'>
                        <p className='p__yanone'>Shipping and Handling:</p>
                        <div className='app__checkout-content_products-shipping-section_options'>
                            <div>
                                <input type='checkbox' value='200' onClick={addInputValue}/>
                                <label className='p__yanone'>International Delivery: <span>200.00 RON</span></label>
                            </div>
                            <div>
                                <input type='checkbox' value='50' onClick={addInputValue}/>
                                <label className='p__yanone'>Express Delivery: <span>50.00 RON</span></label>
                            </div>
                            <div>
                                <input type='checkbox' value='25' onClick={addInputValue}/>
                                <label className='p__yanone'>Local Delivery: <span>25.00 RON</span></label>
                            </div>
                            <div>
                                <input type='checkbox' value='0' onClick={addInputValue}/>
                                <label className='p__yanone'>Free Shipping: <span>0.00 RON</span></label>
                            </div>
                            <div>
                                <input type='checkbox' value='0' onClick={addInputValue}/>
                                <label className='p__yanone'>Local Pickup: <span>(Free)</span></label>
                            </div>
                        </div>
                    </div>
                    <div className='app__checkout-content_products-shipping_total'>
                        <p className='p__yanone'>Total Order:</p>
                        <p className='p__yanone'>{totalPrice.toFixed(2)} RON</p>
                    </div>
                </div>
            </div>
        </form>
        <div className='app__checkout-modal'>
            <div className='app__checkout-modal_content'>
                <div className='flex__center'>
                    <img src={images.checked} alt='Checked'/>
                    <h1 className='title'>Your order have been placed.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}


const mapStateToProps = state => {
    return {
        cartProducts: state.shop.cart
    }
}

export default connect(mapStateToProps)(Checkout)