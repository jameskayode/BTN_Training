import styles from "./LightNav.module.css";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaUser,
} from "react-icons/fa";
const LightNav = () => {
  return (
    <div className={styles.navbarLight}>
      <div className={styles.navbarBrand}>
        <b className={styles.bandage}>Bandage</b>
      </div>
      <div className={styles.navbarToggler}>
        <div className={styles.navbarTogglerIcon} />
        <FaBars />
      </div>
      <div className={styles.collapseNavbarCollapse}>
        <div className={styles.navbarNav}>
          <div className={styles.li}>
            <div className={styles.a}>
              <b className={styles.link}>Home</b>
            </div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropdownToggle}>
              <div className={styles.category}>Shop</div>
              <FaBars   className={styles.vectorIcon}
              />
            </div>
          </div>
          <div className={styles.li1}>
            <div className={styles.a1}>
              <b className={styles.link}>About</b>
            </div>
          </div>
          <div className={styles.li2}>
            <div className={styles.a2}>
              <b className={styles.link}>Blog</b>
            </div>
          </div>
          <div className={styles.li3}>
            <div className={styles.a3}>
              <b className={styles.link}>Contact</b>
            </div>
          </div>
          <div className={styles.li4}>
            <div className={styles.a4}>
              <b className={styles.link}>Pages</b>
            </div>
          </div>
        </div>
        <div className={styles.navbarNav1}>
          <div className={styles.li5}>
            <div className={styles.a5}>
              <div className={styles.btn32}>
                <FaUser className={styles.icnSettingsIcnXs1} />
                <li className={styles.loginRegister}>Login / Register</li>
              </div>
            </div>
          </div>
          <div className={styles.li6}>
            <div className={styles.a6}>
              <div className={styles.btn321}>
                <FaSearch className={styles.icnSettingsIcnXs1} />
              </div>
            </div>
          </div>
          <div className={styles.li7}>
            <div className={styles.a7}>
              <div className={styles.btn32}>
                <FaShoppingCart className={styles.icnSettingsIcnXs1} />
                <div className={styles.div4}>1</div>
              </div>
            </div>
          </div>
          <div className={styles.li7}>
            <div className={styles.a7}>
              <div className={styles.btn32}>
                <FaHeart className={styles.icnSettingsIcnXs1} />

                <div className={styles.div4}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightNav;
