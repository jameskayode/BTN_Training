import "./Global.css";
import './App.css'
import PricingCardForm from "./assets/Pricing/PricingCardForm";
// import Banner from './assets/Components/Banner'
// import Callout from './assets/Components/Callout'
// import Client from './assets/Components/Client'
// import Counter from './assets/Components/Counter'
// import FooterHead from './assets/Components/FooterHead'
import Header from './assets/Components/Header'
import PricingPage from "./assets/Pricing/PricingPage";

// import NewFooter from './assets/Components/NewFooter'
// import Team from './assets/Components/Team'
// import Testimonial from './assets/Components/Testimonial'
// import Videocard from './assets/Components/Videocard'

// import Tailwind from "./assets/Components/Tailwind";

function App() {
  

  return (
    <>
      <Header />
      {/* <Banner />
      <Callout />
      <Counter />
      <Videocard />
      <Team />
      <Client />
      <Testimonial /> 
      <FooterHead /> 
      <NewFooter/>  */}
      
          <PricingCardForm/>
          <PricingPage/>
         

      
      
    </>
  )
}

export default App
