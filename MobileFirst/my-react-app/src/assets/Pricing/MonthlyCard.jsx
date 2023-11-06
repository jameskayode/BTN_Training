import React, { useState } from "react";

const MonthlyCard = ({
  planType,
  cardText,
  carPricePriceValue,
  propWidth,
  propBackgroundColor,
  propPadding,
  propColor,
  statusIconClass,
  circleIconClass,
  circleIconClassMute9Circl,
}) => {
  

  return (
    <div
      className={`flex flex-col items-center justify-start text-center text-[0.88rem] text-text-color font-h6`}
    >
      <div
        className={`bg-light-text-color flex flex-col items-center justify-start py-[3.13rem] px-[2.5rem] gap-[2.19rem] border-[1px] border-solid border-primary-color`}
        style={{
          width: propWidth,
          backgroundColor: propBackgroundColor,
          padding: propPadding,
          color: propColor,
        }}
      >
        <div
          className=" text-[1.5rem] tracking-[0.1px] leading-[2rem] font-bold"
          style={{ color: propColor }}
        >
          {planType}
        </div>
        <div className="w-[10rem] h-[3rem] text-[#737373] text-[1rem]">
          <span>{cardText}</span>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[0.63rem] text-left text-[2.5rem] text-primary-color">
          <b className="relative tracking-[0.2px] leading-[3.13rem]">
            {carPricePriceValue}
          </b>

          <div className="flex flex-col items-start justify-start text-[1.5rem]">
            <b className="relative tracking-[0.1px] leading-[2rem]">$</b>

            <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem]  ">
              Per Month
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-[0.94rem] text-left">
          <div className=" flex flex-row items-center justify-start gap-[0.63rem]">
            {statusIconClass}

            <b
              className="relative tracking-[0.2px] leading-[1.5rem] inline-block w-[12.81rem] h-[1.83rem] 
            style={{ color: propColor }}"
            >
              Unlimited product updates
            </b>
          </div>
          <div className=" flex flex-row items-center justify-start gap-[0.63rem]">
            {circleIconClass}

            <b className="relative tracking-[0.2px] leading-[1.5rem] inline-block w-[12.81rem] h-[1.83rem] ">
              Unlimited product updates
            </b>
          </div>
          <div className=" flex flex-row items-center justify-start gap-[0.63rem]">
            {statusIconClass}

            <b className="relative tracking-[0.2px] leading-[1.5rem] inline-block w-[12.81rem] h-[1.83rem] ">
              Unlimited product updates
            </b>
          </div>
          <div className=" flex flex-row items-center justify-start gap-[0.63rem]">
            {circleIconClassMute9Circl}

            <b className="relative tracking-[0.2px] leading-[1.5rem] inline-block w-[12.81rem] h-[1.83rem] ">
              1GB Cloud storage
            </b>
          </div>
          <div className=" flex flex-row items-center justify-start gap-[0.63rem]">
            {circleIconClassMute9Circl}

            <b className="relative tracking-[0.2px] leading-[1.5rem] inline-block w-[12.81rem] h-[1.83rem] ">
              Email and community support
            </b>
          </div>
        </div>
        <div className="rounded-8xs bg-primary-color w-[15.38rem] overflow-hidden flex flex-col items-center justify-start py-[0.94rem] px-[2.5rem] box-border text-light-text-color">
          <div className="relative tracking-[0.2px] leading-[1.38rem]">
            Try for free
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCard;
