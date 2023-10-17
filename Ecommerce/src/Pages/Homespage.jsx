
import Header from "../assets/Components/Header/Header"
import Desktop from "../assets/Components/Desktop"
import Container from "../assets/Components/Container"
import CardContainer from "../assets/Components/Productsection/CardContainer"
import ShopGuy from "../assets/Components/ShopGuy"
import ProductPopular from "../assets/Components/ProductPopular"

import NewClient from "../assets/Components/Productsection/NewClient"
import NewFooter from "../assets/Components/Footer/NewFooter"
const Homespage = () => {
  return (
    <>
  
    
    <Header/>
     <Desktop/>
    <Container/> 
    <CardContainer/>
    <ShopGuy/>
    <ProductPopular/>
    <NewClient/>
      <NewFooter/>
    </>
  )
}

export default Homespage
