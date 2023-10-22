
import PropTypes from 'prop-types';
import styles from "./BestCard.module.css";


const BestCard = ({
  imgSrc,
  tag,
  title,
  tags,
  description,
  date,
  comments,
}) => (
  <div className={styles.contentCard}>
    <div className={styles.fixedHeight8}>
      <img className={styles.heroCover2Icon} alt="" src={imgSrc} />
      <div className={styles.tag}>
        <b className={styles.loginRegister}>{tag}</b>
      </div>
    </div>
    <div className={styles.tagsParent}>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <div className={styles.small} key={index}>
            {tag}
          </div>
        ))}
      </div>
      <div className={styles.h4postTitle}>
        <p className={styles.weKnowhow}>{title}</p>
        <p className={styles.weKnowhow}>(L'integral)</p>
      </div>
      <div className={styles.paragraphPostDescription}>
        {description.map((paragraph, index) => (
          <p className={styles.weKnowhow} key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles.frameParent}>
        <div className={styles.calendar}>
          <img
            className={styles.xs}
            alt=""
            src="/src/assets/images/date.svg"
          />
          <div className={styles.div4}>{date}</div>
        </div>
        <div className={styles.calendar}>
          <img
            className={styles.chart}
            alt=""
            src="/src/assets/images/graph.svg"
          />
          <div className={styles.div4}>{comments} comments</div>
        </div>
      </div>
      <div className={styles.a13}>
        <b className={styles.loginRegister}>Learn More</b>
        <img
          className={styles.arrowNext}
          alt=""
          src="/src/assets/images/icon arrow-next.svg"
        />
      </div>
    </div>
  </div>
);

BestCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
  };
  

export default BestCard;
