import React from "react";

import { Text } from "../Text";

const DesktopCartTwoColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start mt-2 w-full">
          <Text
            className="text-[13px] text-blue_gray-900"
            size="txtPoppinsSemiBold13"
          >
            {props?.standardrate}
          </Text>
          <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
            <div className="bg-white-A700 border-2 border-blue-500 border-solid flex flex-col h-[21px] items-center justify-start mb-[29px] p-1 rounded-[10px] w-[21px]">
              {!!props?.ellipsetwentyfive ? (
                <div className="bg-blue-500 h-[13px] rounded-md w-[13px]"></div>
              ) : null}
            </div>
            {!!props?.price ? (
              <Text
                className="sm:flex-1 leading-[20.00px] text-black-900 text-sm w-[93%] sm:w-full"
                size="txtPoppinsRegular14"
              >
                {props?.price}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

DesktopCartTwoColumn.defaultProps = { standardrate: "Standard Rate" };

export default DesktopCartTwoColumn;
