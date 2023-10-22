import { useState } from "react";
import {
  product01,
  product02,
  product03,
  product04,
  product05,
  product06,
  product07,
    product08,
    product09,
    product10,
    product11,
    product12
} from "../../utils/images.js";
import styles from "../MyProductCardSection/best.module.css";
import BestSeller from "../MyProductCardSection/BestSeller";
import { BsFillGridFill, BsListCheck } from "react-icons/bs";
import Button from "./Button";

const bestsellers = [
  product01,
  product02,
  product03,
  product04,
  product05,
  product06,
  product07,
  product08,
  product09,
  product10,
  product11,
  product12,
];
const ProductListSection = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.bestsellerSection}>
      <div className={styles.filters}>
        <span className={styles.small}>Showing all 12 results</span>
        <div className={styles.views}>
          <span>Views:</span>
          <span className={styles.active}>
            <BsFillGridFill />
          </span>
          <span>
            <BsListCheck />
          </span>
        </div>
        <div className={styles.right}>
          <select name="" id="">
            <option value="popularity">Popularity</option>
          </select>
          <Button text={"Filter"} size={"small"} color={"primary"} />
        </div>

      </div>
      <div className={styles.bestsellerCards}>
        {bestsellers.map((img, i) => (
          <BestSeller key={i} image={img} />
        ))}
      </div>

      {/* Pagination section */}

      <div className={styles.pagination}>
        <button onClick={() => setActive(0)} disabled={active === 0}>
          First
        </button>
        {[0, 1, 2].map((item) => (
          <button
            key={item}
            className={active === item ? styles["pagination-active"] : ""}
            onClick={() => setActive(item)}
          >
            {item + 1}
          </button>
        ))}
        <button onClick={() => setActive(2)} disabled={active === 2}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListSection;
