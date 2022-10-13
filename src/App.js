import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Activities, Intro, Creator, Blogs, Products, Product, Checkout, Error} from './container';
import { Navbar, Selection, Newsletter, Footer } from './components';
import { ScrollToTop } from "./utils";

import './App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:id' element={<ProductsPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

const HomePage = () => (
  <div>
    <Navbar />
    <Header />
    <Activities />
    <Selection />
    <Intro />
    <Creator />
    <Blogs />
    <Newsletter />
    <Footer />
  </div>
);

const ProductsPage = () => (
  <div>
    <Navbar />
    <Products />
    <Selection />
    <Newsletter />
    <Footer />
</div>
);

const ProductPage = () => (
  <div>
    <Navbar />
    <Product />
    <Selection />
    <Newsletter />
    <Footer />
</div>
);

const CheckoutPage = () => (
  <div>
    <Navbar disableCart/>
    <Checkout />
    <Footer />
</div>
);

const ErrorPage = () => (
  <div>
    <Navbar/>
    <Error />
    <Newsletter />
    <Footer />
</div>
);

export default App;