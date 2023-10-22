import React from "react";
import styles from "./Shop.module.css"; 

function ShopCard(props) {
  const { imageSrc, title, numItems } = props;

  return (
    <div className={styles.colMd43}>
      <div className={styles.cardItem}>
        <div className={styles.mediaBgCover}>
          <img className={styles.cardCover5Icon} src={imageSrc} alt="" />
          <div className={styles.filter} />
        </div>
        <div className={styles.cardContent}>
          <b className={styles.h65}>{title}</b>
          <div className={styles.h66}>{numItems} Items</div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
