import React from 'react'
import styles from './CardProduct.module.css'
const CardProduct = ({ imageSrc, title, category, price, discountPrice }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.fixedHeight}>
        <img className={styles.productCoverIcon} alt="" src={imageSrc} />
      </div>
      <div className={styles.h5ProductTitleParent}>
        <b className={styles.h5ProductTitle}>{title}</b>
        <b className={styles.linkProductCategory}>{category}</b>
        <div className={styles.prices}>
          <b className={styles.h5Price}>{price}</b>
          <b className={styles.h5Price1}>{discountPrice}</b>
        </div>
      </div>
    </div>
  );
};

export default CardProduct
