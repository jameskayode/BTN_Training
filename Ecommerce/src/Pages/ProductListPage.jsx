import NavDark from "../assets/MyComponent/Header/DarkNav";
import LightNav from "../assets/MyComponent/Header/LightNav";
import ShopPage from "../assets/MyComponent/Productsection/ShopCard/ShopPage";
import ShopListContainer1 from "../assets/MyComponent/Productsection/ShopCard/ShopListContainer1";
import ProductListSection from "../assets/MyComponent/Productsection/ProductListSection";
import Client from "../assets/MyComponent/Client/Client";
import FooterHead from "../assets/MyComponent/FooterHead";
import NewFooter from "../assets/MyComponent/Footer/NewFooter";


const ProductListPage = () => {
  return (
    <>
      <NavDark bgColor="greenBackground" />
      <LightNav />
      <ShopListContainer1/>
      <ShopPage />
      <ProductListSection />
      <Client />
      <FooterHead />
      <NewFooter/>
    </>
  );
};

export default ProductListPage;
