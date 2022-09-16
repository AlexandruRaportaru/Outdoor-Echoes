import React, { useState, useRef } from 'react';

import './Products.css';

const Products = () => {
  const [genderIsOpen, setGenderIsOpen] = useState(false);
  const [typeIsOpen, setTypeIsOpen] = useState(false);
  const [colorIsOpen, setColorIsOpen] = useState(false);
  const [sizeIsOpen, setSizeIsOpen] = useState(false);
  const [featuresIsOpen, setFeaturesIsOpen] = useState(false);
  const [recomendedIsOpen, setRecomendedIsOpen] = useState(false);
  const [brandsIsOpen, setBrandsIsOpen] = useState(false);
  

  const genderRef = useRef();
  const typeRef = useRef();
  const colorRef = useRef();
  const sizeRef = useRef();
  const featuresRef = useRef();
  const recomendedRef = useRef();
  const brandsRef = useRef();


  const handleGenderVisibility = () => {
    setGenderIsOpen(!genderIsOpen);
  }
  const handleTypeVisibility = () => {
    setTypeIsOpen(!typeIsOpen);
  }
  const handleColorVisibility = () => {
    setColorIsOpen(!colorIsOpen);
  }
  const handleSizeVisibility = () => {
    setSizeIsOpen(!sizeIsOpen);
  }
  const handleFeaturesVisibility = () => {
    setFeaturesIsOpen(!featuresIsOpen);
  }
  const handleRecomendedVisibility = () => {
    setRecomendedIsOpen(!recomendedIsOpen);
  }
  const handleBrandsVisibility = () => {
    setBrandsIsOpen(!brandsIsOpen);
  }

  return (
    <div className='app__products'>
      <div className='app__products-title'>
        <h1 className='title'>Products</h1>
      </div>
      <div className='app__products-content'>
        <div className='app__products-content_menu'>
          <div className='collapsible'>
            <button className='p__logo' onClick={handleGenderVisibility}>GENDER</button>
            <div 
              className='options' 
              ref={genderRef} 
              style={
                genderIsOpen 
                ? {height: genderRef.current.scrollHeight + 'px'}
                : {height: '0px'}
              }
            >
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Men</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Women</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Kids</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Accesories</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Gear</span>
              </div>
            </div>          
          </div>

          <div className='collapsible'>
            <button className='p__logo' onClick={handleTypeVisibility}>TYPE</button>
            <div
              className='options' 
              ref={typeRef} 
              style={
                typeIsOpen 
                ? {height: typeRef.current.scrollHeight + 'px'}
                : {height: '0px'}
              }
            >
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Clothing</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Footwear</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Equipment</span>
              </div>
            </div>
          </div>

          <div className='collapsible'>
            <button className='p__logo' onClick={handleColorVisibility}>COLOR</button>
            <div
              className='options' 
              ref={colorRef} 
              style={
                colorIsOpen 
                ? {height: colorRef.current.scrollHeight + 'px'}
                : {height: '0px'}
              }
            >
              <div className='option'>
                <input type='radio'/>
                <span className='p__text'>Black</span>
              </div>
              <div className='option'>
                <input type='radio'/>
                <span className='p__text'>White</span>
              </div>
              <div className='option'>
                <input type='radio'/>
                <span className='p__text'>Brown</span>
              </div>
              <div className='option'>
                <input type='radio'/>
                <span className='p__text'>Blue</span>
              </div>
              <div className='option'>
                <input type='radio'/>
                <span className='p__text'>Yellow</span>
              </div>
              <div className='option'>
                <input type='radio'/>
                <span className='p__text'>Green</span>
              </div>
            </div>
          </div>

          <div className='collapsible'>
            <button className='p__logo' onClick={handleSizeVisibility}>SIZE</button>
            <div
              className='options' 
              ref={sizeRef} 
              style={
                sizeIsOpen 
                ? {height: sizeRef.current.scrollHeight + 'px'}
                : {height: '0px'}
              }
            >
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>XXS</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>XS</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>S</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>M</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>L</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>XL</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>XXL</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>31</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>32</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>33</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>34</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>35</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>36</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>37</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>38</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>39</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>40</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>41</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>42</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>43</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>44</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>45</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>46</span>
              </div>
            </div>
          </div>

          <div className='collapsible'>
            <button className='p__logo' onClick={handleFeaturesVisibility}>FEATURES</button>
            <div
              className='options' 
              ref={featuresRef} 
              style={
                featuresIsOpen 
                ? {height: featuresRef.current.scrollHeight + 'px'}
                : {height: '0px'}
              }
            >
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Waterproof</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Reflective Accents</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Thermal</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Compressible</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Windproof</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Stretch</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Frameless</span>
              </div>
            </div>
          </div>

          <div className='collapsible'>
            <button className='p__logo' onClick={handleRecomendedVisibility}>RECOMENDED</button>
            <div
              className='options' 
              ref={recomendedRef} 
              style={
                recomendedIsOpen 
                ? {height: recomendedRef.current.scrollHeight + 'px'}
                : {height: '0px'}
              }
            >
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Hiking</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Trail running</span>
              </div>
            </div>
          </div>

          <div className='collapsible'>
            <button className='p__logo' onClick={handleBrandsVisibility}>BRANDS</button>
            <div
              className='options' 
              ref={brandsRef} 
              style={
                brandsIsOpen 
                ? {height: brandsRef.current.scrollHeight + 'px'}
                : {height: '0px'}
              }
            >
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Adidas</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Black Diamond</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Columbia</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Haglofs</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>La Sportiva</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Mammut</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Merrell</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Osprey</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Patagonia</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Petzl</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Salewa</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Salomon</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>Sea To Summit</span>
              </div>
              <div className='option'>
                <input type='checkbox'/>
                <span className='p__text'>The North Face</span>
              </div>
            </div>
          </div>
        </div>


        <div className='app__products-content_results'>

        </div>
      </div>
    </div>
  )
}

export default Products;