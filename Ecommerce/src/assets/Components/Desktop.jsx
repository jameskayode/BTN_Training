import './navbar.css';

const Desktop = () => {
  return (
    


            <div className="desktop-shop-header-1">
          

                {/* Banner section */}
            <div className="carousel-1">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img
                    className="hero-cover2-icon"
                    alt=""
                    src="/src/assets/images/banner.svg"
                  />
                  
                  <div className="container2">
                    <div className="row2">
                      <div className="col-md-8">
                        <b className="h5-header-tag">SUMMER 2020</b>
                        <b className="h1-headline6">NEW COLLECTION</b>
                        <div className="h4">
                          <p className="we-know-how">{`We know how large objects will act, `}</p>
                          <p className="we-know-how">
                            but things on a small scale.
                          </p>
                        </div>
                        <div className="cta">
                        <button className="buttonbtnprimary-colorbtn-l">
                            SHOP NOW</button>
                          
                        </div>
                      </div>
                      <div className="col-md-43" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-indicators">
                <div className="carouselcaptions" />
                <div className="carouselcaptions1" />
              </div>
              <img
                className="carousel-control-next-icon"
                alt=""
                src="/src/assets/images/chevron-right.svg"
              />
              <img
                className="carousel-control-prev-icon"
                alt=""
                src="/src/assets/images/chevron-left.svg"
              />
            </div>
          </div>
         
    
  )
}

export default Desktop
