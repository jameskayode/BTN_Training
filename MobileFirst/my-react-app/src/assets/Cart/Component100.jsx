import { useMemo } from "react";

const Component100 = ({
  standardRate,
  group195,
  priceMayVaryDependingOnTh,
  component100Width,
  component100Height,
  component100Position,
  component100Top,
  component100Left,
  component100Cursor,
  standardRateFontSize,
  standardRateFontFamily,
  groupIconTop,
  groupIconLeft,
  groupIconWidth,
  groupIconHeight,
  priceMayVaryTop,
  priceMayVaryLeft,
  priceMayVaryFontSize,
  priceMayVaryLineHeight,
  priceMayVaryFontFamily,
  priceMayVaryHeight,
  onComponent101ContainerClick,
}) => {
  const component100Style = useMemo(() => {
    return {
      width: component100Width,
      height: component100Height,
      position: component100Position,
      top: component100Top,
      left: component100Left,
      cursor: component100Cursor,
    };
  }, [
    component100Width,
    component100Height,
    component100Position,
    component100Top,
    component100Left,
    component100Cursor,
  ]);

  const standardRateStyle = useMemo(() => {
    return {
      fontSize: standardRateFontSize,
      fontFamily: standardRateFontFamily,
    };
  }, [standardRateFontSize, standardRateFontFamily]);

  const groupIconStyle = useMemo(() => {
    return {
      top: groupIconTop,
      left: groupIconLeft,
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconTop, groupIconLeft, groupIconWidth, groupIconHeight]);

  const priceMayVaryStyle = useMemo(() => {
    return {
      top: priceMayVaryTop,
      left: priceMayVaryLeft,
      fontSize: priceMayVaryFontSize,
      lineHeight: priceMayVaryLineHeight,
      fontFamily: priceMayVaryFontFamily,
      height: priceMayVaryHeight,
    };
  }, [
    priceMayVaryTop,
    priceMayVaryLeft,
    priceMayVaryFontSize,
    priceMayVaryLineHeight,
    priceMayVaryFontFamily,
    priceMayVaryHeight,
  ]);

  return (
    <div
    className="w-[307px] h-20 text-left text-2xs text-color-7 font-poppins"
    
    style={component100Style}
    onClick={onComponent101ContainerClick}
    >
   
      <div
        className="absolute h-[18.75%] w-full top-[0%] left-[0%] leading-[210%] font-semibold flex items-center"
        style={standardRateStyle}
      >
        {standardRate}
      </div>
      <img
        className="absolute top-[25px] left-[0px] w-[18px] h-[18px]"
        alt=""
        src={group195}
        style={groupIconStyle}
      />
      <div
        className="absolute w-[calc(100%_-_33px)] top-[24px] left-[29px] text-xs leading-[20px] inline-block h-[60px]"
        style={priceMayVaryStyle}
      >
        {priceMayVaryDependingOnTh}
      </div>
    </div>
  );
};

export default Component100;
