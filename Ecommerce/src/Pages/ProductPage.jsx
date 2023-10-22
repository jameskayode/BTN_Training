import NavDark from "../assets/MyComponent/Header/DarkNav"
import LightNav from "../assets/MyComponent/Header/LightNav"
import ShopListContainer1 from "../assets/MyComponent/Productsection/ShopCard/ShopListContainer1"
import FlootingCard from "../assets/MyComponent/Product/FlootingCard";
import ProductDescription from "../assets/MyComponent/Product/ProductDescription";
import ProductSellers from "../assets/MyComponent/Product/ProductSellers";
import Client from "../assets/MyComponent/Client/Client";
import FooterHead from "../assets/MyComponent/FooterHead";
import NewFooter from "../assets/MyComponent/Footer/NewFooter";

const ProductPage = () => {
  return (
    <>
      <NavDark bgColor="greenBackground" />
      <LightNav />
      <ShopListContainer1 />
      <FlootingCard />
      <ProductDescription />
      <ProductSellers />
      <Client />
      <FooterHead />
      <NewFooter/>

    </>
  )
}

export default ProductPage
