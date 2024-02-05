import React, {useRef, useState} from 'react';
import { useParams, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper";
import { data, images } from '../../constants';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';

import './Product.css';
import "swiper/css";
import "swiper/css/effect-creative";

const Product = ({addToCart}) => {
    const [counter, setCounter] = useState(1);
    const [currentSize, setCurrentSize] = useState();
    const swiperPrevRef = useRef(null);
    const swiperNextRef = useRef(null);
    const modal = document.querySelector('.app__product-modal');


    const { id } = useParams();
    const product = data.products.find(element => element.id === id);


    const today = new Date().getDate();
    const firstDate = new Date();
    firstDate.setDate(today + 3);
    const secondDate = new Date();
    secondDate.setDate(today + 4);


    function handleCheckedSize(size) {
        const checkboxes = document.querySelectorAll('.app__product-content_characteristics-details_size div input');
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


        if (currentSize === size) {
            setCurrentSize('');
        } else {
            setCurrentSize(size);
        }
    };




    const handleDecrementCount = () => {
        if(counter > 1) {
            setCounter(prevCount => prevCount - 1);
        }  
    }; 

    const handleIncrementCount = () => {    
        if(counter < 100) {
            setCounter(prevCount => prevCount + 1);
        }   
    };  




    const handleAddToCart = () => {
        addToCart(product.id, currentSize, counter);
        modal.style.display = 'block';

        setTimeout(() => {
            modal.style.display = 'none';
        }, 4000);
    };

    const handleCloseModal = () => {
        modal.style.display = 'none';
    };
    

  return (
    <div className='app__product'>
        <div className='app__product-content'>
            <div className='app__product-content_characteristics'>
                <div className="app__product-content_characteristics-swiper">
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-125%", 0, -800],
                            rotate: [0, 0, -90],
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 0, -800],
                            rotate: [0, 0, 90],
                        },
                        }}
                        navigation={{
                            prevEl: swiperPrevRef.current,
                            nextEl: swiperNextRef.current
                        }}
                        modules={[EffectCreative, Navigation]}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = swiperPrevRef.current;
                            swiper.params.navigation.nextEl = swiperNextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {product.images.map(image => (
                            <SwiperSlide key={image}>
                                <img src={image} alt={product.name} />
                            </SwiperSlide>
                        ))}
                        <div className='swiper-left_product' ref={swiperPrevRef}>
                            <BsChevronDoubleLeft />
                        </div>
                        <div className='swiper-right_product' ref={swiperNextRef}>
                            <BsChevronDoubleRight />
                        </div>
                    </Swiper>
                </div>
                <div className='app__product-content_characteristics-details'>
                    <div className='app__product-content_characteristics-details_logo'>
                        <img 
                            src={data.brands[product.brand].logo} 
                            alt={product.name} 
                            style={{width: `${data.brands[product.brand].logoSize}%`}}
                        />
                        {product.sustainable ? <p>Sustainable</p> : ''}
                    </div>
                    <h1 className='p__headtext'>{product.name}</h1>
                    <p className='app__product-content_characteristics-details_price'>{(product.price).toFixed(2)} RON</p>
                    <div className='app__product-content_characteristics-details_size'>
                        {product.size.map(size => (
                            <div key={size}>
                                <input
                                    type='checkbox' 
                                    value={size} 
                                    onChange={() => handleCheckedSize(size)}
                                    name='size'
                                />
                                <label className='p__labeltext' style={{marginLeft: '5px'}}>{size}</label>
                            </div>
                        ))}
                    </div>
                    {!currentSize && (<p className='app__product-content_characteristics-details_attention p__text'>* Please choose a size!</p>)}
                    
                    <div className='app__product-content_characteristics-details_accessibility'>
                        <div className='custom__quantity flex__center'>
                            <button className="flex__center" onClick={handleDecrementCount}>-</button>
                            <div>{counter}</div>
                            <button className="flex__center" onClick={handleIncrementCount}>+</button>
                        </div>
                        <button 
                            type='button' 
                            className={`custom__button ${!currentSize && 'disabled'}`}
                            onClick={handleAddToCart}
                            disabled={!currentSize}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <p className='app__product-content_characteristics-details_info'>
                        Order now and it will be delivered directly to you between <b>{firstDate.toDateString()}</b> and <b>{secondDate.toDateString()}</b>. <span className='tooltip'>i<span className='tooltiptext'>The delivery date gives you an indication of how long it will take to receive the item. It´s based on the preparation time, the delivery service selected on the Shopping Basket page and when we receive cleared payment. </span></span>
                    </p>
                    <div className='app__product-content_characteristics-details_text'>{product.shortDescription}</div>
                </div>
            </div>
            <div className='app__product-content_description'>
                <div className='app__product-content_description-paragraph'>
                    <h1 className='p__headtext title'>Product description</h1>
                    <span className='p__yanone'>{product.description}</span>
                </div>
                <div className='app__product-content_description-details'>
                    <h1 className='p__headtext title'>Product features</h1>
                    <div className='app__product-content_description-details_section'>
                        <div>
                            <span className='p__yanone'>For:</span>
                            <p className='p__text'>{product.gender}</p>
                        </div>
                        <div>
                            <span className='p__yanone'>Color:</span>
                            <p className='p__text'>{product.color}</p>
                        </div>
                        <div>
                            <span className='p__yanone'>Weight:</span>
                            <p className='p__text'>{product.weight}</p>
                        </div>
                        <div>
                            <span className='p__yanone'>Features:</span>
                            <div className='app__product-content_description-details_section-features'>
                            {product.features.map(feature => (
                                    <p key={feature} className='p__text'>{feature}</p>   
                            ))}
                            </div>
                        </div>
                        <div>
                            <span className='p__yanone'>Recommended use:</span>
                            <p className='p__text'>{product.activity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='app__product-modal'>
            <div className='app__product-modal_content'>
                <div className='app__product-modal_close'>
                    <RiCloseCircleLine size={30} className='app__product-modal_close-icon' onClick={handleCloseModal}/>
                </div>
                <div className='flex__center'>
                    <img src={images.checked} alt='Checked'/>
                    <h1 className='title'>The product was successfully added to your shopping cart.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, size, counter) => dispatch(addToCart(id, size, counter)),
    };
};

export default connect(null, mapDispatchToProps)(Product);