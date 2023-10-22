import DarkNav from "../../src/assets/MyComponent/Header/DarkNav"
import LightNav from "../../src/assets/MyComponent/Header/LightNav"
import Bannner from "../../src/assets/MyComponent/Banner/Bannner"
import Editor from "../assets/MyComponent/Editors/Editor"
import BestSeller from "../assets/MyComponent/MyProductCardSection/BestSeller"
import ShopGuy from "../assets/MyComponent/shopGuy/ShopGuy"
import ProductPopular from "../assets/MyComponent/Asian/ProductPopular"
import ProductB from "../assets/MyComponent/Featured/ProductB"
import NewFooter from "../assets/MyComponent/Footer/NewFooter"
import FooterHead from "../assets/MyComponent/FooterHead"


const Homespage = () => {
  return (
    <>
    <DarkNav/>
    <LightNav/>
      <Bannner />
      
      <Editor />
      <BestSeller />
      <ShopGuy />
      <ProductPopular />  
      <ProductB />
      <FooterHead/>
      <NewFooter/>  
    </>
  )
}

export default Homespage
