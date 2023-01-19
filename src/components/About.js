import React from "react";

// import data
import { about } from "../data";

// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  // destructure about data
  const {
    title,
    subtitle1,
    subtitle2,
    icon,
    link,
  } = about;
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* section title */}
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={icon} alt="" />
          <h2 className="h2 section-title">
            {title} <span className="text-[#99ff33]">.</span>
          </h2>
        </div>
        <p
          className="md:text-body-md mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle1}
        </p>
        <p
          className="md:text-body-md mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle2}
        </p>
        <div
          className="md:flex gap-10 md:justify-between grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p
              className="md:text-4xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              15462
            </p>
            <p
              className="md:text-5xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              -
            </p>
            <p
              className=" md:text-body-md mb-8 text-center md:text-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              No of Client <br /> Per Month
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p
              className="md:text-4xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              3
            </p>
            <p
              className="md:text-5xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              -
            </p>
            <p
              className=" md:text-body-md mb-8 text-center md:text-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              No of Stores
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p
              className="md:text-4xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              10 Lacs
            </p>
            <p
              className="md:text-5xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              -
            </p>
            <p
              className=" md:text-body-md mb-8 text-center md:text-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Revenue Generated <br /> Per Store
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p
              className="md:text-4xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              67
            </p>
            <p
              className="md:text-5xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              -
            </p>
            <p
              className=" md:text-body-md mb-8 text-center md:text-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Brands Officially <br /> Connected
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p
              className="md:text-4xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              ∞
            </p>
            <p
              className="md:text-5xl md:text-body-md text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              -
            </p>
            <p
              className=" md:text-body-md mb-8 text-center md:text-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Opportunities
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <a
            className="link flex items-center gap-x-4 hover:gap-x-6 transition-all"
            href="#"
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
