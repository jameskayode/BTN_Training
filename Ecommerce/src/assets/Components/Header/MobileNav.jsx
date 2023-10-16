import "../../Components/mobile.css";

const MobileNav = () => {
  return (
    <div className="navbar-style-7-navbar-light">
      <div className="navbar-brand">
        <div className="bandage">Bandage</div>
      </div>
      <img className="icn-menu-icn-xs" alt="" src="/icn-menu-icnxs.svg" />
      <div className="navbar-nav">
        <div className="mobile-menu">Home</div>
        <div className="login-register">Shop</div>
        <div className="login-register">About</div>
        <div className="login-register">Blog</div>
        <div className="login-register">Contact</div>
        <div className="login-register">Pages</div>
      </div>
      <div className="navbar-nav1">
        <div className="li">
          <div className="a">
            <div className="btn-32">
              <img
                className="icn-settings-icn-xs"
                alt=""
                src="/icn-settings-icnxs.svg"
              />
              <div className="login-register">Login / Register</div>
            </div>
          </div>
        </div>
        <div className="li1">
          <div className="a1">
            <div className="btn-321">
              <img
                className="icn-settings-icn-xs1"
                alt=""
                src="/icn-settings-icnxs1.svg"
              />
            </div>
          </div>
        </div>
        <div className="li2">
          <div className="a2">
            <div className="btn-32">
              <img className="icn-settings-icn-xs2"
                alt=""
                src="/icn-settings-icnxs2.svg"
              />
              <div className="div3">1</div>
            </div>
          </div>
        </div>
        <div className="li3">
          <div className="a3">
            <div className="btn-32">
              <img
                className="icn-settings-icn-xs3"
                alt=""
                src="/icn-settings-icnxs3.svg"
              />
              <div className="div3">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
