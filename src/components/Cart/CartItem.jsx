import React from 'react'

const CartItem = ({product}) => {

  let cartItemPrice = (product.price * product.qty).toFixed(2);

  return (
    <div className='cart__item'>
        <img src={product.images[0]} alt='product'/>
        <div className='cart__item-description'>
            <h6>{product.name}</h6>
            <div>
                <span>{product.color},</span>
                <span style={{marginLeft: '5px'}}>{product.selectedSize}</span>
            </div>
            <p>x{product.qty}</p>
        </div>
        <span className='cart__item-price'>{cartItemPrice}<p style={{marginTop: '5px'}}>RON</p></span>
    </div>
  )
}

export default CartItem