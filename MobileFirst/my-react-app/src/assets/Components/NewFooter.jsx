
import { divData } from "../../assets/utils/mockData";

const NewFooter = () => {
  return (
    <div className="div">
      <div className="container">
        <div className="row">
          <div className="colmd2">
            <b className="h5">{divData.companyInfo.title}</b>
            <div className="div1">
              {divData.companyInfo.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className="colmd21">
            <div className="h5">{divData.legal.title}</div>
            <div className="div1">
              {divData.legal.links.map((link, index) => (
                <div className="link" key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className="colmd2">
            <b className="h5">{divData.features.title}</b>
            <div className="div1">
              {divData.features.links.map((link, index) => (
                <b className="link" key={index}>
                  {link}
                </b>
              ))}
            </div>
          </div>
          <div className="colmd21">
            <b className="h5">{divData.resources.title}</b>
            <div className="div1">
              {divData.resources.links.map((link, index) => (
                <b className="link" key={index}>
                  {link}
                </b>
              ))}
            </div>
          </div>
          <div className="colmd4">
            <div className="h5">{divData.getInTouch.title}</div>
            <div className="groupsubscribe">
              <div className="inputgroup">
                <div className="formcontrol">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your Email"
                    className="youremail"
                  />
                </div>
                <div className="inputappend">
                  <button className="grouptext">
                    {divData.getInTouch.buttonText}
                  </button>
                </div>
              </div>
              <div className="formtext">{divData.getInTouch.description}</div>
            </div>
          </div>
        </div>
      </div>
      <span className="copyright">
        Made With Love By Finland All Right Reserved
      </span>
    </div>
  );
};

export default NewFooter;
