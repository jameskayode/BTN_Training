
import './navbar.css'
import shopguy from '../../assets/images/shopg.png'
const ShopGuy = () => {
  return (
    <div className="shop-hero-2">
       <div className="shop-hero-2-product-slide-2" />
                <div className="container5">
                  <div className="row8">
                    <div className="col-md-61">
                      <div className="h2-section-title">SUMMER 2020</div>
                      <div className="h1-headline4">Vita Classic Product</div>
                      <div className="h41">
                        We know how large objects will act, We know how are objects
                        will act, We know
                      </div>
                      <div className="cta1">
                        <b className="h3">$16.48</b>
                       
                          <button className="btn-text button-md">ADD TO CART</button>
                        
                      </div>
                    </div>
                    <div className="col-md-62">
                      <img
                        className="shop-hero-2-png-picture-1-icon"
                        alt=""
                        src={shopguy}
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-indicators1">
              <div className="carouselcaptions" />
              <div className="carouselcaptions1" />
            </div>

            <img
              className="carousel-control-next-icon1"
              alt=""
              src="/src/assets/images/chevron-right.svg"
            />
            <img
              className="carousel-control-prev-icon1"
              alt=""
              src="/src/assets/images/chevron-left.svg"
            />
              </div>

  ) 
}

export default ShopGuy
