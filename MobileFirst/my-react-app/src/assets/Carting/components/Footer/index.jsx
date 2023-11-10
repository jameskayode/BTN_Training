import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-start pb-[3px] px-[3px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1050px] py-10 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[577.5px] items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-[236px]">
                  <div className="flex flex-col items-start justify-end pr-[11px] py-[11px]">
                    <Text
                      className="mt-[5px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[0.10px]"
                      size="txtMontserratBold24"
                    >
                      Bandage
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[236px]">
                  <div className="flex flex-row gap-5 items-center justify-center w-auto">
                    <div className="flex flex-col h-6 items-center justify-start w-6">
                      <Img
                        className="h-6 w-6"
                        src="images/img_antdesignfacebookfilled.svg"
                        alt="antdesignfacebo"
                      />
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_antdesigninstagramoutlined.svg"
                      alt="antdesigninstag"
                    />
                    <div className="flex flex-col items-center justify-start w-[22%]">
                      <Img
                        className="h-[19px]"
                        src="images/img_antdesigntwitteroutlined.svg"
                        alt="antdesigntwitte"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gray-300 h-px w-[74%]" />
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start pb-0.5 px-0.5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1050px] py-[50px] w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-[148px]">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[0.10px] w-auto"
                    size="txtMontserratBold16"
                  >
                    Company Info
                  </Text>
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        About Us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Carrier
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        We are hiring
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Blog
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-[152px]">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[0.10px] w-auto"
                    size="txtMontserratBold16"
                  >
                    Legal
                  </Text>
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        About Us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Carrier
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        We are hiring
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Blog
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-[148px]">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[0.10px] w-auto"
                    size="txtMontserratBold16"
                  >
                    Features
                  </Text>
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Business Marketing
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        User Analytic
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Live Chat
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Unlimited Support
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-[152px]">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[0.10px] w-auto"
                    size="txtMontserratBold16"
                  >
                    Resources
                  </Text>
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        IOS & Android
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Watch a Demo
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        Customers
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.20px]"
                        size="txtMontserratBold14Gray600"
                      >
                        API
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-[321px]">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[0.10px] w-auto"
                    size="txtMontserratBold16"
                  >
                    Get In Touch
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start pb-[5px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-gray-50_02 border border-gray-300 border-solid flex flex-row items-center justify-between pl-5 rounded-[5px] w-full">
                        <Text
                          className="text-gray-600 text-sm tracking-[0.20px]"
                          size="txtMontserratRegular14"
                        >
                          Your Email
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Button
                            className="border border-gray-300 border-solid cursor-pointer font-montserrat min-w-[117px] rounded-br-[5px] rounded-tr-[5px] text-center text-sm tracking-[0.20px]"
                            color="blue_500"
                            size="lg"
                            variant="fill"
                          >
                            Subscribe
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="ml-0.5 md:ml-[0] text-gray-600 text-xs tracking-[0.20px]"
                      size="txtMontserratRegular12Gray600"
                    >
                      Lore imp sum dolor Amit
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[195px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1050px] py-[25px] w-full">
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-[600px] md:w-full">
                  <Text
                    className="text-gray-600 text-sm tracking-[0.20px] w-auto"
                    size="txtMontserratBold14Gray600"
                  >
                    Made With Love By Finland All Right Reserved{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
