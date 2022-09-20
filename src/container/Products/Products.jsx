import React, { useState } from 'react';
import Slider from 'rc-slider';
import { data } from '../../constants';
import { Collapsible } from '../../components';

import './Products.css';
import 'rc-slider/assets/index.css';
import { Filler } from 'chart.js';

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filters, setFilters] = useState([]);

  const handleGenderFilter = (filter, val) => {
    let allFilters = filters;
    const newFilter = {
      key: filter,
      value: val,
    };
    
    allFilters.filter(fil => fil.key !== filter && fil.value !== val)
    console.log(allFilters.includes(newFilter));
    allFilters.push(newFilter);
    
    setFilters(allFilters);
  }

  const filteredData = filters ? data.products.filter(currentData => currentData.gender === filters) : data.products;

  return (
    <div className='app__products'>
      <div className='app__products-title'>
        <h1 className='p__logo'>Products</h1>
      </div>
      <div className='app__products-content'>
        <div className='app__products-content_menu'>

          <Collapsible title='GENDER'>
            {data.genderCategory.map(gender => (
              <div key={gender} className='option'>
                <input type='checkbox' className='input__checkbox' onChange={() => handleGenderFilter('gender', gender)}/>
                <span className='p__text'>{gender}</span>
              </div>
            ))}
          </Collapsible>

          <Collapsible title='ACTIVITY'>
            {data.activityCategory.map(activity => (
              <div key={activity} className='option'>
                <input type='checkbox' className='input__checkbox'/>
                <span className='p__text'>{activity}</span>
              </div>
            ))}
          </Collapsible>

          <Collapsible title='TYPE'>
            {data.typeCategory.map(type => (
              <div key={type} className='option'>
                <input type='checkbox' className='input__checkbox'/>
                <span className='p__text'>{type}</span>
              </div>
            ))}
          </Collapsible>

          <Collapsible title='COLOR'>
            {data.colorCategory.map(color => (
              <div key={color} className='option'>
                <input type='checkbox' className='input__checkbox'/>
                <span className='p__text'>{color}</span>
              </div>
            ))}
          </Collapsible>

          <Collapsible title='SIZE'>
            {data.sizeCategory.map(size => (
              <div key={size} className='option'>
                <input type='checkbox' className='input__checkbox'/>
                <span className='p__text'>{size}</span>
              </div>
            ))}
          </Collapsible>
          
          <Collapsible title='FEATURES'>
            {data.featuresCategory.map(feature => (
              <div key={feature} className='option'>
                <input type='checkbox'/>
                <span className='p__text'>{feature}</span>
              </div>
            ))}
          </Collapsible>

          <Collapsible title='RECOMENDED'>
            <div className='option'>
              <input type='checkbox'/>
              <span className='p__text'>Hiking</span>
            </div>
            <div className='option'>
              <input type='checkbox'/>
              <span className='p__text'>Trail running</span>
            </div>
          </Collapsible>

          <Collapsible title='PRICE'>
            <div className='price__slider'>
              <Slider 
                range 
                defaultValue={[0, 100]}
                onChange={(value) => setPriceRange(value)}
                className='price__slider-input'
              />
            </div>
            <div className='price__range'>
              <span className='p__text'>{priceRange[0]} RON</span>
              <span className='p__text'>{priceRange[1]} RON</span>
            </div>
          </Collapsible>

          <Collapsible title='BRANDS'>
            {data.brandsCategory.map(brand => (
              <div key={brand} className='option'>
                <input type='checkbox'/>
                <span className='p__text'>{brand}</span>
              </div>
            ))}
          </Collapsible>
        </div>



        <div className='app__products-content_results'>
          {filteredData.map(product => (
            <div key={product.name} className='app__products-content_results-card'>
              <div className='app__products-content_results-card_sustainable'>
                {product.sustainable ? <p>Sustainable</p> : ''}
              </div>
              <div className='app__products-content_results-card_image'>
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div className='app__products-content_results-card_text'>
                <h1 className='p__headtext'>{product.name}</h1>
                <p>{(product.price).toFixed(2)} RON</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Products;