import "./FloatingCard.css";


const FlootingCard = () => {
  return (
    <div className="desktop-product-cards-42">
      <div className="container6">
        <div className="row6">
          <img className="col-md-6-icon" alt="" src="/colmd6.svg" />
          <div className="col-md-61">
            <div className="h4">Floating Phone</div>
            <div className="stars-parent">
              <div className="stars">
                <img
                  className="icn-bxs-star-icon"
                  alt=""
                  src="/icn-bxsstar.svg"
                />
                <img
                  className="icn-bxs-star-icon"
                  alt=""
                  src="/icn-bxsstar1.svg"
                />
                <img
                  className="icn-bxs-star-icon"
                  alt=""
                  src="/icn-bxsstar2.svg"
                />
                <img
                  className="icn-bxs-star-icon"
                  alt=""
                  src="/icn-bxsstar3.svg"
                />
                <img
                  className="icn-bxs-star-icon"
                  alt=""
                  src="/icn-bxstar.svg"
                />
              </div>
              <b className="h65">10 Reviews</b>
            </div>
            <b className="h59">$1,139.33</b>
            <div className="div12">
              <b className="h65">Availability :</b>
              <b className="h67">{`In Stock `}</b>
            </div>
            <div className="paragraph">
              <p className="met-minim-mollie">{`Met minim Mollie non desert Alamo est sit cliquey dolor `}</p>
              <p className="met-minim-mollie">{`do met sent. RELIT official consequent door ENIM RELIT Mollie. `}</p>
              <p className="met-minim-mollie">
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="hr1" />
            <div className="product-colors">
              <div className="product-colors-child" />
              <div className="product-colors-item" />
              <div className="product-colors-inner" />
              <div className="ellipse-div" />
            </div>
            <div className="product-actions">
              <div className="btnprimary-colorbtn-sm">
                <b className="h65">Select Options</b>
              </div>
              <img className="like-icon" alt="" src="/like.svg" />
              <img className="like-icon" alt="" src="/basket.svg" />
              <img className="like-icon" alt="" src="/more.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlootingCard
