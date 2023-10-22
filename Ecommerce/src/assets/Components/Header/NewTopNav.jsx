import React from "react";
import {FaPhone,FaEnvelope,FaInstagram,FaYoutube,FaFacebook,FaTwitter,FaSearch,FaShoppingCart,FaHeart,FaBars,FaHome,FaUser,
} from "react-icons/fa";
import styles from "./NewTopNav.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar-style-8-navbar-light"]}>
        <div className={styles["navbar-dark"]}>
          <div className={styles["collapse-navbar-collapse"]}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles["col-md-4"]}>
                  <div className={styles["btn-sm-20"]}>
                    <FaPhone className={styles["icn-settings-icn-xs"]} />
                    <span className={styles["login-register"]}>
                      (225) 555-0118
                    </span>
                  </div>
                  <div className={styles["btn-sm-20"]}>
                    <FaEnvelope className={styles["icn-settings-icn-xs"]} />
                    <b className={styles["login-register"]}>
                      michelle.rivera@example.com
                    </b>
                  </div>
                </div>
                <div className={styles["col-md-41"]}>
                  <b className={styles["login-register"]}>
                    Follow Us and get a chance to win 80% off
                  </b>
                </div>
                <div className={styles["col-md-42"]}>
                  <b className={styles["login-register"]}>Follow Us :</b>
                  <div className={styles["social-media"]}>
                    <div className={styles.a}>
                      <FaInstagram className={styles["icn-settings-icn-xs"]} />
                    </div>
                    <div className={styles.a1}>
                      <FaYoutube className={styles["icn-settings-icn-xs"]} />
                    </div>
                    <div className={styles.a2}>
                      <FaFacebook className={styles["icn-settings-icn-xs"]} />
                    </div>
                    <div className={styles.a3}>
                      <FaTwitter className={styles["icn-settings-icn-xs"]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["navbar-light"]}>
        <div className={styles["navbar-brand"]}>
          <span className={styles.bandage}>Bandage</span>
        </div>
        <div className={styles["navbar-toggler"]}>
          <div className={styles["navbar-toggler-icon"]}>
            <FaBars />
          </div>
        </div>
        <div className={styles["collapse-navbar-collapse1"]}>
          <div className={styles["navbar-nav"]}>
            <div className={styles.li}>
              <div className={styles.a4}>
                <li className={styles.link}>
                  <FaHome /> Home
                </li>
              </div>
            </div>
            <div className={styles.dropdown}>
              <div className={styles["dropdown-toggle"]}>
                <div className={styles.category}>Shop</div>
                <img
                  className={styles["vector-icon"]}
                  alt=""
                  src="/src/assets/images/dropdown.svg"
                />
              </div>
            </div>
            <div className={styles.li1}>
              <div className={styles.a5}>
                <b className={styles.link}>About</b>
              </div>
            </div>
            <div className={styles.li2}>
              <div className={styles.a6}>
                <b className={styles.link}>Blog</b>
              </div>
            </div>
            <div className={styles.li3}>
              <div className={styles.a7}>
                <b className={styles.link}>Contact</b>
              </div>
            </div>
            <div className={styles.li4}>
              <div className={styles.a8}>
                <b className={styles.link}>Pages</b>
              </div>
            </div>
          </div>
          <div className={styles["navbar-nav1"]}>
            <div className={styles.li5}>
              <div className={styles.a9}>
                <div className={styles["btn-32"]}>
                  <FaUser className={styles["icn-settings-icn-xs6"]} />
                  <b className={styles["login-register"]}>Login / Register</b>
                </div>
              </div>
            </div>
            <div className={styles.li6}>
              <div className={styles.a10}>
                <div className={styles["btn-321"]}>
                  <FaSearch className={styles["icn-settings-icn-xs"]} />
                </div>
              </div>
            </div>
            <div className={styles.li7}>
              <div className={styles.a11}>
                <div className={styles["btn-32"]}>
                  <FaShoppingCart className={styles["icn-settings-icn-xs"]} />
                  <div className={styles.div4}>1</div>
                </div>
              </div>
            </div>
            <div className={styles.li7}>
              <div className={styles.a11}>
                <div className={styles["btn-32"]}>
                  <FaHeart className={styles["icn-settings-icn-xs"]} />
                  <div className={styles.div4}>1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
