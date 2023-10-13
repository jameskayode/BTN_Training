// import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './navbar.css'; // Import your CSS file

const footerData = {
  companyInfo: {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  legal: {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  features: {
    title: "Features",
    links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
  },
  resources: {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
  getInTouch: {
    title: "Get In Touch",
    formPlaceholder: "Your Email",
    buttonText: "Subscribe",
    description: "Lore imp sum dolor Amit",

    socialMediaIcons: [
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaTwitter key="twitter" />,
    ],
  },
};

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
                {footerData.getInTouch.socialMediaIcons}
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
              <div className="h5-header-tag">{footerData.companyInfo.title}</div>
              <div className="div">
                {footerData.companyInfo.links.map((link, index) => (
                  <div className="login-register" key={index}>{link}</div>
                ))}
              </div>
            </div>
            <div className="col-md-21">
              <div className="h5-header-tag">{footerData.legal.title}</div>
              <div className="div">
                {footerData.legal.links.map((link, index) => (
                  <div className="login-register" key={index}>{link}</div>
                ))}
              </div>
            </div>
            <div className="col-md-2">
              <div className="h5-header-tag">{footerData.features.title}</div>
              <div className="div">
                {footerData.features.links.map((link, index) => (
                  <div className="login-register" key={index}>{link}</div>
                ))}
              </div>
            </div>
            <div className="col-md-21">
              <div className="h5-header-tag">{footerData.resources.title}</div>
              <div className="div">
                {footerData.resources.links.map((link, index) => (
                  <div className="login-register" key={index}>{link}</div>
                ))}
              </div>
            </div>

            <div className="col-md-47">
              <div className="h5-header-tag">{footerData.getInTouch.title}</div>
              <div className="custom-form-group-subscribe">
                <div className="input-group">
                  <div className="form-control-input-style-1">
                    <div className="your-email">
                      <input type="email" name="" id="" placeholder={footerData.getInTouch.formPlaceholder} />
                    </div>
                  </div>
                  <div className="input-group-append">
                    <button className="btn input-group-text">{footerData.getInTouch.buttonText}</button>
                  </div>
                </div>
                <div className="form-text">{footerData.getInTouch.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="div12">
        <div className="container9">
          <div className="row14">
            <div className="col-md-7">
              <span className="login-register">{`Made With Love By Finland All Right Reserved `}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
