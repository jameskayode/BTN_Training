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
    <div className="client-section  md:my-0 py-0">
      <div className="container">
        <div className="text-content md:max-w-[54rem] flex flex-col items-center gap-[0.575rem] lg:gap-[1.875rem]">
          {showNewH2 ? (
            <h4 className=" mt-[10.72rem]">Trusted By Over 4000 Big Companies</h4>
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
