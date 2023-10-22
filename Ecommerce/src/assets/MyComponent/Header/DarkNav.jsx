import styles from "./NavDark.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
const NavDark = ({ bgColor }) => {
  const navClass = `${styles.navbarDark} ${bgColor && styles[bgColor]}`;
  return (
    <div className={navClass}>
      <div className={styles.collapseNavbarCollapse}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colMd4}>
              <div className={styles.btnSm20}>
                <FaPhone className={styles.icnSettingsIcnXs} />
                <b className={styles.h6}>(225) 555-0118</b>
              </div>
              <div className={styles.btnSm20}>
                <FaEnvelope className={styles.icnSettingsIcnXs} />
                <b className={styles.h6}>michelle.rivera@example.com</b>
              </div>
            </div>
            <div className={styles.colMd41}>
              <b className={styles.h6}>
                Follow Us and get a chance to win 80% off
              </b>
            </div>
            <div className={styles.colMd42}>
              <b className={styles.h6}>Follow Us :</b>
              <div className={styles.socialMedia}>
                <div className={styles.a}>
                  <FaInstagram className={styles.icnSettingsIcnXs} />
                </div>
                <div className={styles.a1}>
                  <FaYoutube className={styles.icnSettingsIcnXs} />
                </div>
                <div className={styles.a2}>
                  <FaFacebook className={styles.icnSettingsIcnXs} />
                </div>
                <div className={styles.a3}>
                  <FaTwitter className={styles.icnSettingsIcnXs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDark;
