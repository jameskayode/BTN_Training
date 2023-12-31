import React from "react";
import {
  brand01,
  brand02,
  brand03,
  brand04,
  brand05,
  brand06,
} from "../../assets/utils/images";

const Client = ({ showNewH2 }) => {
  const imageSources = [brand01, brand02, brand03, brand04, brand05, brand06];

  return (
    <div className=" pt-[3rem] pl-[9rem] w-[25.88rem] flex flex-col items-center justify-end gap-[1.44rem]  md:justify-center md:pl-[8rem] md:mx-[20rem] md:my-[3rem] md:mb-2 lg:mb-6">
      <div className="flex flex-col items-center">
        <div className=" md:max-w-[54rem] flex flex-col items-center gap-[0.575rem] lg:gap-[1.875rem]">
          {showNewH2 ? (
            <h4 className=" ">Trusted By Over 4000 Big Companies</h4>
          ) : (
            <h2>Big Companies Are Here</h2>
          )}
          {showNewH2 ? null : (
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          )}
        </div>
        <div className="row">
          {imageSources.map((src, index) => (
            <React.Fragment key={index}>
              <img className={`faBrands${index + 1}Icon`} alt="" src={src} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
