import React, { useState } from 'react';

const MonthlyCard = ({ planType, carPricePriceValue, propWidth, propBackgroundColor, propPadding, propColor }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleCard = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`flex flex-col items-center justify-start text-center text-[0.88rem] text-text-color font-h6 ${
        isToggled ? 'toggled' : ''
      }`}
    >
      <div
        className={`bg-light-text-color flex flex-col items-center justify-start py-[3.13rem] px-[2.5rem] gap-[2.19rem] border-[1px] border-solid border-primary-color`}
        style={{
          width: propWidth,
          backgroundColor: propBackgroundColor,
          padding: propPadding,
        }}
      >
        <b
          className="relative text-[1.5rem] tracking-[0.1px] leading-[2rem]"
          style={{ color: propColor }}
        >
          {planType}
        </b>
        <button onClick={toggleCard}>Toggle</button>
      </div>
    </div>
  );
};

export default MonthlyCard;
