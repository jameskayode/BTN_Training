import './navbar.css';

const Container = () => {
  return (
    <div className="desktop-shop-cards-31">
            <div className="container3">
              <div className="row3">
                <div className="main-content">
                  <div>       </div>
                  <div className="paragraph">
                    <h1> EDITORS PICK</h1>
                    <br />
                    <span>Problems trying to resolve the conflict between</span>
                    </div>
                </div>
              </div>
              <div className="row4">
                <div className="col-md-6">
                  <div className="card-item">
                    {/* <div className="media-bg-cover"> */}
                      {/* <img
                        className="hero-cover2-icon"
                        alt=""
                        src="/cardcover20@2x.png"
                      /> */}
                      <img className="filter-icon" alt="" src="/src/assets/images/a1.svg" />
                    {/* </div> */}
                    <div className="card-content">
                      <b className="h2">MEN</b>
                    </div>
                  </div>
                </div>
                <div className="col-md-35">
                  <div className="card-item1">
                    <div className="media-bg-cover">
                      <img
                        className="hero-cover2-icon"
                        alt=""
                        src="/src/assets/images/a2.png"
                      />
                      <img className="filter-icon" alt="" src="/src/assets/images/accessories.svg" />
                    </div>
                    <div className="card-content1">
                      <b className="h5-header-tag">WOMEN</b>
                    </div>
                  </div>
                </div>
                <div className="col-md-36">
                  <div className="card-item2">
                    <div className="media-bg-cover">
                      <img
                        className="hero-cover2-icon"
                        alt=""
                        src="/src/assets/images/accessories.svg"
                      />
                      <img className="filter-icon" alt="" src="/src/assets/images/accessory.svg" />
                    </div>
                    <div className="card-content2">
                      <div className="h5-header-tag">ACCESSORIES</div>
                    </div>
                  </div>

                  <div className="card-item2">
                    <div className="media-bg-cover">
                      {/* <img
                        className="hero-cover2-icon"
                        alt=""
                        src="/cardcover23@2x.png"
                      /> */}
                      <img className="filter-icon" alt="" src="/src/assets/images/kids.svg" />
                    </div>
                    <div className="card-content3">
                      <div className="h5-header-tag">KIDS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    );
};

export default Container;
