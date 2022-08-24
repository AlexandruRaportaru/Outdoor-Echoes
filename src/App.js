import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Activities, FindUs, Footer, Creator, Header, Intro, Blogs, Selection, Men, Women, Kids, Equipment } from './container';
import { Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/kids' element={<KidsPage />} />
        <Route path='/equipment' element={<EquipmentPage />} />
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
    <Creator />
    <Intro />
    <Blogs />
    <FindUs />
    <Footer />
  </div>
);

const MenPage = () => (
  <div>
    <Men />
</div>
);

const WomenPage = () => (
  <div>
    <Women />
</div>
);

const KidsPage = () => (
  <div>
    <Kids />
</div>
);

const EquipmentPage = () => (
  <div>
    <Equipment />
</div>
);

export default App;