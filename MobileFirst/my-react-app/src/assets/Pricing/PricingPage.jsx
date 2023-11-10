import React from "react";
import MonthlyCard from "./MonthlyCard";
import TexttrueIconfalseRounded from "./TexttrueIconfalseRounded";
import { LiaToggleOffSolid } from "react-icons/lia";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PricingPage = () => {
  return (
    <div className="my-[5rem] ml-[10rem] bg-gray-100 w-[25.88rem] h-[159.44rem] text-center text-[2.5rem] text-text-color font-h6 md:w-[90rem] md:h-[72.63rem] md:text-left md:ml-[5rem] ">
      <div className=" w-[20.63rem] flex flex-col items-center justify-center py-[2.81rem] px-[0rem] box-border gap-[3rem] md: md:w-[65.63rem]  md:justify-start">
        <div className="w-[19.38rem] flex flex-col items-center justify-center ">
          <div className="w-[22.81rem] flex flex-col items-center justify-center gap-[0.63rem] px-[4.81rem] md:w-[39.06rem] md:justify-start ">
            <div className="relative tracking-[0.2px] leading-[3.13rem] text-center">
              Pricing
            </div>
            <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] text-second-text-color text-center">
              <span>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </span>
            </div>
          </div>
        </div>

        {/* switch side */}

        <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
          <div className="relative w-[11.63rem] h-[1.75rem]">
            <b className="absolute top-[0rem] left-[0rem] tracking-[0.1px] leading-[1.5rem]">
              Monthly
            </b>
            <LiaToggleOffSolid
              className="absolute top-[0.06rem] left-[5rem] rounded-2xl w-[2.81rem] h-[1.56rem]"
              style={{ fill: "#fff", stroke: "#23A6F0", strokeWidth: "1px" }}
            />
            <b className="absolute top-[0rem] left-[8.44rem] tracking-[0.1px] leading-[1.5rem]">
              Yearly
            </b>
          </div>

          <TexttrueIconfalseRounded
            h6="Save 25%"
            texttrueIconfalseRoundedBackgroundColor="#b2e3ff"
            texttrueIconfalseRoundedPadding="0.63rem 1.25rem"
            h6FontSize="0.88rem"
            h6LineHeight="1.5rem"
            h6Color="#23a6f0"
            borderRadius="2.31rem"
          />
        </div>

        <div className="flex flex-col items-end justify-start gap-[1.88rem] text-[0.88rem] md:flex-row">
          <MonthlyCard
            planType="FREE"
            cardText="Organize across all 
            apps by hand"
            carPricePriceValue="0"
            statusIconClass={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClass={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassSecondaryC={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassMute9Circl={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#BDBDBD",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassMute10={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#BDBDBD",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
          />

          {/* standard card */}
          <MonthlyCard
            planType="STANDARD"
            carPricePriceValue="9.99"
            cardText="Organize across all 
            apps by hand"
            statusIconClass={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClass={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassSecondaryC={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassMute9Circl={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#BDBDBD",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassMute10={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#BDBDBD",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            propWidth="20.56rem"
            propBackgroundColor="#252b42"
            propPadding="5rem 2.5rem"
            propWidth1="20.94rem"
            propColor="#fff"
          />

          <MonthlyCard
            planType="PREMIUM"
            cardText="Organize across all 
            apps by hand"
            carPricePriceValue="19.99"
            statusIconClass={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClass={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassSecondaryC={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#2DC071",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassMute9Circl={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#BDBDBD",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            circleIconClassMute10={
              <IoCheckmarkCircleOutline
                style={{
                  backgroundColor: "#BDBDBD",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            }
            propWidth="20.56rem"
            propBackgroundColor="#fff"
            propPadding="3.13rem 2.5rem"
            propWidth1="20.5rem"
            propColor="#252b42"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
