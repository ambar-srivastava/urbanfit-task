import React, { useState } from "react";

// import icons
// import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
      {plans.map((plan, currentIndex) => {
        // destructure plan
        const { description, icon, delay } = plan;
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            key={currentIndex}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[350px]"
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-[40px] px-[30px] lg:min-h-[350px] transition duration-100`}
            >
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">
                {/* name & icon wrapper */}
                <div>
                  {/* icon */}
                  <div className="text-[40px] lg:text-[100px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                    <div className="leading-none">
                      <span className="tracking-[0.1px] ">{icon}</span>
                      <span className="text-[30px] font-extrabold">
                        {currentIndex === 1 ? "%" : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  {/* description */}
                  <p
                    className={`${
                      currentIndex === index ? "text-white" : "text-neutral-500"
                    } lg:mx-auto`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
