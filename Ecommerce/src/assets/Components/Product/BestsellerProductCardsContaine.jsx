import ProductCardContainer from "./ProductCardContainer";
import "./BestsellerProductCardsContaine.css";

const BestsellerProductCardsContaine = () => {
  return (
    <div className="desktop-product-cards-15">
      <div className="container8">
        <div className="row9">
          <div className="main-content">
            <b className="h3-section-title">BESTSELLER PRODUCTS</b>
          </div>
        </div>
        <div className="container-child" />
        <ProductCardContainer
          productCoverImage="/productcover5@2x.png"
          productCoverVariant="/productcover51@2x.png"
          productCoverImageUrl="/productcover52@2x.png"
          productCoverVariantText="/productcover53@2x.png"
        />
        <ProductCardContainer
          productCoverImage="/productcover54@2x.png"
          productCoverVariant="/productcover55@2x.png"
          productCoverImageUrl="/productcover56@2x.png"
          productCoverVariantText="/productcover57@2x.png"
        />
      </div>
    </div>
  );
};

export default BestsellerProductCardsContaine;
