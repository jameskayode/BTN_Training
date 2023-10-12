import './navbar.css';

const Footer = () => {
  return (
    <div className="desktop-footer-6">
            <div className="div6">
              <div className="container7">
                <div className="row12">
                  <div className="col-md-315">
                    <div className="navbar-brand1">
                      <div className="bandage">Bandage</div>
                    </div>
                  </div>
                  <div className="col-md-316">
                    <div className="social-media1">
                      <img className="facebook-icon" alt="" src="/src/assets/images/facebook.svg" />
                      <img className="facebook-icon" alt="" src="/src/assets/images/instagram.svg" />
                      <img className="twitter-icon" alt="" src="/src/assets/images/ant-design-twitter-outlined.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hr" />
            <div className="div7">
              <div className="container8">
                <div className="row13">
                  <div className="col-md-2">
                    <div className="h5-header-tag">Company Info</div>
                    <div className="div">
                      <div className="login-register">About Us</div>
                      <div className="login-register">Carrier</div>
                      <div className="login-register">We are hiring</div>
                      <div className="login-register">Blog</div>
                    </div>
                  </div>
                  <div className="col-md-21">
                    <div className="h5-header-tag">Legal</div>
                    <div className="div">
                      <li className="login-register">About Us</li>
                      <li className="login-register">Carrier</li>
                      <li className="login-register">We are hiring</li>
                      <li className="login-register">Blog</li>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="h5-header-tag">Features</div>
                    <div className="div">
                      <div className="login-register">Business Marketing</div>
                      <div className="login-register">User Analytic</div>
                      <div className="login-register">Live Chat</div>
                      <div className="login-register">Unlimited Support</div>
                    </div>
                  </div>
                  <div className="col-md-21">
                    <div className="h5-header-tag">Resources</div>
                    <div className="div">
                      <div className="login-register">{`IOS & Android`}</div>
                      <div className="login-register">Watch a Demo</div>
                      <div className="login-register">Customers</div>
                      <div className="login-register">API</div>
                    </div>
                  </div>
                  <div className="col-md-47">
                    <div className="h5-header-tag">Get In Touch</div>
                    <div className="custom-form-group-subscribe">
                      <div className="input-group">
                        <div className="form-control-input-style-1">
                         
                          <div className="your-email"> <input type="email" name="" id="" placeholder='Your mail' /></div>
                        </div>
                        <div className="input-group-append">
                          {/* <div className="btn"> */}
                            <button className=" btn input-group-text">Subscribe</button>
                          {/* </div> */}
                        </div>
                      </div>
                      <div className="form-text">Lore imp sum dolor Amit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div12">
              <div className="container9">
                <div className="row14">
                  <div className="col-md-7">
                    <b className="login-register">{`Made With Love By Finland All Right Reserved `}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Footer;
