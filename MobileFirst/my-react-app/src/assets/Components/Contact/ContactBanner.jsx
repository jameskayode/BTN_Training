import React from "react";
import { FaTwitter, FaFacebookSquare, FaInstagram,FaLinkedin } from "react-icons/fa";
import ContactBody from "./ContactBody";


const ContactBanner = () => {
  return (
    <div>
      <div className="items-stretch bg-white flex flex-col">
        <div className="bg-white flex w-full flex-col items-center pl-20 pr-16 pt-5 max-md:max-w-full max-md:px-5">
          <div className="">
            <div className=" gap-5 flex max-md:flex-col  max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col w-[49%] max-md:w-full max-md:ml-0">
                {/* <div className="items-start z-[1] flex flex-col my-auto max-md:max-w-full max-md:mt-5">
                  <div className="text-slate-800 text-base font-bold leading-6 tracking-normal self-stretch max-md:max-w-full">
                    CONTACT US
                  </div>
                  <div className="text-slate-800 text-6xl font-bold leading-[80px] tracking-wide self-stretch mt-9 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                    Get in touch <br /> 
                    today!
                  </div>
                  <div className="text-neutral-500 text-xl leading-8 tracking-wide self-stretch mt-9 max-md:max-w-full">
                    We know how large objects will act, <br />
                    but things on a small scale
                  </div>
                  <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                    Phone: <a href="tel:+451215215">+451 215 215</a>
                  </div>
                  <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal self-stretch mt-9 max-md:max-w-full">
                    Fax: +451 215 215
                  </div>
                  <div className="items-start flex w-[378px] max-w-full justify-between gap-5 mt-11 pl-2.5 pr-20 py-2.5 self-start max-md:mt-10 max-md:pr-5">
                    
                  <FaTwitter
                  className="aspect-[1.25] object-contain object-center w-full overflow-hidden shrink-0 flex-1  " />
                    <FaFacebookSquare
                 className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"

                    />
                    <FaInstagram  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"/>
                    <FaLinkedin className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"/>
                   
                  </div>
                </div> */}
                <ContactBody/>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9358c1eb2c96b916977f458724a9044a84d21be67c83c967af8b984d3fde3265?apiKey=fbc477c1e5044fd29b3713f139a88ed9&"
                  className="aspect-[0.77] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="justify-center items-center bg-white flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
          <div className="items-center flex w-full max-w-[1050px] flex-col px-8 py-12 max-md:max-w-full max-md:px-5">
            <div className="items-center flex w-[625px] max-w-full flex-col mt-16 px-12 max-md:mt-10 max-md:px-5">
              <div className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide">
                VISIT OUR OFFICE
              </div>
              <div className="text-slate-800 text-center text-4xl font-bold leading-[50px] tracking-wide self-stretch mt-2.5 max-md:max-w-full">
                We help small businesses <br />
                with big ideas
              </div>
            </div>
            <div className="self-stretch mt-20 mb-9 px-px max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-center bg-white flex flex-col w-full my-auto px-14 py-12 max-md:mt-8 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c31becb0bcd136a77c5b28a331bf5c98e4e2e1caa0581de560d9ed8b553ffd6c?apiKey=fbc477c1e5044fd29b3713f139a88ed9&"
                      className="aspect-square object-contain object-center w-[72px] overflow-hidden self-center max-w-full"
                    />
                    <div className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide self-stretch mt-5">
                      georgia.young@example.com
                    </div>
                    <div className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide self-center mt-2.5">
                      georgia.young@ple.com
                    </div>
                    <div className="text-slate-800 text-center text-base font-bold leading-6 tracking-normal self-center mt-5">
                      Get Support
                    </div>
                    <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide items-stretch border border-[color:var(--primary-color,#23A6F0)] self-center justify-center mt-4 px-9 py-4 rounded-[37px] border-solid max-md:px-5">
                      Submit Request
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center bg-slate-800 flex grow flex-col w-full px-14 py-12 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a44adc610c518634214450e5729f190b0fa059554429f57164177dcde870f1b?apiKey=fbc477c1e5044fd29b3713f139a88ed9&"
                      className="aspect-square object-contain object-center w-[72px] overflow-hidden self-center max-w-full mt-8"
                    />
                    <div className="text-white text-center text-sm font-bold leading-6 tracking-wide self-stretch mt-5">
                      georgia.young@example.com
                    </div>
                    <div className="text-white text-center text-sm font-bold leading-6 tracking-wide self-center mt-2.5">
                      georgia.young@ple.com
                    </div>
                    <div className="text-white text-center text-base font-bold leading-6 tracking-normal self-center mt-5">
                      Get Support
                    </div>
                    <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide items-stretch border border-[color:var(--primary-color,#23A6F0)] self-center justify-center mt-4 mb-8 px-9 py-4 rounded-[37px] border-solid max-md:px-5">
                      Submit Request
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center bg-white flex flex-col w-full my-auto px-14 py-12 max-md:mt-8 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e2b83ebcac42c3308e4324b8b56e777c31e5b7a8d44fac8f4ec0d457d9fffd8?apiKey=fbc477c1e5044fd29b3713f139a88ed9&"
                      className="aspect-square object-contain object-center w-[72px] overflow-hidden self-center max-w-full"
                    />
                    <div className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide self-stretch mt-5">
                      georgia.young@example.com
                    </div>
                    <div className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide self-center mt-2.5">
                      georgia.young@ple.com
                    </div>
                    <div className="text-slate-800 text-center text-base font-bold leading-6 tracking-normal self-center mt-5">
                      Get Support
                    </div>
                    <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide items-stretch border border-[color:var(--primary-color,#23A6F0)] self-center justify-center mt-4 px-9 py-4 rounded-[37px] border-solid max-md:px-5">
                      Submit Request
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex w-full flex-col items-center pt-0.5 pb-12 px-16 max-md:max-w-full max-md:px-5">
          <div className="flex w-[272px] max-w-full flex-col mb-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f2f3b1f7715f0cf698bd8a08ac5eaa28b402ca6a3948df835e13ecb3cf00d34?apiKey=fbc477c1e5044fd29b3713f139a88ed9&"
              className="aspect-[1.02] object-contain object-center w-[62px] stroke-[4px] stroke-sky-500 overflow-hidden self-center max-w-full"
            />
            <div className="text-slate-800 text-center text-base font-bold leading-6 tracking-normal self-center mt-4">
              WE Can't WAIT TO MEET YOU
            </div>{" "}
            <div className="text-slate-800 text-center text-6xl font-bold leading-[80px] tracking-wide self-stretch mt-4 max-md:text-4xl max-md:leading-[62px]">
              Let’s Talk
            </div>
            <div className="text-white text-center text-sm font-bold leading-6 tracking-wide items-stretch bg-sky-500 self-center justify-center mt-4 px-10 py-4 rounded-md max-md:px-5">
              Try it free now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
