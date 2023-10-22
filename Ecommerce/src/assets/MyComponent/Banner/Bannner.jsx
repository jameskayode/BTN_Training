import styles from "./Bannner.module.css";

const Bannner = () => {
  return (
    <div className={styles.carousel1}>
      <div className={styles.carouselInner}>
        <div className={styles.carouselItem}>
          <img
            className={styles.shopHero1ProductSlide1Icon}
            alt=""
            src="/src/assets/images/banner.svg"
          />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colMd8}>
                <b className={styles.h5HeaderTag}>SUMMER 2020</b>
                <b className={styles.h1Headline6}>NEW COLLECTION</b>
                <div className={styles.h4}>
                  <p
                    className={styles.weKnowHow}
                  >{`We know how large objects will act, `}</p>
                  <p className={styles.weKnowHow}>
                    but things on a small scale.
                  </p>
                </div>
                <div className={styles.cta}>
                  <button className={styles.buttonbtnprimaryColorbtnL}>
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className={styles.colMd43} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselIndicators}>
        <div className={styles.carouselCaptions} />
        <div className={styles.carouselCaptions1} />
      </div>
      <img
        className={styles.carouselControlNextIcon}
        alt=""
        src="/src/assets/images/chevron-right.svg"
      />
      <img
        className={styles.carouselControlPrevIcon}
        alt=""
        src="/src/assets/images/chevron-left.svg"
      />
    </div>
  );
};
  

export default Bannner;
