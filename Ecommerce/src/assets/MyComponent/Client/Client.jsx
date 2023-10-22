import { brand01, brand02, brand03, brand04, brand05, brand06 } from "../../utils/images";
import styles from "./Client.module.css";

const Client = () => {
  return (
    <div className={styles.desktopClients1}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colMd2}>
            <img className={styles.faBrands1Icon} alt="" src={brand01} />
          </div>
          <div className={styles.colMd21}>
            <img className={styles.faBrands2Icon} alt="" src={brand02} />
          </div>
          <div className={styles.colMd22}>
            <img className={styles.faBrands3Icon} alt="" src={brand03} />
          </div>
          <div className={styles.colMd23}>
            <img className={styles.faBrands4Icon} alt="" src={brand04} />
          </div>
          <div className={styles.colMd23}>
            <img className={styles.faBrands5Icon} alt="" src={brand05} />
          </div>
          <div className={styles.colMd23}>
            <img className={styles.faBrands6Icon} alt="" src={brand06} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
