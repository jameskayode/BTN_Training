import { useCallback } from "react";

const Container = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "mobile-cart-2" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "mobile-cart-2" to the project
  }, []);

  return (
    <div className="self-stretch bg-light-gray-1 overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[2.19rem] text-left text-[0.69rem] text-color-7">
        <div className="flex flex-col items-start justify-start py-[3rem] px-[0rem]">
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[1.88rem]">
            <div className="self-stretch relative h-[39.31rem] overflow-hidden shrink-0">
              <div className="absolute top-[-0.06rem] left-[0.13rem] bg-color-1 w-[22.19rem] overflow-hidden flex flex-row flex-wrap items-center justify-between py-[1.25rem] px-[1.06rem] box-border">
                <div className="relative text-[0.88rem] font-semibold flex items-center w-[17.94rem] shrink-0 z-[0]">
                  Summary
                </div>
                <div
                  className="w-[19.25rem] flex flex-row items-center justify-between cursor-pointer z-[1] text-[0.75rem]"
                  onClick={onFrameContainerClick}
                >
                  <div className="relative">Estimate Shipping and Tax</div>
                  <img
                    className="relative w-[1rem] h-[0.92rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-98.svg"
                  />
                </div>
                <div className="relative text-[0.75rem] text-color-10 flex items-center w-[17.94rem] shrink-0 z-[2]">
                  Enter your destination to get a shipping estimate.
                </div>
                <div
                  className="relative w-[19.25rem] h-[0.94rem] cursor-pointer z-[3] text-[0.75rem]"
                  onClick={onGroupContainerClick}
                >
                  <div className="absolute top-[0rem] left-[0rem] flex items-center w-[18.06rem]">
                    Apply Discount Code
                  </div>
                  <img
                    className="absolute top-[0.01rem] left-[18.24rem] w-[1.01rem] h-[0.92rem] overflow-hidden"
                    alt=""
                    src="/frame-981.svg"
                  />
                </div>
                <img
                  className="relative w-[19.19rem] h-[0.06rem] z-[4]"
                  alt=""
                  src="/vector-18.svg"
                />
                <div className="relative leading-[210%] font-semibold text-right flex items-center w-[19.25rem] h-[2.38rem] shrink-0 z-[5]">
                  $13,047.00
                </div>
                <div className="relative w-[19.25rem] h-[4.81rem] z-[6]">
                  <div className="absolute top-[0rem] left-[0rem] leading-[210%] font-semibold flex items-center w-[18.06rem] h-[2.38rem]">{`Shipping `}</div>
                  <div className="absolute top-[0rem] left-[0rem] leading-[210%] font-semibold text-right flex items-center w-[19.25rem] h-[2.38rem]">
                    $21.00
                  </div>
                  <div className="absolute top-[2.38rem] left-[0rem] text-[0.63rem] leading-[180%] text-color-5 flex items-center w-[18.06rem] h-[2.44rem]">
                    (Standard Rate - Price may vary depending on the
                    item/destination. Shop Staff will contact you.)
                  </div>
                </div>
                <div className="relative leading-[210%] font-semibold text-right flex items-center w-[19.25rem] h-[2.56rem] shrink-0 z-[7]">
                  $1.91
                </div>
                <div className="relative leading-[210%] font-semibold text-right flex items-center w-[19.25rem] h-[2.38rem] shrink-0 z-[8]">
                  $13,068.00
                </div>
                <div className="relative leading-[210%] font-semibold font-poppins text-right flex items-center w-[19.25rem] h-[2.38rem] shrink-0 z-[9]">
                  $1.91
                </div>
                <div className="rounded-31xl bg-color-3 w-[19.25rem] flex flex-col items-center justify-start py-[0.5rem] px-[3.81rem] box-border z-[10] text-center text-[0.81rem] text-light-text-color">
                  <div className="relative font-semibold flex items-center justify-center w-[13rem] h-[1.38rem] shrink-0">
                    Proceed to Checkout
                  </div>
                </div>
                <div className="rounded-31xl bg-orange w-[19.25rem] flex flex-col items-center justify-start py-[0.5rem] px-[3.81rem] box-border z-[11] text-center text-[0.81rem] text-darkslateblue">
                  <div className="relative w-[14.82rem] h-[1.13rem]">
                    <div className="absolute top-[0.06rem] left-[0rem] font-semibold">
                      Proceed to Checkout
                    </div>
                    <img
                      className="absolute top-[0rem] left-[10.32rem] w-[4.5rem] h-[1.13rem]"
                      alt=""
                      src="/group-114.svg"
                    />
                  </div>
                </div>
                <div className="rounded-31xl box-border w-[19.25rem] flex flex-col items-center justify-start py-[0.5rem] px-[3.81rem] z-[12] text-center text-[0.81rem] text-color-10 border-[2px] border-solid border-color-10">
                  <div className="relative font-semibold flex items-center justify-center w-[16.13rem] h-[1.38rem] shrink-0">
                    Check Out with Multiple Addresses
                  </div>
                </div>
                <div className="relative w-[13.37rem] h-[1.5rem] z-[13] text-[0.63rem]">
                  <img
                    className="absolute top-[0.09rem] left-[0rem] w-[3.81rem] h-[1.31rem] overflow-hidden"
                    alt=""
                    src="/primary-1.svg"
                  />
                  <img
                    className="absolute top-[0.21rem] left-[4.19rem] w-[0.09rem] h-[1.18rem]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className="absolute top-[0rem] left-[4.81rem] leading-[120.5%] font-light flex items-center w-[8.56rem]">
                    <span className="[line-break:anywhere] w-full">
                      {`own it now, up to 6 months interest free `}
                      <span className="[text-decoration:underline]">
                        learn more
                      </span>
                    </span>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[11.13rem] left-[1.06rem] leading-[210%] font-semibold font-poppins flex items-center w-[18.06rem] h-[2.38rem] shrink-0 z-[14]">
                  Subtotal
                </div>
                <div className="absolute my-0 mx-[!important] top-[17.81rem] left-[1.06rem] leading-[210%] font-semibold flex items-center w-[18.06rem] h-[2.38rem] shrink-0 z-[15]">
                  Tax
                </div>
                <div className="absolute my-0 mx-[!important] top-[20.5rem] left-[1.06rem] leading-[210%] font-semibold flex items-center w-[18.06rem] h-[2.38rem] shrink-0 z-[16]">
                  GST (10%)
                </div>
                <div className="absolute my-0 mx-[!important] top-[23.63rem] left-[1.06rem] leading-[210%] font-semibold flex items-center w-[18.06rem] h-[2.38rem] shrink-0 z-[17]">
                  Order Total
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[1.88rem] font-poppins">
              <div className="relative w-[21.56rem] h-[10.31rem]">
                <img
                  className="absolute top-[10.28rem] left-[0.06rem] w-[21.38rem] h-[0.06rem]"
                  alt=""
                  src="/vector-19.svg"
                />
                <img
                  className="absolute top-[0rem] left-[0.06rem] w-[4.25rem] h-[4.25rem] object-cover"
                  alt=""
                  src="/image-51@2x.png"
                />
                <div className="absolute top-[0rem] left-[5.44rem] text-[0.63rem] font-h6 flex items-center w-[16.13rem] h-[3.19rem]">
                  MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER,
                  32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse
                  3 Years Warranty
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
                    Qty{" "}
                  </div>
                  <div className="absolute top-[1.44rem] left-[0rem] w-[3.5rem] h-[2.65rem] text-center">
                    <div className="absolute top-[0rem] left-[0rem] w-[3.5rem] h-[2.65rem]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-md bg-color-1 w-[3.5rem] h-[2.65rem]" />
                      <div className="absolute top-[0rem] left-[0rem] leading-[210%] font-semibold flex items-center justify-center w-[2.38rem] h-[2.65rem]">
                        1
                      </div>
                    </div>
                    <img
                      className="absolute top-[1.33rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden"
                      alt=""
                      src="/frame-97.svg"
                    />
                    <img
                      className="absolute top-[0.27rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden"
                      alt=""
                      src="/frame-982.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute top-[5.06rem] left-[19.75rem] w-[1.69rem] h-[3.75rem]"
                  alt=""
                  src="/group-1973.svg"
                />
              </div>
              <div className="relative w-[21.56rem] h-[10.31rem]">
                <img
                  className="absolute top-[10.28rem] left-[0.06rem] w-[21.38rem] h-[0.06rem]"
                  alt=""
                  src="/vector-191.svg"
                />
                <img
                  className="absolute top-[0rem] left-[0.06rem] w-[4.25rem] h-[4.25rem] object-cover"
                  alt=""
                  src="/image-511@2x.png"
                />
                <div className="absolute top-[0rem] left-[5.44rem] text-[0.63rem] flex items-center w-[16.13rem] h-[3.19rem]">
                  MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER,
                  32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse
                  3 Years Warranty
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
                    Qty{" "}
                  </div>
                  <div className="absolute top-[1.44rem] left-[0rem] w-[3.5rem] h-[2.65rem] text-center">
                    <div className="absolute top-[0rem] left-[0rem] w-[3.5rem] h-[2.65rem]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-md bg-color-1 w-[3.5rem] h-[2.65rem]" />
                      <div className="absolute top-[0rem] left-[0rem] leading-[210%] font-semibold flex items-center justify-center w-[2.38rem] h-[2.65rem]">
                        1
                      </div>
                    </div>
                    <img
                      className="absolute top-[1.33rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden"
                      alt=""
                      src="/frame-971.svg"
                    />
                    <img
                      className="absolute top-[0.27rem] left-[2.06rem] w-[1rem] h-[1.06rem] overflow-hidden"
                      alt=""
                      src="/frame-983.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute top-[5.06rem] left-[19.75rem] w-[1.69rem] h-[3.75rem]"
                  alt=""
                  src="/group-19731.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.25rem] bg-primary-color rounded-8xs overflow-hidden flex flex-col items-center justify-start">
                  <b className="relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-h6 text-light-text-color text-center">
                    Update Shopping cart
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Container;
