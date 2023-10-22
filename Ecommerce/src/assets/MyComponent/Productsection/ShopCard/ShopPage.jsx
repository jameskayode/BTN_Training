import React from "react";
import ShopCard from "./ShopCard"; 
import styles from "./Shop.module.css"; 
import {shopCardData} from "../../../utils/images";

function ShopPage() {
 

  return (
    <div className={styles.desktopShopCards18}>
      <div className={styles.container3}>
        <div className={styles.row3}>
          {shopCardData.map((data, index) => (
            <ShopCard
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              numItems={data.numItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
