import styles from "./ShopListContainer1.module.css";
import { FaArrowRight } from "react-icons/fa";

const ShopListContainer1 = () => {
  return (
    <ul className={styles.container}>
      <div className={styles.row}>
        <div className={styles.colMd6}>
          <b className={styles.h2}>Shop</b>
        </div>
        <div className={styles.colMd61}>
          <div className={styles.breadcrumb}>
            <b className={styles.link}>Home</b>
            <FaArrowRight
              className={styles.icnArrowRightIcnXs}
              alt=""
              src="../"
            />
            <b className={styles.h6}>Shop</b>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default ShopListContainer1;
