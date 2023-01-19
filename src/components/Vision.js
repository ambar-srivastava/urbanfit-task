import React from "react";

// import data
import { vision } from "../data";

// import components
import PlanList from "./PlanList";

const Vision = () => {
  // destructure vision
  const { icon, title, plans } = vision;
  return (
    <section className="section">
      {/* section title */}
      <div
        className="section-title-group max-w-[700px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img width="130" src={icon} alt="" />
        <h2 className="h2 section-title">
          {title} <span className="text-[#99ff33]">.</span>
        </h2>
      </div>
      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  );
};

export default Vision;
