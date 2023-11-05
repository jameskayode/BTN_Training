import "./Global.css";
import './App.css'
import PricingCardForm from "./assets/Pricing/PricingCardForm";
import Header from './assets/Components/Header'
import PricingPage from "./assets/Pricing/PricingPage";
import Client from "./assets/Components/Client";



function App() {
  

  return (
    <>
      <Header />
    
     
      
          <PricingCardForm/>
          <PricingPage/>
          <Client showNewH2={false}/> 
         

      
      
    </>
  )
}

export default App
