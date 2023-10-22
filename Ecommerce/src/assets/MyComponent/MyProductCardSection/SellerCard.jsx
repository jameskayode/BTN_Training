import PropTypes from "prop-types";
import styles from "./best.module.css";
const colors = [
  { color1: "#23A6F0" },
  { color2: "#2DC071" },
  { color3: "#E77C40" },
  { color4: "#252B42" },
];
const Eclipse = ({ color }) => {
  return (
    <div className={styles.eclipse} style={{ backgroundColor: color }}></div>
  );
};

const SellerCard = ({ image }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={styles.cardInfo}>
        <h5 className={styles.title}>Graphic Design</h5>
        <a href="#">English Department</a>
        <h5 className={styles.prices}>
          <span>$16.48</span>
          <span>$6.48</span>
        </h5>
        <div className={styles.colors}>
          {colors.map((color) => (
            <Eclipse
              key={Object.values(color)[0]}
              color={Object.values(color)[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerCard;




SellerCard.propTypes = {
  image: PropTypes.string.isRequired,
};

Eclipse.propTypes = {
  color: PropTypes.string.isRequired,
};
