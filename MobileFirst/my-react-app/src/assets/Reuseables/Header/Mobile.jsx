import {HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import {BiMenuAltRight } from 'react-icons/bi';
import {MdOutlineFavoriteBorder } from 'react-icons/md';


const Mobile = () => {
  return (
   
    <div className="relative bg-light-text-color w-full overflow-hidden flex flex-col items-start justify-start text-center text-[1.5rem] text-text-color font-h6">
    <div className="relative w-[25.88rem] h-[54.94rem] overflow-hidden shrink-0">
      <div className="absolute top-[1.44rem] left-[calc(50%_-_172px)] w-[11.69rem] h-[3.63rem] overflow-hidden text-left">
        <b className="absolute top-[0.81rem] left-[0rem] tracking-[0.1px] leading-[2rem]">
          Bandage
        </b>
      </div>
      <BiMenuAltRight
        className="absolute top-[2.81rem] left-[calc(50%_+_145px)] w-[2.5rem] h-[1.86rem]"
      />
      <div className="absolute top-[9.31rem] left-[calc(50%_-_61px)] overflow-hidden flex flex-col items-center justify-start gap-[1.88rem] text-[1.88rem] text-second-text-color">
        <div className="relative tracking-[0.2px] leading-[2.81rem] text-text-color">
          Home
        </div>
        <div className="relative tracking-[0.2px] leading-[2.81rem]">
          Shop
        </div>
        <div className="relative tracking-[0.2px] leading-[2.81rem]">
          About
        </div>
        <div className="relative tracking-[0.2px] leading-[2.81rem]">
          Blog
        </div>
        <div className="relative tracking-[0.2px] leading-[2.81rem]">
          Contact
        </div>
        <div className="relative tracking-[0.2px] leading-[2.81rem]">
          Pages
        </div>
      </div>
      <div className="absolute top-[36.88rem] left-[calc(50%_-_155px)] overflow-hidden flex flex-col items-center justify-start text-[0.75rem] text-primary-color">
        <div className="relative w-[19.38rem] h-[4.69rem] overflow-hidden shrink-0 text-[1.88rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[19.38rem] h-[4.69rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] rounded-18xl overflow-hidden flex flex-row items-center justify-start p-[0.94rem] gap-[0.31rem]">
              <AiOutlineUser
                className="relative w-[1.69rem] h-[1.75rem] overflow-hidden shrink-0"
                alt=""
                src="/icn-settings-icnxs.svg"
              />
              <div className="relative tracking-[0.2px] leading-[2.81rem]">
                Login / Register
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[4rem] h-[4rem] overflow-hidden shrink-0">
          <div className="absolute top-[0rem] left-[0rem] w-[4rem] h-[4rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] rounded-18xl overflow-hidden flex flex-row items-center justify-start p-[0.94rem]">
              <HiOutlineSearch
                className="relative w-[2.13rem] h-[2.13rem] overflow-hidden shrink-0"
              />
            </div>
          </div>
        </div>
        <div className="relative w-[4.81rem] h-[4.19rem] overflow-hidden shrink-0">
          <div className="absolute top-[0rem] left-[0rem] w-[4.81rem] h-[4.19rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] rounded-18xl overflow-hidden flex flex-row items-center justify-start p-[0.94rem] gap-[0.31rem]">
              <AiOutlineShoppingCart
                className="relative w-[2.31rem] h-[2.31rem] overflow-hidden shrink-0"
                
                
              />
              <div className="relative tracking-[0.2px] leading-[1rem]">
                1
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[4.31rem] h-[3.69rem] overflow-hidden shrink-0">
          <div className="absolute top-[0rem] left-[0rem] w-[4.31rem] h-[3.69rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] rounded-18xl overflow-hidden flex flex-row items-center justify-start p-[0.94rem] gap-[0.31rem]">
              <MdOutlineFavoriteBorder
                className="relative w-[1.81rem] h-[1.81rem] overflow-hidden shrink-0"
              />
              <div className="relative tracking-[0.2px] leading-[1rem]">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
)
}
export default Mobile
