import MonthlyCard from './MonthlyCard';
import TexttrueIconfalseRounded from './TexttrueIconfalseRounded';

const PricingPage = () => {
  return (
    <div>
      <MonthlyCard
        planType="FREE"
        carPricePriceValue="0"
        statusIconClass="/icncircle-circlexs-secondarycolor1.svg"
        circleIconClass="/icncircle-circlexs-secondarycolor11.svg"
        circleIconClassSecondaryC="/icncircle-circlexs-secondarycolor12.svg"
        circleIconClassMute9Circl="/icncircle-circlexs-mute.svg"
        circleIconClassMute10="/icncircle-circlexs-mute1.svg"
      />
      <MonthlyCard
        planType="STANDARD"
        carPricePriceValue="9.99"
        statusIconClass="/icncircle-circlexs-secondarycolor13.svg"
        circleIconClass="/icncircle-circlexs-secondarycolor14.svg"
        circleIconClassSecondaryC="/icncircle-circlexs-secondarycolor15.svg"
        circleIconClassMute9Circl="/icncircle-circlexs-mute2.svg"
        circleIconClassMute10="/icncircle-circlexs-mute3.svg"
        propWidth="20.56rem"
        propBackgroundColor="#252b42"
        propPadding="5rem 2.5rem"
        propWidth1="20.94rem"
        propColor="#fff"
        propColor1="#fff"
        propColor2="#fff"
        propColor3="#fff"
        propColor4="#fff"
        propColor5="#fff"
        propColor6="#fff"
      />
      <MonthlyCard
        planType="PREMIUM"
        carPricePriceValue="19.99"
        statusIconClass="/icncircle-circlexs-secondarycolor16.svg"
        circleIconClass="/icncircle-circlexs-secondarycolor17.svg"
        circleIconClassSecondaryC="/icncircle-circlexs-secondarycolor18.svg"
        circleIconClassMute9Circl="/icncircle-circlexs-mute4.svg"
        circleIconClassMute10="/icncircle-circlexs-mute5.svg"
        propWidth="20.56rem"
        propBackgroundColor="#fff"
        propPadding="3.13rem 2.5rem"
        propWidth1="20.5rem"
        propColor="#252b42"
        propColor1="#737373"
        propColor2="#252b42"
        propColor3="#252b42"
        propColor4="#252b42"
        propColor5="#252b42"
        propColor6="#252b42"
      />
      <TexttrueIconfalseRounded
        h6="Save 25%"
        texttrueIconfalseRoundedBackgroundColor="#b2e3ff"
        texttrueIconfalseRoundedPadding="0.63rem 1.25rem"
        h6FontSize="0.88rem"
        h6LineHeight="1.5rem"
        h6Color="#23a6f0"
      />
    </div>
  );
};

export default PricingPage;
import React from 'react'


