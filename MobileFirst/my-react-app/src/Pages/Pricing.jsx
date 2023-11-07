import Header from '../assets/Components/Header'
import PricingPage from '../assets/Pricing/PricingPage'
import Client from '../assets/Components/Client'
import PricingFAQsContainer from '../assets/Pricing/PricingFAQsContainer'
import PricingCardForm from '../assets/Pricing/PricingCardForm'

const Pricing = () => {
  return (
    <>
      <Header/>
      <PricingCardForm/>
      <PricingPage/>
      <Client showNewH2={true}/>
      <PricingFAQsContainer/>
    </>
  )
}

export default Pricing
