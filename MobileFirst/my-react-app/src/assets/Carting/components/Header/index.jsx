import React from "react";

import { Img, List, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-teal-700 flex flex-col items-center justify-end p-[3px] w-full">
          <div className="flex flex-col items-center justify-start mt-1.5 md:px-10 sm:px-5 px-[54px] w-[79%] md:w-full">
            <div className="flex flex-col items-start justify-start max-w-[1020px] w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto">
                <div className="flex flex-row gap-2.5 h-[46px] md:h-auto items-center justify-start w-auto">
                  <div className="flex flex-row gap-[5px] items-center justify-start p-2.5 rounded-[5px] w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <Text
                      className="text-white-A700 text-xs tracking-[0.20px] w-auto"
                      size="txtMontserratRegular12"
                    >
                      (225) 555-0118
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start p-2.5 rounded-[5px] w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_icnsettingsicnxs.svg"
                      alt="icnsettingsicnx"
                    />
                    <Text
                      className="text-white-A700 text-xs tracking-[0.20px] w-auto"
                      size="txtMontserratRegular12"
                    >
                      michelle.rivera@example.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.20px] w-auto"
                    size="txtMontserratBold14WhiteA700"
                  >
                    Follow Us and get a chance to win 80% off
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 h-[46px] md:h-auto items-start justify-start p-2.5 w-auto">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.20px] w-auto"
                    size="txtMontserratBold14WhiteA700"
                  >
                    Follow Us :
                  </Text>
                  <Img
                    className="h-[26px] w-[120px]"
                    src="images/img_socialmedia.svg"
                    alt="socialmedia"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-center mx-auto my-2.5 w-[73%]">
          <div className="flex flex-col items-start justify-end pr-[11px] py-[11px]">
            <Text
              className="mt-[5px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[0.10px]"
              size="txtMontserratBold24"
            >
              Bandage
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between pr-0.5 py-0.5 w-[79%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-[12%]">
                <div className="flex flex-col items-center justify-end py-0.5 w-full">
                  <Text
                    className="text-center text-gray-600 text-sm tracking-[0.20px]"
                    size="txtMontserratBold14Gray600"
                  >
                    Home
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                  <Text
                    className="ml-1 mt-[3px] text-blue_gray-900 text-sm tracking-[0.20px]"
                    size="txtMontserratMedium14"
                  >
                    Shop
                  </Text>
                  <Img
                    className="h-[5px]"
                    src="images/img_vector_blue_gray_900.svg"
                    alt="vector"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[13%]">
                <div className="flex flex-col items-center justify-start py-0.5 w-full">
                  <Text
                    className="text-center text-gray-600 text-sm tracking-[0.20px]"
                    size="txtMontserratBold14Gray600"
                  >
                    About
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[10%]">
                <div className="flex flex-col items-center justify-end w-full">
                  <Text
                    className="mt-0.5 text-center text-gray-600 text-sm tracking-[0.20px]"
                    size="txtMontserratBold14Gray600"
                  >
                    Blog
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[17%]">
                <div className="flex flex-col items-center justify-end py-0.5 w-full">
                  <Text
                    className="text-center text-gray-600 text-sm tracking-[0.20px]"
                    size="txtMontserratBold14Gray600"
                  >
                    Contact
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[13%]">
                <div className="flex flex-col items-center justify-end w-full">
                  <Text
                    className="mt-[3px] text-center text-gray-600 text-sm tracking-[0.20px]"
                    size="txtMontserratBold14Gray600"
                  >
                    Pages
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start mr-0.5 w-auto">
              <div className="flex flex-col items-center justify-start w-[52%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-[5px] items-center justify-start p-[15px] rounded-[27px] w-auto">
                    <Img
                      className="h-3 w-3"
                      src="images/img_vector.svg"
                      alt="vector_One"
                    />
                    <Text
                      className="text-blue-500 text-center text-sm tracking-[0.20px] w-auto"
                      size="txtMontserratBold14Blue500"
                    >
                      Login / Register
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="rounded-[50%] w-[46px]"
                src="images/img_search.svg"
                alt="search"
              />
              <List
                className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[35%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[15px] rounded-[23px] w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_icnsettingsicnxs_blue_500.svg"
                        alt="icnsettingsicnx"
                      />
                      <Text
                        className="text-blue-500 text-center text-xs tracking-[0.20px] w-auto"
                        size="txtMontserratRegular12Blue500"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[15px] rounded-[23px] w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_icnsettingsicnxs_blue_500_16x16.svg"
                        alt="icnsettingsicnx"
                      />
                      <Text
                        className="text-blue-500 text-center text-xs tracking-[0.20px] w-auto"
                        size="txtMontserratRegular12Blue500"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
