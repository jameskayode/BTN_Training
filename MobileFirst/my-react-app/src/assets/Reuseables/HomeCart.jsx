import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const HomeCart = () => {
  return (
    <div className="flex flex-col items-center w-[25.875rem] mt-[0.625rem] h-[2.7rem] md:flex-row md:gap-[0.1rem]  md:ml-[12rem] md:space-x-[50rem] md:mt-[10rem] md:content-between">
      <div className=" tracking-[0.1px] leading-[2rem] hidden sm:hidden md:flex ">
       <span className="text-[#252B42] md:w-[11.5rem] text-[1.5rem] md:h-[2rem] font-bold tracking-[0.1px] leading-[2rem]" >Shopping Cart</span> 
      </div>

      <div className="flex flex-row items-center gap-[1.88rem]">
        <div className="flex flex-col text-[0.88rem]">
          <div className=" flex flex-row items-center gap-[0.94rem] ">
            <b className="relative tracking-[0.2px] leading-[1.5rem]">Home</b>
            <IoChevronForwardSharp className="w-[0.56rem] h-[1rem]" />
            <b className="relative tracking-[0.2px] leading-[1.5rem] text-muted-text-color">
              Cart
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCart;
