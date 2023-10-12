
import './navbar.css';
const ProductPopular = () => {
  return (
    
    <div className="container-fluid">
    <div className="row9">
      <div className="col-md-63">
        <div className="media-bg-cover">
          <div className="none">
            <img
              className="asian-woman-man-with-winter-cl-icon"
              alt=""
              src="/src/assets/images/asian-woman-man-with-winter-clothes-1.png"
            />
          </div>
        </div>
      </div>
      <div className="col-md-64">
        <b className="h5-header-tag">SUMMER 2020</b>
        <b className="h1-headline">
          <p className="we-know-how">{`Part of the Neural `}</p>
          <p className="we-know-how">Universe</p>
        </b>
        <div className="h4-sub-headline">
          <p className="we-know-how">{`We know how large objects will act, `}</p>
          <p className="we-know-how">but things on a small scale.</p>
        </div>
        <div className="cta2">
          <button className="buttonbtnprimary-colorbtn-l btn-text">
          BUY NOW
          </button>
          <button className="button-md2 btn-text" >
             READ MORE
          </button>
        </div>
      </div>
    </div>
  </div>
            
            );
    };
    
    

export default ProductPopular;
