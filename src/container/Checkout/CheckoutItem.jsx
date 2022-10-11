import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../../redux/Shopping/shopping-actions';
import { MdDeleteForever } from 'react-icons/md';

const CheckoutItem = ({product, removeFromCart, adjustQty}) => {
    const [quantity, setQuantity] = useState(product.qty);

    const handleQuantityChange = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
        adjustQty(product.id, e.target.value, product.selectedSize);
    };

    const handleDecrementCount = (e) => {
        if(quantity > 1) {
            e.preventDefault();
            setQuantity(quantity - 1);
            adjustQty(product.id, quantity - 1, product.selectedSize);
        }  
    }; 

    const handleIncrementCount = (e) => {    
        if(quantity < 100) {
            e.preventDefault();
            setQuantity(quantity + 1);
            adjustQty(product.id, quantity + 1, product.selectedSize);
        }   
    }; 

  return (
    <div className='app__checkout-content_products-section_item'>
        <img src={product.images[0]} alt='product'/>
        <div className='app__checkout-content_products-section_item-description'>
            <h6>{product.name}</h6>
            <div>
                <span>{product.color},</span>
                <span style={{marginLeft: '5px'}}>{product.selectedSize}</span>
            </div>
            <p>{product.price.toFixed(2)} RON</p>
        </div>
        <div className='flex__center'>
            <div className='custom__quantity'>
                <button className="flex__center" onClick={handleDecrementCount}>-</button>
                <div onChange={handleQuantityChange}>{quantity}</div>
                <button className="flex__center" onClick={handleIncrementCount}>+</button>
            </div>
        </div>
        <span className='app__checkout-content_products-section_item-price'>
            {(product.price * product.qty).toFixed(2)}
            <span style={{marginTop: '5px'}}> RON</span>
        </span>
        <div className='flex__center'>
            <MdDeleteForever 
                onClick={() => removeFromCart(product.id, product.selectedSize)} 
                className='app__checkout-content_products-section_item-delete flex__center'
            />
        </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id, size) => dispatch(removeFromCart(id, size)),
        adjustQty: (id, value, size) => dispatch(adjustQty(id, value, size))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)