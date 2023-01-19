import React, { useState, useEffect } from "react";

// import header data
import { header } from "../data";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data
  const { logo } = header;
  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      }
      fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-center items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      {/* logo */}
      <a href="/">
        <img className="h-[3rem]" src={logo} alt="" />
      </a>
    </header>
  );
};

export default Header;
