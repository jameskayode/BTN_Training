import React from 'react'

const PricingCardForm = () => {
  return (
    <div className="absolute top-[38.5rem] left-[calc(50%_-_208px)] w-[25.88rem] overflow-hidden flex flex-col items-start justify-start text-center text-[1rem] text-text-color font-h6 md:text-[2.5rem] md:text-left md:w-[90rem] md:h-[72.63rem] md:relative md:top-[0.81rem]">
      <div className="w-[25.88rem] overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[1rem]">
          <h5 className="relative tracking-[0.1px] leading-[1.5rem] text-second-text-color text-[1rem]">
            PRICING
          </h5>
          <h2 className="relative text-[2.5rem] tracking-[0.2px] leading-[3.13rem] md:text-[3.625rem]">
            Simple Pricing
          </h2>
          <div className="overflow-hidden flex flex-row items-center justify-start py-[0.63rem] px-[0rem] gap-[0.94rem] text-[0.88rem]">
            <h6 className="relative tracking-[0.2px] leading-[1.5rem]">Home</h6>
            <img
              className="relative w-[0.44rem] h-[0.75rem] overflow-hidden shrink-0"
              alt=""
              src=""
            />
            <h6 className="relative tracking-[0.2px] leading-[1.5rem] text-second-text-color text-[0.88rem]">
              Pricing
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCardForm
