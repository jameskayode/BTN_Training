import React from 'react'; 

import { brand01, brand02, brand03, brand04, brand05, brand06 } from '../../assets/utils/images';

const Client = ({ showNewH2 }) => {
  const imageSources = [brand01, brand02, brand03, brand04, brand05, brand06];

  return (
    <div className="client-section">
      <div className="container">
        <div className="text-content md:max-w-[54rem] flex flex-col items-center gap-[0.575rem] lg:gap-[1.875rem]">
          <h2>Big Companies Are Here</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="row">
          {imageSources.map((src, index) => (
            <React.Fragment key={index}>
              <img className={`faBrands${index + 1}Icon`} alt="" src={src} />
              {index % 2 !== 0 && showNewH2 && <h2>Your New Heading</h2>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
