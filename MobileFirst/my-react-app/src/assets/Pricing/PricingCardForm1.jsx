import React, { useState } from 'react';
import TexttrueIconfalseRounded from './TexttrueIconfalseRounded';
// import {PricingData} from './PricingData';


const PricingCardForm1 = ({ PricingData}) => {
    console.log(PricingData);
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="relative bg-gray-100 w-[25.88rem] h-[159.44rem] overflow-hidden shrink-0 text-center text-[2.5rem] text-text-color font-h6">
      <div className="absolute top-[1.88rem] left-[calc(50% - 165px)] w-[20.63rem] flex flex-col items-center justify-start py-[2.81rem] px-[0rem] box-border gap-[3rem]">
        <div className="w-[19.38rem] overflow-hidden flex flex-col items-center justify-start">
          <div className="w-[18.81rem] overflow-hidden flex flex-col items-center justify-start gap-[0.63rem]">
            <b className="relative tracking-[0.2px] leading-[3.13rem]">Pricing</b>
            <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] text-second-text-color">
              <p className="m-0">{PricingData.description[0]}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[1rem] text-left text-[1rem]">
          <div className="relative w-[11.63rem] h-[1.75rem]">
            <b
              className="absolute top-[0rem] left-[0rem] tracking-[0.1px] leading-[1.5rem]"
              onClick={() => togglePlan()}
              style={{ cursor: 'pointer' }}
            >
              Monthly
            </b>
            <img
              className="absolute top-[0.06rem] left-[5rem] rounded-2xl w-[2.81rem] h-[1.56rem]"
              alt=""
              src="/formcheckinput.svg"
            />
            <b
              className="absolute top-[0rem] left-[8.44rem] tracking-[0.1px] leading-[1.5rem]"
              onClick={() => togglePlan()}
              style={{ cursor: 'pointer' }}
            >
              Yearly
            </b>
          </div>
          <TexttrueIconfalseRounded
            h6={`Save ${isMonthly ? '25' : '15'}%`}
            texttrueIconfalseRoundedBackgroundColor="#b2e3ff"
            texttrueIconfalseRoundedPadding="0.63rem 1.25rem"
            h6FontSize="0.88rem"
            h6LineHeight="1.5rem"
            h6Color="#23a6f0"
          />
        </div>
        <div className="flex flex-col items-end justify-start gap-[1.88rem] text-[0.88rem]">
          <MonthlyCard
            planType={isMonthly ? data.monthlyPlan.planType : data.yearlyPlan.planType}
            carPricePriceValue={isMonthly ? data.monthlyPlan.carPricePriceValue : data.yearlyPlan.carPricePriceValue}
            statusIconClass={isMonthly ? data.monthlyPlan.statusIconClass : data.yearlyPlan.statusIconClass}
            circleIconClass={isMonthly ? data.monthlyPlan.circleIconClass : data.yearlyPlan.circleIconClass}
            circleIconClassSecondaryC={isMonthly ? data.monthlyPlan.circleIconClassSecondaryC : data.yearlyPlan.circleIconClassSecondaryC}
            circleIconClassMute9Circl={isMonthly ? data.monthlyPlan.circleIconClassMute9Circl : data.yearlyPlan.circleIconClassMute9Circl}
            circleIconClassMute10={isMonthly ? data.monthlyPlan.circleIconClassMute10 : data.yearlyPlan.circleIconClassMute10}
            propWidth={isMonthly ? data.monthlyPlan.propWidth : data.yearlyPlan.propWidth}
            propBackgroundColor={isMonthly ? data.monthlyPlan.propBackgroundColor : data.yearlyPlan.propBackgroundColor}
            propPadding={isMonthly ? data.monthlyPlan.propPadding : data.yearlyPlan.propPadding}
            propWidth1={isMonthly ? data.monthlyPlan.propWidth1 : data.yearlyPlan.propWidth1}
            propColor={isMonthly ? data.monthlyPlan.propColor : data.yearlyPlan.propColor}
            propColor1={isMonthly ? data.monthlyPlan.propColor1 : data.yearlyPlan.propColor1}
            propColor2={isMonthly ? data.monthlyPlan.propColor2 : data.yearlyPlan.propColor2}
            propColor3={isMonthly ? data.monthlyPlan.propColor3 : data.yearlyPlan.propColor3}
            propColor4={isMonthly ? data.monthlyPlan.propColor4 : data.yearlyPlan.propColor4}
            propColor5={isMonthly ? data.monthlyPlan.propColor5 : data.yearlyPlan.propColor5}
            propColor6={isMonthly ? data.monthlyPlan.propColor6 : data.yearlyPlan.propColor6}
          />
        </div>
      </div>
    </div>
  );
};
export const PricingData = [
    {
  description: 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics',
  monthlyPlan: {
    planType: 'FREE',
    carPricePriceValue: '0',
    statusIconClass: '/icncircle-circlexs-secondarycolor1.svg',
    circleIconClass: '/icncircle-circlexs-secondarycolor13.svg',
    circleIconClassSecondaryC: '/icncircle-circlexs-secondarycolor16.svg',
    circleIconClassMute9Circl: '/icncircle-circlexs-mute.svg',
    circleIconClassMute10: '/icncircle-circlexs-mute1.svg',
    propWidth: '20.56rem',
    propBackgroundColor: '#252b42',
    propPadding: '5rem 2.5rem',
    propWidth1: '20.94rem',
    propColor: '#fff',
    propColor1: '#fff',
    propColor2: '#fff',
    propColor3: '#fff',
    propColor4: '#fff',
    propColor5: '#fff',
    propColor6: '#fff',
  },
  yearlyPlan: {
    planType: 'FREE',
    carPricePriceValue: '0',
    statusIconClass: '/icncircle-circlexs-secondarycolor11.svg',
    circleIconClass: '/icncircle-circlexs-secondarycolor14.svg',
    circleIconClassSecondaryC: '/icncircle-circlexs-secondarycolor17.svg',
    circleIconClassMute9Circl: '/icncircle-circlexs-mute2.svg',
    circleIconClassMute10: '/icncircle-circlexs-mute3.svg',
    propWidth: '20.94rem',
    propBackgroundColor: '#fff',
    propPadding: '3.13rem 2.5rem',
    propWidth1: '20.5rem',
    propColor: '#252b42',
    propColor1: '#737373',
    propColor2: '#252b42',
    propColor3: '#252b42',
    propColor4: '#252b42',
    propColor5: '#252b42',
    propColor6: '#252b42',
  },
}
]



export default PricingCardForm1;
