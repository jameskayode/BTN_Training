
import { FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaSearch, FaShoppingCart, FaHeart, FaBars, FaHome,FaUser } from 'react-icons/fa';
import '../navbar.css';

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
                    <FaPhone className="icn-settings-icn-xs" />
                    <span className="login-register">(225) 555-0118</span>
                  </div>
                  <div className="btn-sm-20">
                    <FaEnvelope className="icn-settings-icn-xs" />
                    <b className="login-register">michelle.rivera@example.com</b>
                  </div>
                </div>
                <div className="col-md-41">
                  <b className="login-register">Follow Us and get a chance to win 80% off</b>
                </div>
                <div className="col-md-42">
                  <b className="login-register">Follow Us :</b>
                  <div className="social-media">
                    <div className="a">
                      <FaInstagram className="icn-settings-icn-xs" />
                    </div>
                    <div className="a1">
                      <FaYoutube className="icn-settings-icn-xs" />
                    </div>
                    <div className="a2">
                      <FaFacebook className="icn-settings-icn-xs" />
                    </div>
                    <div className="a3">
                      <FaTwitter className="icn-settings-icn-xs" />
                    </div>
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
          <div className="navbar-toggler-icon">
            <FaBars />
          </div>
        </div>
        <div className="collapse-navbar-collapse1">
          <div className="navbar-nav">
            <div className="li">
              <div className="a4">
                <li className="link">
                  <FaHome /> Home
                </li>
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
                  <FaUser className="icn-settings-icn-xs6" />
                  <b className="login-register">Login / Register</b>
                </div>
              </div>
            </div>
            <div className="li6">
              <div className="a10">
                <div className="btn-321">
                  <FaSearch className="icn-settings-icn-xs" />
                </div>
              </div>
            </div>
            <div className="li7">
              <div className="a11">
                <div className="btn-32">
                  <FaShoppingCart className="icn-settings-icn-xs" />
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="li7">
              <div className="a11">
                <div className="btn-32">
                  <FaHeart className="icn-settings-icn-xs" />
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
