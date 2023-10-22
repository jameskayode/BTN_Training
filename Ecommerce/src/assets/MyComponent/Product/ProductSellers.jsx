// import React from 'react'
import CardProduct from "./CardProduct";
import styles from "./CardProduct.module.css";


const productData = [
  {
    imageSrc: "/productcover5@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    imageSrc: "/productcover51@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    imageSrc: "/productcover52@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    imageSrc: "/productcover53@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    imageSrc: "/productcover53@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    imageSrc: "/productcover53@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    imageSrc: "/productcover53@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
  {
    imageSrc: "/productcover53@2x.png",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
  },
];
const ProductSellers = () => {
  return (
    <div className={styles.desktopProductCards15}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.mainContent}>
            <b className={styles.h3SectionTitle}>BESTSELLER PRODUCTS</b>
          </div>
        </div>
        <div className={styles.containerChild} />
        <div className={styles.row1}>
          {productData.map((product, index) => (
            <div className={styles.colMd3} key={index}>
              <CardProduct {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProductSellers
