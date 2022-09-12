import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Activities, Footer, Creator, Header, Intro, Blogs, Selection, Products } from './container';
import { Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
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
    <Footer />
  </div>
);

const ProductsPage = () => (
  <div>
    <Products />
</div>
);

export default App;