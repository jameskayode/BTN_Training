import{ useState } from "react";
import styles from "./FloatingCard.module.css";
import Rating from "react-rating-stars-component";
import { BsStar, BsStarFill } from "react-icons/bs";

const FloatingCard = () => {
  const [rating, setRating] = useState(2);

  return (
    <div className={styles.desktopProductCards42}>
      <div className={styles.container}>
        <div className={styles.row}>
          <img className={styles.colMd6Icon} alt="" src="/colmd6.svg" />
          <div className={styles.colMd6}>
            <div className={styles.h4}>Floating Phone</div>
            <div className={styles.starsParent}>
              <Rating
                value={rating}
                onChange={(newRating) => setRating(newRating)}
                size={30}
                activeColor="#FFA500"
                emptyIcon={<BsStar />}
                filledIcon={<BsStarFill />}
                isHalfRating={false}
              />
              <b className={styles.h6}>{`${rating} Reviews`}</b>
            </div>
            <b className={styles.h5}>$1,139.33</b>
            <div className={styles.div}>
              <b className={styles.h6}>Availability :</b>
              <b className={styles.h62}>{`In Stock `}</b>
            </div>
            <div className={styles.paragraph}>
              <p
                className={styles.metMinimMollie}
              >{`Met minim Mollie non desert Alamo est sit cliquey dolor `}</p>
              <p
                className={styles.metMinimMollie}
              >{`do met sent. RELIT official consequent door ENIM RELIT Mollie. `}</p>
              <p className={styles.metMinimMollie}>
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className={styles.hr} />
            <div className={styles.productColors}>
              <div className={styles.productColorsChild} />
              <div className={styles.productColorsItem} />
              <div className={styles.productColorsInner} />
              <div className={styles.ellipseDiv} />
            </div>
            <div className={styles.productActions}>
              <button className={styles.btnprimaryColorbtnSm}>
                <b className={styles.h63}>Select Options</b>
              </button>
              <img className={styles.likeIcon} alt="" src="/like.svg" />
              <img className={styles.likeIcon} alt="" src="/basket.svg" />
              <img className={styles.likeIcon} alt="" src="/more.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
