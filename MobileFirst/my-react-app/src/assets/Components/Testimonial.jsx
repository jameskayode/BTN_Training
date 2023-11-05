const Testimonial = () => {
  return (
    <div className="flex w-[414px] flex-col items-center pt-[60px] pb-[72px] px-0 bg-[#2A7CC7] text-white md:relative md:w-[90rem] md:h-[39.75rem] md:text-[0.88rem] lg:w-full">
      <div className=" absolute w-full top-[0rem] right-[0rem] bottom-[-0.06rem] left-[0rem] overflow-hidden">
      <img
        className="absolute h-[40rem] w-[36.875rem] top-[0rem] right-[0rem] bottom-[-0.19rem] left-[53.13rem] max-w-full overflow-hidden max-h-full object-cover lg:left-[70rem]"
        src="../../../src/assets/images/gal.png" alt="" 
      />
      </div>
      
    <div className=" flex w-[414px] flex-col items-center gap-9 px-0 py-[30px] rounded-sm md:py-[7rem] md:inline-flex  md:justify-between md:px-0 md:mr-[40.19rem] md:items-center">
      <div className="flex w-[272px] flex-col items-center gap-6 md:w-[27.38rem] md:justify-between ">
        <h5 className="text-[1rem] tracking-[0.1px] leading-[1.5rem]">
          WORK WITH US
        </h5>
        <b className="text-[2.5rem] tracking-[0.2px] leading-[3.13rem] w-[17.13rem] text-center">
          Now Let’s grow Yours
        </b>
        <div className="tracking-[0.0125rem] leading-[1.25rem] ">
          <span className="text-white text-[0.875rem] gap-[1rem] md:ml-">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
          </span>
        </div>
        
        <div className="rounded-[0.3125rem] flex flex-col items-center justify-start py-[0.94rem] px-[2.5rem] text-light-gray-1 border-[1px] border-solid border-[#FAFAFA]">
          <button className="relative tracking-[0.2px] leading-[1.38rem] bg-transparent border-none text-whitesmoke-200">
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Testimonial;
