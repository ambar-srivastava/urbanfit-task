import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <Header />
      <Banner />
      <About />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
