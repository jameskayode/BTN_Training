// import React from "react";
import { AiOutlineInstagram} from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const socials = [
  { icon: BsFacebook, link: "#" },
  { icon: AiOutlineInstagram, link: "#" },
  { icon: BsTwitter, link: "#" },
];
const FooterHead = () => {
  return (
    <div className="flex max-w-[25.875rem]  md:px-[12.19rem]  pr-[2.8125rem] pl-[2.75rem] justify-center items-center">
      <div className="flex max-w-[20.3125rem] py-[2.5rem] flex-col md:flex-row items-start md:items-center md:justify-between lg:items-center lg:ms-auto md:gap-[18rem] lg:gap-[40.09rem] lg:ml-[12.19rem]">
        <h3 className="text-color[#252B42] text-2xl font-bold tracking-tighter py-[0.8rem] lg:ml-[12.19rem]">
          Bandage
        </h3>
        <div className="flex justify-center items-start gap-[1.25rem] fill-[primary-color] ">
          {socials.map((item, i) => (
            <item.icon key={i} style={{ fill: "var(--primary-color)" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterHead;
