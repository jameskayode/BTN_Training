import {
  product01, product02, product03, product04, product05, product06, product07, product08
} from "../../utils/images.js";
import SellerCard from "./SellerCard";
import styles from "./best.module.css";

const productImg = [
  product01,
  product02,
  product03,
  product04,
  product05,
  product06,
  product07,
  product08,
];
const BestSeller = () => {
  return (
    <section className={styles.bestsellerSection}>
      <header className={styles.bestsellerHeader}>
        <h4 className={`${styles.sectionSubtext} ${styles.sectionSubHeading}`}>
          Featured Products
        </h4>
        <h3 className={styles.sectionHeading}>BESTSELLER PRODUCTS</h3>
        <p className={styles.sectionSubtext}>
          Problems trying to resolve the conflict between
        </p>
      </header>
      <div className={styles.bestsellerCards}>
        {productImg.map((img, i) => (
          <SellerCard key={i} image={img} />
        ))}
      </div>
    </section>
  );
};


export default BestSeller;
