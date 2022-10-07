import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../../redux/Shopping/shopping-actions';
import { MdDeleteForever } from 'react-icons/md';

const CheckoutItem = ({product, removeFromCart, adjustQty}) => {
    const [quantity, setQuantity] = useState(product.qty);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
        adjustQty(product.id, e.target.value, product.selectedSize);
    };

    const handleDecrementCount = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
            adjustQty(product.id, quantity - 1, product.selectedSize);
        }  
    }; 

    const handleIncrementCount = () => {    
        if(quantity < 100) {
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
        <div className='custom__quantity flex__center'>
            <button className="flex__center" onClick={handleDecrementCount}>-</button>
            <div onChange={handleQuantityChange}>{quantity}</div>
            <button className="flex__center" onClick={handleIncrementCount}>+</button>
        </div>
        <span className='app__checkout-content_products-section_item-price'>
            {(product.price * product.qty).toFixed(2)}
            <p style={{marginTop: '5px'}}> RON</p>
        </span>
        <button onClick={() => removeFromCart(product.id, product.selectedSize)} className='app__checkout-content_products-section_item-delete'>
            <MdDeleteForever className='flex__center'/>
        </button>
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