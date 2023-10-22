// import React from "react";
import styles from "./footerHead.module.css";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const socials = [
  { icon: BsFacebook, link: "#" },
  { icon: AiOutlineInstagram, link: "#" },
  { icon: AiOutlineTwitter, link: "#" },
];
const FooterHead = () => {
  return (
    <div className={styles.div6}>
      <div className={styles.container7}>
        <div className={styles.row12}>
          <div className={styles.colmd315}>
            <div className={styles.navbarbrand1}>
              <div className={styles.bandage}>Bandage</div>
            </div>
          </div>
          <div className={styles.colmd316}>
            <div className={styles.socialmedia1}>
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
