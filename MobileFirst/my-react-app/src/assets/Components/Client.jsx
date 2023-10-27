import { brand01, brand02, brand03, brand04, brand05, brand06 } from "../../assets/utils/images";

const Client = () => {
  
  return (
    <div className="client-section">
      <div className="container">
        <div className="text-content">
          <h2>Big Companies Are Here</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="row">
          <div className="colMd2">
            <img className="faBrands1Icon" alt="" src={brand01} />
          </div>
          <div className="colMd21">
            <img className="faBrands2Icon" alt="" src={brand02} />
          </div>
          <div className="colMd22">
            <img className="faBrands3Icon" alt="" src={brand03} />
          </div>
          <div className="colMd23">
            <img className="faBrands4Icon" alt="" src={brand04} />
          </div>
          <div className="colMd23">
            <img className="faBrands4Icon" alt="" src={brand05} />
          </div>
          <div className="colMd23">
            <img className="faBrands4Icon" alt="" src={brand06} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
