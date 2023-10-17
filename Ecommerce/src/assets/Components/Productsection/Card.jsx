// import React from 'react';
import PropTypes from 'prop-types';
import './client.css';

const ProductCard = ({ imageUrl, title, category, price, discountPrice, colors, column, fruit }) => {
  return (
    <div className={`col-md-${column}`}>
      <div className="product-card">
        <div className="fixed-height">
          <img className="card-cover-5-icon" alt="" src={imageUrl} />
        </div>
        <div className="h5-product-title-parent">
          <b className="h5-product-title">{title}</b>
          <b className="link-product-category">{category}</b>
          <div className="prices">
            <b className="h5-price">${price}</b>
            <b className="h5-price1">${discountPrice}</b>
          </div>
          <div className="product-colors">
            {colors.map((color, index) => (
              <div key={index} className="product-colors-item" style={{ backgroundColor: color }} />
            ))}

          </div>
          {/* {
            fruit==="Banana"  ? <p>Banana is healthy</p> : fruit==="Mango" ? <p>Eat belleful</p>: <p>Eat anything else</p> 
            
          } */}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  column: PropTypes.number.isRequired,
  // fruit: PropTypes.string.isRequired
};

export default ProductCard;
