import React from 'react';

const TexttrueIconfalseRounded = ({
  h6,
  texttrueIconfalseRoundedBackgroundColor,
  texttrueIconfalseRoundedPadding,
  h6FontSize,
  h6LineHeight,
  h6Color,
}) => {
  return (
    <div
      className="rounded-18xl bg-primary-color overflow-hidden flex flex-col items-center justify-start py-2.5 px-5 text-center text-sm text-light-text-color font-h6"
      style={{
        backgroundColor: texttrueIconfalseRoundedBackgroundColor,
        padding: texttrueIconfalseRoundedPadding,
      }}
    >
      <b
        className="relative tracking-[0.2px] leading-[24px]"
        style={{
          fontSize: h6FontSize,
          lineHeight: h6LineHeight,
          color: h6Color,
        }}
      >
        {h6}
      </b>
    </div>
  );
};

export default TexttrueIconfalseRounded;
