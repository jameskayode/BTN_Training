import  { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import styles from "./ProductDescription.module.css";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.desktopProductDescription1}>
      <div className={styles.navbarStyle3NavbarLight}>
        <div className={styles.nav}>
          <div
            className={`${styles.li} ${
              activeTab === "description" ? styles.active : ""
            }`}
          >
            <div
              className={styles.a}
              onClick={() => handleTabClick("description")}
            >
              <div className={styles.description}>Description</div>
            </div>
          </div>
          <div
            className={`${styles.li1} ${
              activeTab === "additional" ? styles.active : ""
            }`}
          >
            <div
              className={styles.a}
              onClick={() => handleTabClick("additional")}
            >
              <b className={styles.link}>Additional Information</b>
            </div>
          </div>
          <div
            className={`${styles.li2} ${
              activeTab === "reviews" ? styles.active : ""
            }`}
          >
            <div
              className={styles.a2}
              onClick={() => handleTabClick("reviews")}
            >
              <b className={styles.link}>Reviews</b>
              <b className={styles.link2}>(0)</b>
            </div>
          </div>
        </div>
        <div className={styles.navbarStyle3NavbarLightChild} />
      </div>

      {activeTab === "description" && (
        <div className={styles.descriptionContent}>
          <div className={styles.div}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.colMd4}>
                  <div className={styles.cardItem}>
                    <div className={styles.unsplashqanof9ijlfs} />
                    <img
                      className={styles.unsplashqanof9ijlfsIcon}
                      alt=""
                      src="/unsplashqanof9ijlfs.svg"
                    />
                  </div>
                </div>
                <div className={styles.colMd41}>
                  <div className={styles.cardItem1}>
                    <b className={styles.h5}>{`the quick fox jumps over `}</b>
                    <div className={styles.h6}>
                      <p className={styles.metMinimMollie}>
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                      <p className={styles.metMinimMollie}>&nbsp;</p>
                      <p className={styles.metMinimMollie}>
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                      <p className={styles.metMinimMollie}>&nbsp;</p>
                      <p className={styles.metMinimMollie}>
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.colMd41}>
                  <div className={styles.cardItem2}>
                    <b className={styles.h5}>{`the quick fox jumps over `}</b>
                    <div className={styles.list}>
                      <div className={styles.listRow}>
                        <VscChevronRight
                          className={styles.icnArrowRightIcnXs}
                        />
                        <b className={styles.link}>
                          the quick fox jumps over the lazy dog
                        </b>
                      </div>
                      <div className={styles.listRow}>
                        <VscChevronRight
                          className={styles.icnArrowRightIcnXs}
                        />
                        <b className={styles.link}>
                          the quick fox jumps over the lazy dog
                        </b>
                      </div>
                      <div className={styles.listRow}>
                        <VscChevronRight
                          className={styles.icnArrowRightIcnXs}
                        />
                        <b className={styles.link}>
                          the quick fox jumps over the lazy dog
                        </b>
                      </div>
                      <div className={styles.listRow}>
                        <VscChevronRight
                          className={styles.icnArrowRightIcnXs}
                        />
                        <b className={styles.link}>
                          the quick fox jumps over the lazy dog
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardItem3}>
                    <b className={styles.h5}>{`the quick fox jumps over `}</b>
                    <div className={styles.list}>
                      <div className={styles.listRow}>
                        <VscChevronRight
                          className={styles.icnArrowRightIcnXs}
                        />
                        <b className={styles.link}>
                          the quick fox jumps over the lazy dog
                        </b>
                      </div>
                      <div className={styles.listRow}>
                        <VscChevronRight
                          className={styles.icnArrowRightIcnXs}
                        />
                        <b className={styles.link}>
                          the quick fox jumps over the lazy dog
                        </b>
                      </div>
                      <div className={styles.listRow}>
                        <VscChevronRight
                          className={styles.icnArrowRightIcnXs}
                        />
                        <b className={styles.link}>
                          the quick fox jumps over the lazy dog
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "additional" && (
        <div className={styles.additionalContent}>
          <div className={styles.div}>
            <div className={styles.container}>
              <div className={styles.row}></div>
            <p>the quick fox jumps over the lazy </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className={styles.reviewsContent}>
          <div className={styles.div}>
            <div className={styles.container}>
              <div className={styles.row}></div>
              <span>There are no reviews for this product yet.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
