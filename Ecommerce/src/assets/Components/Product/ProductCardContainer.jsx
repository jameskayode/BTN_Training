import "./ProductCardContainer.css";
import PropTypes from 'prop-types'

const ProductCardContainer = ({
  productCoverImage,
  productCoverVariant,
  productCoverImageUrl,
  productCoverVariantText,
}) => {
  return (
    <div className="row8">
      <div className="col-md-35">
        <div className="product-card">
          <div className="fixed-height">
            <img
              className="product-cover-5-icon"
              alt=""
              src={productCoverImage}
            />
          </div>
          <div className="h5-product-title-parent">
            <b className="h5-product-title">Graphic Design</b>
            <b className="link-product-category">English Department</b>
            <div className="prices">
              <b className="h5-price">$16.48</b>
              <b className="h5-price1">$6.48</b>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-36">
        <div className="product-card">
          <div className="fixed-height">
            <img
              className="product-cover-5-icon"
              alt=""
              src={productCoverVariant}
            />
          </div>
          <div className="h5-product-title-parent">
            <b className="h5-product-title">Graphic Design</b>
            <b className="link-product-category">English Department</b>
            <div className="prices">
              <b className="h5-price">$16.48</b>
              <b className="h5-price1">$6.48</b>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-37">
        <div className="product-card">
          <div className="fixed-height">
            <img
              className="product-cover-5-icon"
              alt=""
              src={productCoverImageUrl}
            />
          </div>
          <div className="h5-product-title-parent">
            <b className="h5-product-title">Graphic Design</b>
            <b className="link-product-category">English Department</b>
            <div className="prices">
              <b className="h5-price">$16.48</b>
              <b className="h5-price1">$6.48</b>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-37">
        <div className="product-card">
          <div className="fixed-height">
            <img
              className="product-cover-5-icon"
              alt=""
              src={productCoverVariantText}
            />
          </div>
          <div className="h5-product-title-parent">
            <b className="h5-product-title">Graphic Design</b>
            <b className="link-product-category">English Department</b>
            <div className="prices">
              <b className="h5-price">$16.48</b>
              <b className="h5-price1">$6.48</b>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
ProductCardContainer.propTypes = {
  productCoverImage: PropTypes.string.isRequired,
  productCoverVariant: PropTypes.string.isRequired,
  productCoverImageUrl: PropTypes.string.isRequired,
  productCoverVariantText: PropTypes.string.isRequired,
}
export default ProductCardContainer;
