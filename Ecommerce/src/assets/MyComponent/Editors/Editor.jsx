import styles from "./Editor.module.css";

const Editor = () => {
  return (
    <div className={styles.desktopShopCards31}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.mainContent}>
            <b className={styles.h2FeatureSection1}>EDITOR’S PICK</b>
            <div
              className={styles.paragraph}
            >{`Problems trying to resolve the conflict between `}</div>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.colMd6}>
            <div className={styles.cardItem}>
              {/* <div className={styles.mediaBgCover}>
                <img
                  className={styles.cardCover20Icon}
                  alt=""
                  src="/cardcover20@2x.png"
                /> */}
              <img
                className={styles.filterIcon}
                alt=""
                src="/src/assets/images/a1.svg"
              />

              <div className={styles.cardContent}>
                <b className={styles.h2}>MEN</b>
              </div>
            </div>
          </div>
          <div className={styles.colMd3}>
            <div className={styles.cardItem1}>
              <div className={styles.mediaBgCover}>
                <img
                  className={styles.cardCover20Icon}
                  alt=""
                  src="/src/assets/images/a2.png"
                />
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/src/assets/images/accessories.svg"
                />
              </div>
              <div className={styles.cardContent1}>
                <b className={styles.h21}>WOMEN</b>
              </div>
            </div>
          </div>
          <div className={styles.colMd31}>
            <div className={styles.cardItem2}>
              <div className={styles.mediaBgCover}>
                <img
                  className={styles.cardCover20Icon}
                  alt=""
                  src="/src/assets/images/accessories.svg"
                />
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/src/assets/images/accessory.svg"
                />
                
              </div>
              <div className={styles.cardContent2}>
                <b className={styles.h21}>ACCESSORIES</b>
              </div>
            </div>
            <div className={styles.cardItem2}>
              <div className={styles.mediaBgCover}>
                
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/src/assets/images/kids.svg"
                />
              </div>
              <div className={styles.cardContent3}>
                <b className={styles.h21}>KIDS</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
