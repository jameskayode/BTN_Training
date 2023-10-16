// import React from 'react';
import './footer.css';

const divData = {
  companyInfo: {
    title: 'Company Info',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  legal: {
    title: 'Legal',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  features: {
    title: 'Features',
    links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
  },
  resources: {
    title: 'Resources',
    links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
  },
  getInTouch: {
    title: 'Get In Touch',
    formPlaceholder: 'Your Email',
    buttonText: 'Subscribe',
    description: 'Lore imp sum dolor Amit',
  },
};


const NewFooter = () => {
  return (
    <div className="div">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <b className="h5">{divData.companyInfo.title}</b>
            <div className="div1">
              {divData.companyInfo.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-21">
            <div className="h5">{divData.legal.title}</div>
            <div className="div1">
              {divData.legal.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-2">
            <b className="h5">{divData.features.title}</b>
            <div className="div1">
              {divData.features.links.map((link, index) => (
                <b className="link" key={index}>
                  {link}
                </b>
              ))}
            </div>
          </div>
          <div className="col-md-21">
            <b className="h5">{divData.resources.title}</b>
            <div className="div1">
              {divData.resources.links.map((link, index) => (
                <b className="link" key={index}>
                  {link}
                </b>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="h5">{divData.getInTouch.title}</div>
            <div className="custom-form-group-subscribe">
              <div className="input-group">
                <div className="form-control-input-style-1">
                  <input type="email" name="" id="" placeholder="Your Email"  className="your-email"/>
                </div>
                <div className="input-group-append">
                  {/* <button className=""> */}
                    <button className="btn input-group-text ">{divData.getInTouch.buttonText}</button>
                  {/* </button> */}
                </div>
              </div>
              <div className="form-text">{divData.getInTouch.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
              