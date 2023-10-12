import './navbar.css';

const Navbar = () => {
  return (

    <>
   
              <div className="navbar-style-8-navbar-light">
                <div className="navbar-dark">
                  <div className="collapse-navbar-collapse">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="btn-sm-20">
                            <img
                              className="icn-settings-icn-xs"
                              alt=""
                              src="/src/assets/images/phone.svg"
                            />
                            <span className="login-register">(225) 555-0118</span>
                          </div>
                          <div className="btn-sm-20">
                            <img
                              className="icn-settings-icn-xs"
                              alt=""
                              src="/src/assets/images/whitemess.svg"
                            />
                            <b className="login-register">
                              michelle.rivera@example.com
                            </b>
                          </div>
                        </div>
                        <div className="col-md-41">
                          <b className="login-register">
                            Follow Us and get a chance to win 80% off
                          </b>
                        </div>
                        <div className="col-md-42">
                          <b className="login-register">Follow Us :</b>
                          <div className="social-media">
                            <div className="a">
                              <img
                                className="icn-settings-icn-xs"
                                alt=""
                                src="/src/assets/images/whiteinstagram.svg"
                              />
                            </div>
                            <div className="a1">
                              <img
                                className="icn-settings-icn-xs"
                                alt=""
                                src="/src/assets/images/whiteyoutube.svg"
                              />
                            </div>
                            <div className="a2">
                              <img
                                className="icn-settings-icn-xs"
                                alt=""
                                src="/src/assets/images/whitefb.svg"
                              />
                            </div>
                            <div className="a3">
                              <img
                                className="icn-settings-icn-xs"
                                alt=""
                                src="/src/assets/images/whitetwitter.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                
                <div className="navbar-light">
                  <div className="navbar-brand">
                    <span className="bandage">Bandage</span>
                  </div>
                  <div className="navbar-toggler">
                    <div className="navbar-toggler-icon" />
                  </div>
                  <div className="collapse-navbar-collapse1">
                    <div className="navbar-nav">
                      <div className="li">
                        <div className="a4">
                          <li className="link">Home</li>
                        </div>
                      </div>
                      <div className="dropdown">
                        <div className="dropdown-toggle">
                          <div className="category">Shop</div>
                          <img className="vector-icon" alt="" src="/src/assets/images/dropdown.svg" />
                        </div>
                        
                      </div> 


                      <div className="li1">
                        <div className="a5">
                          <b className="link">About</b>
                        </div>
                      </div>
                      <div className="li2">
                        <div className="a6">
                          <b className="link">Blog</b>
                        </div>
                      </div>
                      <div className="li3">
                        <div className="a7">
                          <b className="link">Contact</b>
                        </div>
                      </div>
                      <div className="li4">
                        <div className="a8">
                          <b className="link">Pages</b>
                        </div>
                      </div>
                    </div>
                    <div className="navbar-nav1">
                      <div className="li5">
                        <div className="a9">
                          <div className="btn-32">
                            <img
                              className="icn-settings-icn-xs6"
                              alt=""
                              src="/src/assets/images/avater.svg"
                            />
                            <b className="login-register">Login / Register</b>
                          </div>
                        </div>
                      </div>
                      <div className="li6">
                        <div className="a10">
                          <div className="btn-321">
                            <img
                              className="icn-settings-icn-xs"
                              alt=""
                              src="/src/assets/images/search.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="li7">
                        <div className="a11">
                          <div className="btn-32">
                            <img
                              className="icn-settings-icn-xs"
                              alt=""
                              src="/src/assets/images/cart.svg"
                            />
                            <div className="div4">1</div>
                          </div>
                        </div>
                      </div>
                      <div className="li7">
                        <div className="a11">
                          <div className="btn-32">
                            <img
                              className="icn-settings-icn-xs"
                              alt=""
                              src="/src/assets/images/fav.svg"
                            />
                            <div className="div4">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              </>
  )
}

export default Navbar
