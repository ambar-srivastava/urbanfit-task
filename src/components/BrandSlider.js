import React from 'react';
// import data
import { brands } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../brandSlider.css';

// import required modules
import { Navigation } from 'swiper';

const BrandSlider = () => {
  // destructure data
  const { programs } = brands;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className='brandSlider'
    >
      {programs.map((program, idx) => {
        // destructure program
        const { image, name } = program;
        return (
          <SwiperSlide
            className='max-w-[320px] max-h-[320px] relative bg-slate-100'
            key={idx}
          >
            <img className='w-full h-full object-cover' src={image} alt='' />
            <div className='absolute left-[20px] bottom-[20px] bg-[#426da5] h-[26px] px-[14px] flex items-center justify-center rounded-[1px]'>
              <div className='font-primary font-semibold text-sm text-white'>
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BrandSlider;
