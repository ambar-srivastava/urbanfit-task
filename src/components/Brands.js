import React from "react";

// import data
import { brands } from "../data";

// import components
import BrandSlider from "./BrandSlider";

const Brands = () => {
  // destructure brands data
  const { title, icon } = brands;
  return (
    <section className="section">
      {/* section title */}
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img width="130" src={icon} alt="DumbellIcn" />
        <h2 className="h2 section-title">
          {title} <span className="text-[#99ff33]">.</span>
        </h2>
      </div>
      {/* slider */}
      <div data-aos="fade-up" data-aos-delay="300">
        <BrandSlider />
      </div>
    </section>
  );
};

export default Brands;
