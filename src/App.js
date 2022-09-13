import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Activities, Selection, Intro, Creator, Blogs, Newsletter, Products} from './container';
import { Navbar, Footer, } from './components';

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
    <Newsletter />
    <Footer />
  </div>
);

const ProductsPage = () => (
  <div>
    <Products />
</div>
);

export default App;