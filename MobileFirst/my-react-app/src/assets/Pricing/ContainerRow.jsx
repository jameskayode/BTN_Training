import React from "react";

const ContainerRow = ({ title, content }) => (
  <div className="w-[22.63rem] overflow-hidden flex flex-col items-center justify-start py-[1rem] px-[0rem] box-border">
    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[1rem] px-[1.5rem]">
      <b className="relative tracking-[0.1px] leading-[1.5rem]">{title}</b>
    </div>
    <div className="w-[24.13rem] overflow-hidden flex flex-col items-start justify-start text-[0.88rem] text-second-text-color">
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.5rem]">
        <div className="relative tracking-[0.2px] leading-[1.25rem]">
          {content.map((paragraph, index) => (
            <p key={index} className="m-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>  
  </div>
);

export default ContainerRow;
