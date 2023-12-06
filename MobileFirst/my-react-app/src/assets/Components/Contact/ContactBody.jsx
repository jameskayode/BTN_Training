import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { contactimg } from "../../utils/images";

const ContactBody = () => {
  return (
    <div className="mt-[5rem] pl-[12.5rem] flex w-[418px] h-[590px] flex-col justify-center items-center gap-10">
      <h5 className="text-[color:var(--text-color,#252B42)] text-base not-italic font-bold leading-6 tracking-[0.1px]">
        CONTACT US
      </h5>
      <h1 className="w-[331px] text-[color:var(--text-color,#252B42)] text-center text-[40px] not-italic font-bold leading-[50px] tracking-[0.2px]">
        Get in touch today!
      </h1>
      <p className="text-[color:var(--second-text-color,#737373)] text-center text-xl not-italic font-normal leading-[30px] tracking-[0.2px]">
        We know how large objects will act, but things on a small scale just do
        not act that way.
      </p>
      <div className="flex flex-col justify-center items-center gap-5 w-[232px] h-[32px]">
        <h2 className="flex text-[#252B42] text-center text-2xl not-italic font-bold leading-8 tracking-[0.1px]">
          Phone: <a href="tel:+451215215" className="text-[#252B42] text-center text-2xl not-italic font-bold leading-8 tracking-[0.1px]">+451 215 215</a>
        </h2>
        <h2 className="flex text-[color:var(--text-color,#252B42)] text-center text-2xl not-italic font-bold leading-8 tracking-[0.1px]">
          Fax: +451 215 215
        </h2>

      </div>
      <div className="flex items-start gap-[34px] p-2.5">
        <FaTwitter className="w-[30px] h-[24.492px] "/>
        <FaFacebookSquare className="w-[30px] h-[30px]"/>
        <FaInstagram className="w-[30px] h-[30px]"/>
        <FaLinkedin className="w-[30px] h-[29.883px]"/>
      </div>
     {/* <div className="w-[387px] h-[440px] relative">
         <div className="bg-[#FFE9EA] w-[295.646px] h-[295.646px] shrink-0 rounded-[295.646px] absolute top-0 left-0 z-[-1]">
         </div>
         <div className="w-[47.269px] h-[47.269px] shrink-0 fill-[#FFE9EA]"></div>
         <img src="/src/assets/images/contact1.png" alt="" className="w-[375.725px] h-[439.193px] shrink-0 relative"/>
         <div className="w-[18.478px] h-[18.478px] shrink-0 fill-[#FFE9EA]"></div>
         <div className="w-[9.024px] h-[9.024px] shrink-0 fill-[#977DF4]"></div>
         <div className="w-[9.024px] h-[9.024px] shrink-0 fill-[#977DF4]"></div>
     </div> */}
     <img src={contactimg} alt="" />
    </div>

    
  );
};

export default ContactBody;
