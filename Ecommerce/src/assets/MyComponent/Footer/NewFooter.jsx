// import React from 'react';
import styles from './footer.module.css';
import { divData } from '../../utils/mockData';



const NewFooter = () => {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colmd2}>
            <b className={styles.h5}>{divData.companyInfo.title}</b>
            <div className={styles.div1}>
              {divData.companyInfo.links.map((link, index) => (
                <div className={styles.link} key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.colmd21}>
            <div className={styles.h5}>{divData.legal.title}</div>
            <div className={styles.div1}>
              {divData.legal.links.map((link, index) => (
                <div className={styles.link} key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.colmd2}>
            <b className={styles.h5}>{divData.features.title}</b>
            <div className={styles.div1}>
              {divData.features.links.map((link, index) => (
                <b className={styles.link} key={index}>
                  {link}
                </b>
              ))}
            </div>
          </div>
          <div className={styles.colmd21}>
            <b className={styles.h5}>{divData.resources.title}</b>
            <div className={styles.div1}>
              {divData.resources.links.map((link, index) => (
                <b className={styles.link} key={index}>
                  {link}
                </b>
              ))}
            </div>
          </div>
          <div className={styles.colmd4}>
            <div className={styles.h5}>{divData.getInTouch.title}</div>
            <div className={styles.groupsubscribe}>
              <div className={styles.inputgroup}>
                <div className={styles.formcontrol}>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your Email"
                    className={styles.youremail}
                  />
                </div>
                <div className={styles.inputappend}>
                  {/* <button className=""> */}
                  <button className={styles.grouptext}>
                    {divData.getInTouch.buttonText}
                  </button>
                  {/* </button> */}
                </div>
              </div>
              <div className={styles.formtext}>
                {divData.getInTouch.description}
              </div>
            </div>
          </div>
        </div>
      <span className={styles.copyright}>Made With Love By Finland All Right Reserved </span>
      </div>
    </div>
  );
};

export default NewFooter;
              