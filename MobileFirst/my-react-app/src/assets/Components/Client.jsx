import { brand01, brand02, brand03, brand04, brand05, brand06 } from "../../assets/utils/images";

const Client = () => {
  
  return (
    <div className="client-section ">
      <div className="container">
        <div className="text-content md:max-w-[54rem] flex flex-col items-center gap-[0.575rem] lg:gap-[1.875rem]">
        
            <h2>Big Companies Are Here</h2>
         
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="row">
         
            <img className="faBrands1Icon" alt="" src={brand01} />
          
         
            <img className="faBrands2Icon" alt="" src={brand02} />
         
          
            <img className="faBrands3Icon md:max-w-auto" alt="" src={brand03} />
          
         
            <img className="faBrands4Icon" alt="" src={brand04} />
          
          
            <img className="faBrands4Icon" alt="" src={brand05} />
       
         
            <img className="faBrands4Icon" alt="" src={brand06} />
         
        </div>
      </div>
    </div>
  );
};

export default Client;
