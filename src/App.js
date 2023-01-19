import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Brands from "./components/Brands";
import Join from "./components/Join";
import Footer from "./components/Footer";
import OtherFinancials from "./components/OtherFinancials";
import Vision from "./components/Vision";
import Prerequisites from "./components/Prerequisites";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Brands />
      <Vision />
      <Prerequisites />
      <OtherFinancials />
      <Join />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
