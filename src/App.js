import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Feature from './component/Feature';
import Testimonial from './component/Testimonial';
import CtaSection from './component/CtaSection';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className=''>
        <Navbar/>
        <Header/>
        <Feature/>
        <Testimonial/>
        <CtaSection/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
