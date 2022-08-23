import React from 'react';

import { Activities, FindUs, Footer, Creator, Header, Intro, Blogs, Selection } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
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

export default App;
