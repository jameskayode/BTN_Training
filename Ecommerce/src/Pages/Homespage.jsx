
import Desktop from '../assets/Components/Desktop'
import Container from '../assets/Components/Container'
import ProductCard from '../assets/Components/ProductCard'
import ProductPopular from '../assets/Components/ProductPopular'
import ProductBest from "../assets/Components/ProductBest"
//  import Footer from "../assets/Components/Footer"
import Navbar from '../assets/Components/Navbar'
import ShopGuy from '../assets/Components/ShopGuy'
import NewFooter from '../assets/Components/Footer/NewFooter'

const Homespage = () => {
  return (
    <>
    <Navbar/>   
     <Desktop/>
       <Container/>
       <ProductCard/>
        <ShopGuy/>
        <ProductPopular/> 
        <ProductBest/> 
          <NewFooter/>
    
    
    
    </>
  )
}

export default Homespage
