// import React from 'react';
import PropTypes from 'prop-types';
// import '../navbar.css';

const ProductCard = ({ imageUrl, title, category, price, discountPrice, colors, column }) => {
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
 
};

export default ProductCard;
