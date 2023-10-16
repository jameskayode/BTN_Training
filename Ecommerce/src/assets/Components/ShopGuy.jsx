import "./shopguy.css";
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
import Shopguy from '../../assets/images/shopg.png'

const ShopGuy = () => {
  return (
    <div className="carousel-2">
      {/* <div className="carousel-inner1">
        <div className="carousel-item1"> */}
          <div className="shop-hero-2-product-slide-2" />
          <div className="container6">
            <div className="row8">
              <div className="col-md-61">
                <div className="h55">SUMMER 2020</div>
                <b className="h1-headline4">Vita Classic Product</b>
                <div className="h41">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </div>
                <div className="cta1">
                  <span className="h5-price8">$16.48</span>
                  <button className="button-md btn-text3">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="col-md-62">
                <img
                  className="shop-hero-2-png-picture-1-icon"
                  alt=""
                  src={Shopguy}

                />
              </div>
            </div>
          {/* </div>
        </div> */}
      </div>



      <div className="carousel-indicators1">
        <div className="carouselcaptions2" />
        <div className="carouselcaptions3" />
      </div>
      <MdArrowForwardIos className="carousel-control-next-icon1"/>
      <MdArrowBackIosNew className="carousel-control-prev-icon1"/>
    </div>
  );
};

export default ShopGuy;
