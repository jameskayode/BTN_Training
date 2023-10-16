
import PropTypes from 'prop-types';



const BestCard = ({ imgSrc, tag, title, tags, description, date, comments }) => (
  <div className="content-card">
    <div className="fixed-height8">
      <img className="hero-cover2-icon" alt="" src={imgSrc} />
      <div className="tag">
        <b className="login-register">{tag}</b>
      </div>
    </div>
    <div className="tags-parent">
      <div className="tags">
        {tags.map((tag, index) => (
          <div className="small" key={index}>
            {tag}
          </div>
        ))}
      </div>
      <div className="h4-post-title">
        <p className="we-know-how">{title}</p>
        <p className="we-know-how">(L'integral)</p>
      </div>
      <div className="paragraph-post-description">
        {description.map((paragraph, index) => (
          <p className="we-know-how" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="frame-parent">
        <div className="icon-akar-icons-calendar-parent">
          <img className="icn-settings-icn-xs" alt="" src="/src/assets/images/date.svg" />
          <div className="div4">{date}</div>
        </div>
        <div className="icon-akar-icons-calendar-parent">
          <img className="icon-ant-design-area-chart-out" alt="" src="/src/assets/images/graph.svg" />
          <div className="div4">{comments} comments</div>
        </div>
      </div>
      <div className="a13">
        <b className="login-register">Learn More</b>
        <img className="icon-arrow-next" alt="" src="/src/assets/images/icon arrow-next.svg" />
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
