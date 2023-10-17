
import Navbar from '../assets/Components/Header/Navbar'
import FirstSection from '../assets/Components/Productsection/FirstSection'
import CardContainer from '../assets/Components/Productsection/CardContainer'
import NewClient from '../assets/Components/Productsection/NewClient'
import NewFooter from '../assets/Components/Footer/NewFooter'


const ProductListPage = () => {
  return (
    <>
      <Navbar/>
        <FirstSection/>
        <CardContainer/>
        <NewClient/>
         <NewFooter/>
    </>
  )
}

export default ProductListPage
