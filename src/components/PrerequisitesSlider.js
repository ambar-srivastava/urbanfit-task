import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

const PrerequisitesSlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={"auto"}
      grabCursor={true}
      modules={[]}
      className="prerequisitesSlider"
    >
      {testimonials.map((testimonial, idx) => {
        // destructure testimonial
        const { image, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div className="relative">
              {/* image */}
              <div>
                <img src={image} alt="" />
              </div>
              {/* message & name */}
              <div className="absolute bottom-[30px] p-[20px] text-white text-center">
                <div className="mb-8 italic text-lg font-light">{message}</div>
                <div className="flex items-center justify-center gap-x-[3px]">
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PrerequisitesSlider;
