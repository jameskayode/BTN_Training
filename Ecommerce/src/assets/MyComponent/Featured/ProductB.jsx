
// import React from 'react'
// import './navbar.css'
import BestCard from './BestCard.jsx'
import { posts } from '../../utils/mockData.js';
import styles from './BestCard.module.css';

const ProductB = () => {


  return (
    <div className={styles.desktopBlog3}>
      <div className={styles.container6}>
        <div className={styles.row}>
          <div className={styles.mainContent1}>
            <div className={styles.loginRegister}>Practice Advice</div>
            <div className={styles.h1Headline}>Featured Posts</div>
            <span className={styles.paragraph2}>
              Problems trying to resolve the conflict between
              <br />
              the two major realms of Classical physics: Newtonian mechanics
            </span>
          </div>
        </div>
        <div className={styles.row11}>
          {posts.map((post, index) => (
            <div className="col-md-44" key={index}>
              <BestCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductB;

