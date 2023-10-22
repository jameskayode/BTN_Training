// import React from "react";
import styles from "./asian.module.css";

const ProductPopular = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.row9}>
        <div className={styles.colMd63}>
          <div className={styles.mediaBgCover}>
            <div className={styles.none}>
              <img
                className={styles.asianWomanManWithWinterClIcon}
                alt=""
                src="/src/assets/images/asian-woman-man-with-winter-clothes-1.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.colMd64}>
          <b className={styles.h5HeaderTag}>SUMMER 2020</b>
          <div className={styles.h1Headline}>
            <p className={styles.weKnowHow}>{`Part of the Neural `}</p>
            <p className={styles.weKnowHow}>Universe</p>
          </div>
          <div className={styles.h4SubHeadline}>
            <p
              className={styles.weKnowHow}
            >{`We know how large objects will act, `}</p>
            <p className={styles.weKnowHow}>but things on a small scale.</p>
          </div>
          <div className={styles.cta2}>
            <button className={styles.buttonMd}>BUY NOW</button>
            <button className={styles.buttonMd1 }>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopular;
