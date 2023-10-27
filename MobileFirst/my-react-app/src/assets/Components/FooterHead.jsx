// import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const socials = [
  { icon: BsFacebook, link: "#" },
  { icon: AiOutlineInstagram, link: "#" },
  { icon: AiOutlineTwitter, link: "#" },
];
const FooterHead = () => {
  return (
    <div className="div6">
      <div className="container7">
        <div className="row12">
          <div className="colmd315">
            <div className="navbarbrand1">
              <div className="bandage">Bandage</div>
            </div>
          </div>
          <div className="colmd316">
            <div className="socialmedia1">
              {socials.map((item, i) => (
                <item.icon key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHead;
