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
  const [toggleText, setToggleText] = useState('DESCHIDE');
  const sliderBackgroundRef = useRef();


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
      setToggleText('DESCHIDE');
      
      sliderBackgroundRef.current.style.display = 'none';
    } else {
      setToggleMenu(true);
      setToggleText('ÎNCHIDE');

      setTimeout(() => {
        sliderBackgroundRef.current.style.display = 'block';
      }, 310)
    }
  }

  const handleFiltersHidden = () => {
    setToggleMenu(false);
    sliderBackgroundRef.current.style.display = 'none';
  }


  const { id } = useParams();
  useEffect(() => {
    if(id) {
      const category = id.split('_')[0];
      const value = id.split('_')[1];
      let newDefaltFilters = defaultFilters;
      newDefaltFilters[category][value] = true;
      setFilters(newDefaltFilters);
      getFilteredData();
    }
  }, [id])
  


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
      <div className='app__products-content_filters-background' onClick={handleFiltersHidden} ref={sliderBackgroundRef}></div>
      <div className='flex justify-center app__products-content'>
        <div className={toggleMenu ? 'app__products-content_filters active' : 'app__products-content_filters'}>
          <Link to='#' className={toggleMenu ? 'hidden app__products-content_filters-toggle active' : 'hidden app__products-content_filters-toggle'} onClick={handleFiltersVisible}>
            <p toggletext={toggleText} >{toggleText}</p>
            <p style={{marginBottom: '5px'}}>FILTRELE</p>
          </Link>
          <div className={toggleMenu ? 'flex items-center justify-center w-60 bg-dark h-20 text-center text-yellow text-2xl border-b border-white block font-yanone' : 'hidden'}>FILTRARE</div>
          <div className={toggleMenu ? 'bg-dark h-full w-60 overflow-y-auto app__products-content_filters-slider active' : 'bg-dark h-full w-60 overflow-y-auto app__products-content_filters-slider'}>
            <Collapsible title='GENDER'>
              {data.genderCategory.map(gender => {
                return (
                <div key={gender} className='py-2.5 px-3 flex justify-start items-center option'>
                  <input 
                    checked={filters.gender[gender]} 
                    type='checkbox' 
                    className='w-4 h-4 input__checkbox' 
                    onChange={() => handleFilter('gender', gender)}
                  />
                  <span className='ml-2.5 text-dark p__text'>{gender} ({counted('gender', gender)})</span>
                </div>
                )})}
            </Collapsible>

            <Collapsible title='ACTIVITY'>
              {data.activityCategory.map(activity => (
                <div key={activity} className='py-2.5 px-3 flex justify-start items-center option'>
                  <input 
                    checked={filters.activity[activity]} 
                    type='checkbox' 
                    className='w-4 h-4 input__checkbox' 
                    onChange={() => handleFilter('activity', activity)}
                  />
                  <span className='ml-2.5 text-dark p__text'>{activity} ({counted('activity', activity)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='TYPE'>
              {data.typeCategory.map(type => (
                <div key={type} className='py-2.5 px-3 flex justify-start items-center option'>
                  <input 
                    checked={filters.type[type]}
                    type='checkbox' 
                    className='w-4 h-4 input__checkbox' 
                    onChange={() => handleFilter('type', type)}
                  />
                  <span className='ml-2.5 text-dark p__text'>{type} ({counted('type', type)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='COLOR'>
              {data.colorCategory.map(color => (
                <div key={color} className='py-2.5 px-3 flex justify-start items-center option'>
                  <input 
                    type='checkbox' 
                    className='w-4 h-4 input__checkbox' 
                    onChange={() => handleFilter('color', color)}
                  />
                  <span className='ml-2.5 text-dark p__text'>{color} ({counted('color', color)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='FEATURES'>
              {data.featuresCategory.map(feature => (
                <div key={feature} className='py-2.5 px-3 flex justify-start items-center option'>
                  <input 
                    type='checkbox' 
                    className='w-4 h-4 input__checkbox' 
                    onChange={() => handleFilter('features', feature)}
                  />
                  <span className='ml-2.5 text-dark p__text'>{feature} ({counted('features', feature)})</span>
                </div>
              ))}
            </Collapsible>

            <Collapsible title='PRICE'>
              <div className='flex flex-col justify-center items-center py-2.5 px-3 gap-y-2.5'>
                <div className='w-10/12 price__slider'>
                  <Slider 
                    range
                    min={0}
                    max={3600}
                    defaultValue={[0, 3600]}
                    onChange={(value) => handlePriceRange(value)}
                    className='price__slider-input'
                  />
                </div>
                <div className='flex justify-between w-11/12 price__range'>
                  <span className='text-dark p__text'>{priceRange[0]} RON</span>
                  <span className='text-dark p__text'>{priceRange[1]} RON</span>
                </div>
              </div>
            </Collapsible>

            <Collapsible title='BRANDS'>
              {data.brandsCategory.map(brand => (
                <div key={brand} className='py-2.5 px-3 flex justify-start items-center option'>
                  <input 
                    checked={filters.brand[brand]} 
                    type='checkbox' 
                    className='w-4 h-4 input__checkbox' 
                    onChange={() => handleFilter('brand', brand)}
                  />
                  <span className='ml-2.5 text-dark p__text'>{brand} ({counted('brand', brand)})</span>
                </div>
              ))}
            </Collapsible>
          </div>
        </div>

        <div>
          <div className='w-full grid grid-cols-4 gap-5 align-start justify-evenly p-20 app__products-content_results'>
            {currentItems.map(product => (
              <div key={product.name} className='h-auto relative flex flex-col items-center cursor-pointer border border-gray-300 app__products-content_results-card' onClick={() => handleOpenProduct(product.id)}>
                <div className='w-full app__products-content_results-card_sustainable'>
                  {product.sustainable ? <p className='bg-green font-menu text-left ml-5 mt-5 text-xs absolute text-yellow p-1'>Sustainable</p> : ''}
                </div>
                <div className='w-full p-5 app__products-content_results-card_image'>
                  <img src={product.images[0]} alt={product.name} className='w-full border-b border-gray-300'/>
                </div>
                <div className='flex flex-col justify-between items-center text-center gap-y-3 h-full px-5 pb-5 app__products-content_results-card_text'>
                  <h1 className='p__headtext'>{product.name}</h1>
                  <p className='font-menu text-lg font-bold tracking-wider text-blue'>{(product.price).toFixed(2)} RON</p>
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
            containerClassName='flex justify-center items-center bg-blue h-16 gap-3'
            pageLinkClassName='py-2 px-3.5 cursor-pointer page-num p__yanone'
            previousClassName='py-1.5 px-3.5 cursor-pointer page-prev p__yanone'
            nextLinkClassName='py-2 px-3.5 cursor-pointer page-next p__yanone'
            activeLinkClassName='bg-yellow text-dark rounded-full page-active'
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