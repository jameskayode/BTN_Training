import { useMemo } from "react";

const Component96 = ({
  yourName,
  showYourName,
  component96Width,
  component96Height,
  component96Position,
  component96Top,
  component96Left,
  yourNameContainerFontSize,
  yourNameContainerFontFamily,
  yourNameContainerColor,
  yourNameColor,
  yourNamePosition,
  yourNameHeight,
  yourNameWidth,
  yourNameTop,
  yourNameRight,
  yourNameBottom,
  yourNameLeft,
  yourNameMaxWidth,
  yourNameOverflow,
  yourNameMaxHeight,
}) => {
  const component96Style = useMemo(() => {
    return {
      width: component96Width,
      height: component96Height,
      position: component96Position,
      top: component96Top,
      left: component96Left,
    };
  }, [
    component96Width,
    component96Height,
    component96Position,
    component96Top,
    component96Left,
  ]);

  const yourNameContainerStyle = useMemo(() => {
    return {
      fontSize: yourNameContainerFontSize,
      fontFamily: yourNameContainerFontFamily,
      color: yourNameContainerColor,
    };
  }, [
    yourNameContainerFontSize,
    yourNameContainerFontFamily,
    yourNameContainerColor,
  ]);

  const yourNameStyle = useMemo(() => {
    return {
      color: yourNameColor,
      position: yourNamePosition,
      height: yourNameHeight,
      width: yourNameWidth,
      top: yourNameTop,
      right: yourNameRight,
      bottom: yourNameBottom,
      left: yourNameLeft,
      maxWidth: yourNameMaxWidth,
      overflow: yourNameOverflow,
      maxHeight: yourNameMaxHeight,
    };
  }, [
    yourNameColor,
    yourNamePosition,
    yourNameHeight,
    yourNameWidth,
    yourNameTop,
    yourNameRight,
    yourNameBottom,
    yourNameLeft,
    yourNameMaxWidth,
    yourNameOverflow,
    yourNameMaxHeight,
  ]);

  return (
    <div
      className="w-[345px] h-[70px] text-left text-2xs text-color-7 font-poppins"
      style={component96Style}
    >
      <div className="absolute h-[54.29%] w-full top-[45.71%] right-[0%] bottom-[0%] left-[0%] rounded bg-light-text-color box-border border-[1px] border-solid border-color-5" />
      <div
        className="absolute h-[45.71%] w-full top-[0%] left-[0%] leading-[210%] font-semibold flex items-center"
        style={yourNameContainerStyle}
      >
        <span className="[line-break:anywhere] w-full">
          <span></span>
          <span className="text-brown"></span>
        </span>
      </div>
      
      <div className="absolute h-[57.14%] w-[95.68%] top-[45.71%] left-[4.32%] text-xs leading-[20px] font-light text-color-5 flex items-center">
       
      </div>
      <img
        className="absolute h-[21.1%] w-[3.99%] top-[85.38%] right-[-0.73%] bottom-[-6.48%] left-[96.74%] max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/frame-977.svg"
      />
    </div>
  );
};

export default Component96;
