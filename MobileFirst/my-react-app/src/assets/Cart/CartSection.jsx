import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const Container = () => {
  const isTabletOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="flex flex-col  pb-5 ">
      {isTabletOrLaptop && (
        <div className="flex flex-col ml-[20rem] pt-5">
          <div className="w-96 h-3.5 flex  flex-row justify-between">
            <div className=" justify-center w-52 h-3.5 text-black font-['Poppins'] text-sm font-semibold leading-[normal] ">
              Item
            </div>

            <div className="Cartable">Price</div>
            <div className="Cartable">Qty </div>
            <div className="Cartable">Subtotal</div>
          </div>
        </div>
      )}

      <div className=" relative flex flex-col justify-between items-center content-center row-gap-2.5 pl-[1.0625rem] pr-[1.0625rem] py-5 px-4  mx-[3rem] w-[25rem] sm:flex-row-reverse sm:justify-between md:items-start md:flex-row-reverse sm:w-[100%]  md:ml-[10rem] md:gap:[10rem] ">
        <div className="container md:ml-[50rem] ">
          <div className="w-72 text-black font-['Montserrat'] text-sm font-semibold leading-[normal]">
            Summary
          </div>
          <div className="flex justify-between items-center w-80">
            <div className="text-black font-['Montserrat'] text-xs leading-[normal]">
              Estimate Shipping and Tax
            </div>
            {/* <svg
              width={16}
              height={15}
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9.11548L8 7.11548L10 9.11548"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg> */}
            <IoMdArrowDropup />
         {active && <div className="w-72 text-[#666] font-['Montserrat'] text-xs leading-[normal] ">
            Enter your destination to get a shipping estimate.
          </div>}
            
          </div>
          <div className="w-72 text-[#666] font-['Montserrat'] text-xs leading-[normal]">
            Enter your destination to get a shipping estimate.
          </div>
          <div className="w-72 text-black font-['Montserrat'] text-xs leading-[normal]">
            Apply Discount Code
          </div>

          <div className="flex flex-col justify-center w-80 h-9 text-black text-right font-['Montserrat'] text-xs font-semibold leading-[210%]">
            $13,047.00
          </div>
          <div className="left-[1rem] flex flex-col absolute justify-center w-72 h-9 top-[11rem] text-black font-['Poppins'] text-xs font-semibold leading-[210%]">
            Subtotal
          </div>
          <div className="flex flex-col flex-shrink-0 justify-center w-72 h-9 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">
            Shipping
          </div>
          <div className="flex flex-col flex-shrink-0 justify-center w-80 h-9 text-black text-right font-['Montserrat'] text-xs font-semibold leading-[210%]">
            $21.00
          </div>
          <div className="flex flex-col flex-shrink-0 justify-center w-72 h-10 text-[#a2a6b0] font-['Montserrat'] text-xs leading-[180%]">
            (Standard Rate - Price may vary depending on the item/destination.
            Shop Staff will contact you.)
          </div>
          <div className="flex flex-col justify-center w-80 h-10 text-black text-right font-['Montserrat'] text-xs font-semibold leading-[210%]">
            $1.91
          </div>
          <div className="left-[1rem] flex flex-col absolute justify-center w-72 h-9 top-[18rem] text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">
            Tax
          </div>
          <div className=" pt-[4rem] left-[1rem] bottom-[15rem] flex flex-col  justify-center w-72 h-9 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">
            GST (10%)
          </div>
          <div className="flex flex-col justify-center w-80 h-9 text-black text-right font-['Montserrat'] text-xs font-semibold leading-[210%]">
            $13,068.00
          </div>
          <div className="left-[1rem] bottom-[12rem] flex flex-col  justify-center w-72 h-9 text-black font-['Montserrat'] text-xs font-semibold leading-[210%]">
            Order Total
          </div>
          <div className="flex flex-col justify-center w-80 h-9 text-black text-right font-['Poppins'] text-xs font-semibold leading-[210%]">
            $1.91
          </div>
          <div className="rounded-[3.125rem] py-[0.5rem] px-[3.8rem] w-[19.25rem] h-[2.3rem] flex flex-col items-center justify-start   text-center text-[0.81rem]  border-solid border-[#0156FF] bg-[#0156FF] gap-[0.625rem] mb-[0.63rem]">
            <div className="relative font-semibold flex items-center justify-center w-[16.13rem] h-[1.38rem] text-[#FFF]">
              Proceed to Checkout
            </div>
          </div>

          <div className="rounded-[3.125rem] px-[2.5rem] box-border w-[19.25rem] flex  items-center  py-[0.5rem]  text-center text-[0.81rem] text-color-10   border[none] bg-[#FFB800] mb-[0.63rem]">
            <div className=" font-semibold flex  w-[16.13rem] h-[1.38rem] ">
              Proceed to Checkout
            </div>

            <img src="/src/assets/Cart/Group 114.png" alt="" />
          </div>
          <div className="rounded-[5rem] box-border w-[19.25rem] flex flex-col items-center justify-start py-[0.5rem] px-[3.81rem] z-[12] text-center text-[0.81rem] text-color-10 border-[2px] border-solid border-[#666]">
            <div className="relative font-semibold flex items-center justify-center w-[16.13rem] h-[1.38rem] shrink-0">
              Check Out with Multiple Addresses
            </div>
          </div>
          <div className="relative w-[13.37rem] h-[1.5rem] z-[13] text-[0.63rem]">
            <img
              className="absolute top-[0.09rem] left-[0rem] w-[3.81rem] h-[1.31rem] overflow-hidden"
              alt=""
              src="/src/assets/Cart/primary 1.png"
            />
            <img
              className="absolute top-[0.21rem] left-[4.19rem] w-[0.09rem] h-[1.18rem]"
              alt=""
              src="/src/assets/Cart/Vector 10.png"
            />
            <div className="absolute top-[0rem] left-[4.81rem] leading-[120.5%] font-light flex items-center w-[8.56rem]">
              <span className="[line-break:anywhere] w-full">
                {`own it now, up to 6 months interest free `}
                <span className="[text-decoration:underline]">learn more</span>
              </span>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col items-center justify-start w-[21.56rem] md:h-[10.31rem]">
         
        <div className="flex flex-col items-center justify-start gap-[1.88rem] pt-[5rem] md:w-[46.4375rem] md:h-[30.34rem]">
          <div className="relative w-[21.56rem] h-[10.31rem]">
            <img
              className="absolute top-[10.28rem] left-[0.06rem] w-[21.38rem] h-[0.06rem]"
              alt=""
              src="/vector-19.svg"
            />
            <img
              className="absolute top-[0rem] left-[0.06rem] w-[4.25rem] h-[4.25rem] object-cover"
              alt=""
              src="/src/assets/Cart/image 51.png"
            />
            <div className="absolute top-[0rem] left-[5.44rem] text-[0.63rem] font-h6 flex items-center w-[16.13rem] h-[3.19rem]">
              MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB
              RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
              Warranty
            </div>
            <div className="absolute top-[5.06rem] left-[0rem] w-[3.81rem] h-[2.63rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold flex items-center w-[2.13rem]">
                Price
              </div>
              <div className="absolute top-[1.5rem] left-[0rem] text-[0.75rem] font-semibold text-center">
                $4,349.00
              </div>
            </div>
            <div className="absolute top-[5.06rem] left-[12.94rem] w-[4rem] h-[2.63rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold flex items-center w-[4rem]">
                Subtotal
              </div>
              <div className="absolute top-[1.5rem] left-[0rem] text-[0.75rem] font-semibold text-center">
                $13,047.00
              </div>
            </div>
            <div className="absolute top-[5.06rem] left-[6.63rem] w-[3.5rem] h-[4.09rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold flex items-center w-[1.63rem]">
                Qty
              </div>
              <div className="absolute top-[1.44rem] left-[0rem] w-[3.5rem] h-[2.65rem] text-center">
                <div className="absolute top-[0rem] left-[0rem] w-[3.5rem] h-[2.65rem]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-md bg-color-1 w-[3.5rem] h-[2.65rem]" />
                  <div className="absolute top-[0rem] left-[0rem] leading-[210%] font-semibold flex items-center justify-center w-[2.38rem] h-[2.65rem]">
                    1
                  </div>
                </div>
                <IoMdArrowDropup className="absolute top-[0.27rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden" />

                <IoMdArrowDropdown className="absolute top-[1.33rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden" />
              </div>
            </div>
            <img
              className="absolute top-[5.06rem] left-[19.75rem] w-[1.686rem] h-[1.686rem]"
              src="/src/assets/Cart/Group 108.png"
            />

            <img
              className="absolute top-[7.06rem] left-[19.75rem] w-[1.686rem] h-[1.686rem]"
              src="/src/assets/Cart/eva_edit-2-outline.png"
            />

            {/* <img
                  className="absolute top-[5.06rem] left-[19.75rem] w-[1.69rem] h-[3.75rem]"
                  alt=""
                  src=""
                /> */}
          </div>
          <div className="relative w-[21.56rem] h-[10.31rem]">
            <img
              className="absolute top-[10.28rem] left-[0.06rem] w-[21.38rem] h-[0.06rem]"
              alt=""
              src="/src/assets/Cart/Group 108.png"
            />

            <img
              className="absolute top-[0rem] left-[0.06rem] w-[4.25rem] h-[4.25rem] object-cover"
              alt=""
              src="/src/assets/Cart/image 51.png"
            />
            <div className="absolute top-[0rem] left-[5.44rem] text-[0.63rem] font-h6 flex items-center w-[16.13rem] h-[3.19rem]">
              MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB
              RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
              Warranty
            </div>
            <div className="absolute top-[5.06rem] left-[0rem] w-[3.81rem] h-[2.63rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold flex items-center w-[2.13rem]">
                Price
              </div>
              <div className="absolute top-[1.5rem] left-[0rem] text-[0.75rem] font-semibold text-center">
                $4,349.00
              </div>
            </div>
            <div className="absolute top-[5.06rem] left-[12.94rem] w-[4rem] h-[2.63rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold flex items-center w-[4rem]">
                Subtotal
              </div>
              <div className="absolute top-[1.5rem] left-[0rem] text-[0.75rem] font-semibold text-center">
                $13,047.00
              </div>
            </div>
            <div className="absolute top-[5.06rem] left-[6.63rem] w-[3.5rem] h-[4.09rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold flex items-center w-[1.63rem]">
                Qty
              </div>
              <div className="absolute top-[1.44rem] left-[0rem] w-[3.5rem] h-[2.65rem] text-center">
                <div className="absolute top-[0rem] left-[0rem] w-[3.5rem] h-[2.65rem]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-md bg-color-1 w-[3.5rem] h-[2.65rem]" />
                  <div className="absolute top-[0rem] left-[0rem] leading-[210%] font-semibold flex items-center justify-center w-[2.38rem] h-[2.65rem]">
                    1
                  </div>
                </div>
                <IoMdArrowDropup className="absolute top-[0.27rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden" />

                <IoMdArrowDropdown className="absolute top-[1.33rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden" />
              </div>
            </div>

            <img
              className="absolute top-[5.06rem] left-[19.75rem] w-[1.686rem] h-[1.686rem]"
              src="/src/assets/Cart/Group 108.png"
            />

            <img
              className="absolute top-[7.06rem] left-[19.75rem] w-[1.686rem] h-[1.686rem]"
              src="/src/assets/Cart/eva_edit-2-outline.png"
            />

            {/* <img
                  className="absolute top-[5.06rem] left-[19.75rem] w-[1.69rem] h-[3.75rem]"
                  alt=""
                  src=""
                /> */}
          </div>

          <div className="relative w-[21.56rem]">
            <img
              className="absolute top-[10.28rem] left-[0.06rem] w-[21.38rem] h-[0.06rem]"
              alt=""
              src="/src/assets/Cart/Group 108.png"
            />
          </div>

          {/* <div className="flex flex-col items-start justify-start sm:flex-row  ">
            <button className=" hidden cursor-pointer [border:none] py-[0.63rem] px-[1.25rem] bg-primary-color rounded-8xs overflow-hidden md:flex flex-col items-center justify-start sm:py-[2rem] sm:inline-flex  sm:px-[5rem] gap-[2.5rem]">
              <b className="relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-h6 text-light-text-color text-center">
              Continue Shoping              </b>
            </button>
           
          </div> */}
          <div className="flex gap-[2rem]">
            <div className=" hidden sm:inline-flex flex-col items-center gap-2.5 py-2 px-5 rounded-[0.3125rem]  border-[#23a6f0] border-solid border-[2px] h6 text-[#23a6f0] text-center font-['Montserrat'] text-sm font-bold leading-6 " >
              Continue Shoping
            </div>
            <div className="hidden sm:inline-flex items-start gap-2.5">
              <div className="flex flex-col items-center gap-2.5 py-2 px-5 rounded-[0.3125rem] bg-[#23a6f0] h6-1 text-white text-center font-['Montserrat'] text-sm font-bold leading-6">
                Clear Shopping Cart
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-2.5">
              <div className="flex flex-col items-center gap-2.5 py-2 px-5 rounded-[0.3125rem] bg-[#23a6f0] h6-2 text-white text-center font-['Montserrat'] text-sm font-bold leading-6">
                Update Shopping cart
              </div>
            </div>
          </div>
        </div>
        </div>


      </div>
     
    </div>
  );
};

export default Container;
