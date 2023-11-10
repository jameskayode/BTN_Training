import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const DesktopcartOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-gray-50 flex flex-col items-center justify-start max-w-[1440px] py-6 w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1264px] mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col items-start justify-start max-w-[725px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[0.10px] w-auto"
                size="txtMontserratBold24"
              >
                Shopping Cart
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col items-end justify-start w-[509px] sm:w-full">
              <div className="flex flex-row gap-[15px] items-center justify-start py-2.5 w-auto">
                <Text
                  className="text-blue_gray-900 text-center text-sm tracking-[0.20px] w-auto"
                  size="txtMontserratBold14"
                >
                  Home
                </Text>
                <Img
                  className="h-4 w-[9px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
                <Text
                  className="text-center text-gray-400 text-sm tracking-[0.20px] w-auto"
                  size="txtMontserratBold14Gray400"
                >
                  Cart
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[90px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1260px] mx-auto pb-12 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1258px] w-full">
              <div className="flex flex-1 flex-col gap-[35px] items-center justify-start max-w-[743px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-[9px] w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Item
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[376px] text-black-900 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Price
                  </Text>
                  <Text
                    className="ml-16 sm:ml-[0] text-black-900 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Qty{" "}
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[55px] text-black-900 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Subtotal
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-[35px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="border-b border-gray-400 border-solid flex flex-1 md:flex-col flex-row md:gap-[53px] h-[99px] md:h-auto items-center justify-between max-w-[736px] w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[29px] items-center justify-start w-auto sm:w-full">
                      <Img
                        className="h-24 md:h-auto object-cover w-24"
                        src="images/img_image51.png"
                        alt="imageFiftyOne"
                      />
                      <Text
                        className="max-w-[271px] md:max-w-full text-black-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070
                        SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming
                        Keyboard and Mouse 3 Years Warranty
                      </Text>
                    </div>
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      $4,349.00
                    </Text>
                    <div className="flex flex-col items-center justify-start">
                      <div className="bg-gray-50_01 flex flex-col items-end justify-start p-[9px] rounded-md w-full">
                        <div className="flex flex-row gap-4 items-start justify-between mr-[3px] w-[72%] md:w-full">
                          <Text
                            className="mt-1 text-black-900 text-center text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            1
                          </Text>
                          <div className="flex flex-col items-center justify-start">
                            <Img
                              className="h-4 w-4"
                              src="images/img_frame98.svg"
                              alt="frameNinetyEight"
                            />
                            <Img
                              className="h-4 w-4"
                              src="images/img_frame97.svg"
                              alt="frameNinetySeven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      $13,047.00
                    </Text>
                    <Img
                      className="h-[60px] w-[27px]"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                  </div>
                  <div className="border-b border-gray-400 border-solid flex flex-1 md:flex-col flex-row md:gap-[53px] h-[99px] md:h-auto items-center justify-between max-w-[736px] w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[29px] items-center justify-start w-auto sm:w-full">
                      <Img
                        className="h-24 md:h-auto object-cover w-24"
                        src="images/img_image53.png"
                        alt="imageFiftyThree"
                      />
                      <Text
                        className="max-w-[271px] md:max-w-full text-black-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070
                        SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming
                        Keyboard and Mouse 3 Years Warranty
                      </Text>
                    </div>
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      $4,349.00
                    </Text>
                    <div className="flex flex-col items-center justify-start">
                      <div className="bg-gray-50_01 flex flex-col items-end justify-start p-[9px] rounded-md w-full">
                        <div className="flex flex-row gap-4 items-start justify-between mr-[3px] w-[72%] md:w-full">
                          <Text
                            className="mt-1 text-black-900 text-center text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            1
                          </Text>
                          <div className="flex flex-col items-center justify-start">
                            <Img
                              className="h-4 w-4"
                              src="images/img_frame98.svg"
                              alt="frameNinetyEight"
                            />
                            <Img
                              className="h-4 w-4"
                              src="images/img_frame97.svg"
                              alt="frameNinetySeven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      $13,047.00
                    </Text>
                    <Img
                      className="h-[60px] w-[27px]"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                  </div>
                </List>
                <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-center justify-start w-[93%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold min-w-[176px] text-center text-sm tracking-[0.20px]"
                    shape="round"
                    color="blue_500"
                    size="sm"
                    variant="outline"
                  >
                    Continue Shoping
                  </Button>
                  <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] w-auto">
                    <Button
                      className="cursor-pointer font-bold min-w-[192px] text-center text-sm tracking-[0.20px]"
                      shape="round"
                      color="blue_500"
                      size="sm"
                      variant="fill"
                    >
                      Clear Shopping Cart
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[100px] w-auto">
                    <Button
                      className="cursor-pointer font-bold min-w-[206px] text-center text-sm tracking-[0.20px]"
                      shape="round"
                      color="blue_500"
                      size="sm"
                      variant="fill"
                    >
                      Update Shopping cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col items-start justify-start w-[424px] sm:w-full">
                <div className="bg-gray-50_01 flex flex-col items-center justify-start px-2.5 py-[18px] w-[423px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-[96%]">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Summary
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="md:h-10 h-[66px] relative w-3/4">
                        <Text
                          className="absolute left-[0] text-blue_gray-900 text-lg top-[0] w-auto"
                          size="txtPoppinsRegular18"
                        >
                          Estimate Shipping and Tax
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-700 text-sm w-full"
                          size="txtPoppinsRegular14Gray700"
                        >
                          Enter your destination to get a shipping estimate.
                        </Text>
                      </div>
                      <Img
                        className="common-pointer h-3.5 mt-[3px] w-4"
                        src="images/img_frame97_blue_gray_900.svg"
                        alt="frameNinetySeven"
                        onClick={() => navigate("")}
                      />
                    </div>
                    <div className="flex relative w-full">
                      <Text
                        className="my-auto text-blue_gray-900 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Apply Discount Code
                      </Text>
                      <Img
                        className="common-pointer h-3.5 ml-[undefinedpx] mt-1 z-[1]"
                        src="images/img_frame97_blue_gray_900.svg"
                        alt="frameNinetyEight"
                        onClick={() => navigate("")}
                      />
                      <Line className="bg-blue_gray-100 h-px ml-[-188.35px] mr-auto mt-auto w-full z-[1]" />
                    </div>
                    <Text
                      className="mt-[7px] text-[13px] text-blue_gray-900 w-14"
                      size="txtPoppinsSemiBold13"
                    >
                      Subtotal
                    </Text>
                    <div className="flex flex-row gap-[17px] items-center justify-between mt-[18px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[13px] text-blue_gray-900 w-[58px]"
                          size="txtPoppinsSemiBold13"
                        >
                          Shipping{" "}
                        </Text>
                        <Text
                          className="leading-[180.00%] mt-[45px] text-[10px] text-blue_gray-300 w-full"
                          size="txtPoppinsRegular10"
                        >
                          (Standard Rate - Price may vary depending on the
                          item/destination. TECS Staff will contact you.)
                        </Text>
                        <Text
                          className="mt-[9px] text-[13px] text-blue_gray-900 w-6"
                          size="txtPoppinsSemiBold13"
                        >
                          Tax
                        </Text>
                        <Text
                          className="mt-[55px] text-[13px] text-blue_gray-900 w-16"
                          size="txtPoppinsSemiBold13"
                        >
                          GST (10%)
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-start w-[18%]">
                        <Text
                          className="text-[13px] text-blue_gray-900 text-right w-[68px]"
                          size="txtPoppinsSemiBold13"
                        >
                          $13,047.00
                        </Text>
                        <Text
                          className="mt-[55px] text-[13px] text-blue_gray-900 text-right w-[41px]"
                          size="txtPoppinsSemiBold13"
                        >
                          $21.00
                        </Text>
                        <div className="flex flex-col gap-14 items-center justify-start mt-[95px]">
                          <Text
                            className="text-[13px] text-blue_gray-900 text-right w-[29px]"
                            size="txtPoppinsSemiBold13"
                          >
                            $1.91
                          </Text>
                          <Text
                            className="text-[13px] text-blue_gray-900 text-right w-[29px]"
                            size="txtPoppinsSemiBold13"
                          >
                            $1.91
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-[17px] text-[13px] text-blue_gray-900 w-[73px]"
                      size="txtPoppinsSemiBold13"
                    >
                      Order Total
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[289px] mt-[13px] text-blue_gray-900 text-lg text-right w-24"
                      size="txtPoppinsSemiBold18"
                    >
                      $13,068.00
                    </Text>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[386px] sm:min-w-full mt-1 rounded-[25px] text-center text-sm"
                      color="blue_A700"
                      size="sm"
                      variant="fill"
                    >
                      Proceed to Checkout
                    </Button>
                    <div className="bg-amber-600 flex flex-row gap-[15px] items-center justify-center p-3.5 rounded-[25px] w-full">
                      <Text
                        className="ml-[68px] text-indigo-900 text-right text-sm"
                        size="txtPoppinsSemiBold14Indigo900"
                      >
                        Check out with
                      </Text>
                      <Img
                        className="h-[18px] mr-[95px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera"
                      />
                    </div>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[386px] sm:min-w-full rounded-[25px] text-center text-sm"
                      color="blue_gray_300"
                      size="sm"
                      variant="outline"
                    >
                      Check Out with Multiple Addresses
                    </Button>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                      <Img
                        className="h-[21px]"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                      <Text
                        className="mt-0.5 text-indigo-900_01 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        <span className="text-indigo-900_01 font-poppins text-left font-semibold">
                          own
                        </span>
                        <span className="text-indigo-900_01 font-poppins text-left font-normal">
                          {" "}
                          it now, up to 6 months interest free{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-indigo-900_01 font-poppins text-left text-[10px] font-normal underline"
                        >
                          learn more
                        </a>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex font-montserrat items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DesktopcartOnePage;
