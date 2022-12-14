import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Slider from 'rc-slider';
import { data } from '../../constants';
import { Collapsible } from '../../components';

import './Products.css';
import 'rc-slider/assets/index.css';

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 3600]);
  const [filters, setFilters] = useState(defaultFilters);
  const [products, setProducts] = useState(data.products);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleText, setToggleText] = useState('OPEN');
  const sliderBackgroundRef = useRef();
  const { id } = useParams();


  const navigate = useNavigate();
  const handleOpenProduct = (productId) => {
    navigate(`/product/${productId}`)
  }


  useEffect(() => {
    const heightWindow = document.querySelector('html').getClientRects();
    sliderBackgroundRef.current.style.height = `${heightWindow[0].height}px`;
  }, [toggleMenu, filters])
  


  const handleFiltersVisible = () => {
    if(toggleMenu) {
      setToggleMenu(false);
      setToggleText('OPEN');
      
      sliderBackgroundRef.current.style.display = 'none';
    } else {
      setToggleMenu(true);
      setToggleText('CLOSE');

      setTimeout(() => {
        sliderBackgroundRef.current.style.display = 'block';
      }, 310)
    }
  }

  const handleFiltersHidden = () => {
    setToggleMenu(false);
    sliderBackgroundRef.current.style.display = 'none';
  }


  // TO DO: getFilteredData from here should be removed!!!!!!
  
  useEffect(() => {
    const getFilteredData = () => {
      const selectedGenders = Object.keys(filters.gender).filter(data => filters.gender[data] === true);
      const selectedActivity = Object.keys(filters.activity).filter(data => filters.activity[data] === true);
      const selectedType = Object.keys(filters.type).filter(data => filters.type[data] === true);
      const selectedColor = Object.keys(filters.color).filter(data => filters.color[data] === true);
      const selectedFeatures = Object.keys(filters.features).filter(data => filters.features[data] === true);
      const selectedBrand = Object.keys(filters.brand).filter(data => filters.brand[data] === true);
  
      const allProducts = data.products.filter(product => 
        (selectedGenders.includes(product.gender) || selectedGenders.length === 0)
        && 
        (selectedActivity.includes(product.activity) || selectedActivity.length === 0)
        && 
        (selectedType.includes(product.type) || selectedType.length === 0)
        && 
        (selectedColor.includes(product.color) || selectedColor.length === 0)
        && 
        (selectedFeatures.filter(x => product.features.includes(x)).length === selectedFeatures.length || selectedFeatures.length === 0)
        &&
        (product.price >= priceRange[0] && product.price <= priceRange[1])
        &&
        (selectedBrand.includes(product.brand) || selectedBrand.length === 0)
      );
      setProducts(allProducts);
    }

    if(id) {
      const category = id.split('_')[0];
      const value = id.split('_')[1];
      let newDefaltFilters = defaultFilters;
      newDefaltFilters[category][value] = true;
      setFilters(newDefaltFilters);
      getFilteredData();
    }
  }, [id, filters, priceRange])
  


  const handlePriceRange = (value) => {
    setPriceRange(value);
    getFilteredData();
  }



  const counted = (category, value) => {
    if(category === 'features') {
      return products.filter(data => data[category].includes(value)).length;
    }
    return products.filter(data => data[category] === value).length 
  }



  const handleFilter = (filter, value) => {
    const newFilters = filters;
    newFilters[filter][value] = !filters[filter][value];
     
    setFilters(newFilters);
    getFilteredData();
  }



  const getFilteredData = () => {
    const selectedGenders = Object.keys(filters.gender).filter(data => filters.gender[data] === true);
    const selectedActivity = Object.keys(filters.activity).filter(data => filters.activity[data] === true);
    const selectedType = Object.keys(filters.type).filter(data => filters.type[data] === true);
    const selectedColor = Object.keys(filters.color).filter(data => filters.color[data] === true);
    const selectedFeatures = Object.keys(filters.features).filter(data => filters.features[data] === true);
    const selectedBrand = Object.keys(filters.brand).filter(data => filters.brand[data] === true);

    const allProducts = data.products.filter(product => 
      (selectedGenders.includes(product.gender) || selectedGenders.length === 0)
      && 
      (selectedActivity.includes(product.activity) || selectedActivity.length === 0)
      && 
      (selectedType.includes(product.type) || selectedType.length === 0)
      && 
      (selectedColor.includes(product.color) || selectedColor.length === 0)
      && 
      (selectedFeatures.filter(x => product.features.includes(x)).length === selectedFeatures.length || selectedFeatures.length === 0)
      &&
      (product.price >= priceRange[0] && product.price <= priceRange[1])
      &&
      (selectedBrand.includes(product.brand) || selectedBrand.length === 0)
    );
    setProducts(allProducts);
  }



  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 32;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  

  return (
    <div className='app__products'>
      <div className='app__products-title'>
        <h1 className='p__logo'>
          <Link className='link' to='/' >
            Home
          </Link>
          /
          <Link className='link' to='/products' >
            Products
          </Link>
        </h1>
      </div>
      <div className='app__products-content_filters-background' onClick={handleFiltersHidden} ref={sliderBackgroundRef}></div>
      <div className='app__products-content'>
        <div className={toggleMenu ? 'app__products-content_filters active' : 'app__products-content_filters'}>
          <Link to='#' className={toggleMenu ? 'app__products-content_filters-toggle active' : 'app__products-content_filters-toggle'} onClick={handleFiltersVisible}>
            <p toggletext={toggleText} >{toggleText}</p>
            <p style={{marginBottom: '5px'}}>FILTERS</p>
          </Link>
          <div className={toggleMenu ? 'app__products-content_filters-slider active' : 'app__products-content_filters-slider'}>
            <Collapsible title='GENDER'>
              {data.genderCategory.map(gender => {
                return (
                <div key={gender} className='option'>
                  <input 
                    checked={filters.gender[gender]} 
                    type='checkbox' 
                    className='input__checkbox' 
                    onChange={() => handleFilter('gender', gender)}
                  />
                  <span className='p__text'>{gender} ({counted('gender', gender)})</span>
                </div>
                )})}
            </Collapsible>

            <Collapsible title='ACTIVITY'>
              {data.activityCategory.map(activity => (
                <div key={activity} className='option'>
                  <input 
                    checked={filters.activity[activity]} 
                    type='checkbox' 
                    className='input__checkbox' 
                    onChange={() => handleFilter('activity', activity)}
                  />
                  <span className='p__text'>{activity} ({counted('activity', activity)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='TYPE'>
              {data.typeCategory.map(type => (
                <div key={type} className='option'>
                  <input 
                    checked={filters.type[type]}
                    type='checkbox' 
                    className='input__checkbox' 
                    onChange={() => handleFilter('type', type)}
                  />
                  <span className='p__text'>{type} ({counted('type', type)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='COLOR'>
              {data.colorCategory.map(color => (
                <div key={color} className='option'>
                  <input 
                    type='checkbox' 
                    className='input__checkbox' 
                    onChange={() => handleFilter('color', color)}
                  />
                  <span className='p__text'>{color} ({counted('color', color)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='FEATURES'>
              {data.featuresCategory.map(feature => (
                <div key={feature} className='option'>
                  <input 
                    type='checkbox' 
                    className='input__checkbox' 
                    onChange={() => handleFilter('features', feature)}
                  />
                  <span className='p__text'>{feature} ({counted('features', feature)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='PRICE'>
              <div className='price__slider'>
                <Slider 
                  range
                  min={0}
                  max={3600}
                  defaultValue={[0, 3600]}
                  onChange={(value) => handlePriceRange(value)}
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
                  <input 
                    checked={filters.brand[brand]} 
                    type='checkbox' 
                    className='input__checkbox' 
                    onChange={() => handleFilter('brand', brand)}
                  />
                  <span className='p__text'>{brand} ({counted('brand', brand)})</span>
                </div>
              ))}
            </Collapsible>
          </div>
        </div>

        <div>
          <div className='app__products-content_results'>
            {currentItems.map(product => (
              <div key={product.name} className='app__products-content_results-card' onClick={() => handleOpenProduct(product.id)}>
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
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName='pagination flex__center'
            pageLinkClassName='page-num p__yanone'
            previousClassName='page-prev p__yanone'
            nextLinkClassName='page-next p__yanone'
            activeLinkClassName='page-active'
          />
        </div>

      </div>
    </div>
  )
}

const defaultFilters = {
  gender: {
    Men: false,
    Women: false,
    Unisex: false,
    Kids: false
  },
  activity: {
    Hiking: false,
    Climbing: false,
    Running: false,
    Camping: false,
    Expeditions: false
  },
  type: {
    Footwear: false,
    Clothing: false,
    Accesories: false,
    Equipment: false,
  },
  color: {
    Black: false,
    White: false,
    Brown: false,
    Grey: false,
    Beige: false,
    Blue: false,
    Green: false,
    Yellow: false,
    Red: false,
    Purple: false
  },
  features: {
    Waterproof: false,
    Windproof: false,
    'Reflective accents': false,
    Thermal: false,
    Compressible: false,
    Stretch: false,
    Frameless: false,
    'UV Protection': false
  },
  brand: {
    Adidas: false,
    'Black Diamond': false,
    Columbia: false,
    Haglofs: false,
    'La Sportiva': false,
    Mammut: false,
    Merrell: false,
    Osprey: false,
    Patagonia: false,
    Petzl: false,
    Salewa: false,
    Salomon: false,
    'Sea To Summit': false,
    'The North Face': false
  }
}

export default Products;