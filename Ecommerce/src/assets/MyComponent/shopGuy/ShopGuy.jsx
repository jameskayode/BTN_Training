import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Shopguy from "../../images/shopg.png";
import styles from "./shopguy.module.css";

const ShopGuy = () => {
  return (
    <div className={styles.carousel2}>
      <div className={styles.shopHero2ProductSlide2} />
      <div className={styles.container6}>
        <div className={styles.row8}>
          <div className={styles.colMd61}>
            <div className={styles.h55}>SUMMER 2020</div>
            <b className={styles.h1Headline4}>Vita Classic Product</b>
            <div className={styles.h41}>
              We know how large objects will act, We know how are objects will
              act, We know
            </div>
            <div className={styles.cta1}>
              <span className={styles.h5Price8}>$16.48</span>
              <button className={styles.buttonMd}>ADD TO CART</button>
            </div>
          </div>
          <div className={styles.colMd62}>
            <img
              className={styles.shopHero2PngPicture1Icon}
              alt=""
              src={Shopguy}
            />
          </div>
        </div>
      </div>
      <div className={styles.carouselIndicators1}>
        <div className={styles.carouselCaptions2} />
        <div className={styles.carouselCaptions3} />
      </div>
      <MdArrowForwardIos className={styles.carouselControlNextIcon1} />
      <MdArrowBackIosNew className={styles.carouselControlPrevIcon1} />
    </div>
  );
};

export default ShopGuy;
