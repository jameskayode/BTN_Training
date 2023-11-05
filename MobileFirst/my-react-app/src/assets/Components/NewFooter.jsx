import { divData } from "../../assets/utils/mockData";

const NewFooter = () => {
  return (
    <div className="bg-white p-4 md:p-12 xl:p-0 md:mb-5">
      <div className="max-w-screen-md mx-auto md:w-screen-xl md:flex md:mr-29">

        <div className="flex flex-col md:flex-row items-start gap-4 lg:w-full">
          {/* Company Info */}
          <div className="max-w-[9.25rem] w-full md:w-1/4">
            <h5 className="text-[#252B42] text-base font-bold mb-4">
              {divData.companyInfo.title}
            </h5>
            <div className="flex flex-col text-[0.875rem] text-[#737373]">
              {divData.companyInfo.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Legal Info */}
          <div className="max-w-[9.25rem] w-full md:w-1/4">
            <h5 className="text-[#252B42] text-base font-bold mb-4">
              {divData.legal.title}
            </h5>
            <div className="flex flex-col text-[0.875rem] text-[#737373]">
              {divData.legal.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="max-w-[9.25rem] w-full md:w-1/4">
            <h5 className="text-[#252B42] text-base font-bold mb-4">
              {divData.features.title}
            </h5>
            <div className="flex flex-col text-[0.875rem] text-[#737373]">
              {divData.features.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="max-w-[9.25rem] w-full md:w-1/4">
            <h5 className="text-[#252B42] text-base font-bold mb-4">
              {divData.resources.title}
            </h5>
            <div className="flex flex-col text-[0.875rem] text-[#737373]">
              {divData.resources.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <h5 className="text-[#252B42] text-base font-bold mb-1 font-Montserrat">
            {divData.getInTouch.title}
          </h5>
          <div className="max-w-full max-h-[5.625rem] flex flex-row items-center py-2 rounded-md border">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="text-[#737373] font-normal text-[0.875rem] leading-7 h-[3.75rem] w-2/3"
            />
            <button className="flex justify-center items-center bg-[#23A6F0] rounded-md w-1/3 h-[3.75rem] text-white text-[0.875rem]">
              {divData.getInTouch.buttonText}
            </button>
          </div>
          <span className="text-[#737373] text-[0.875rem] mt-2">
            {divData.getInTouch.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
