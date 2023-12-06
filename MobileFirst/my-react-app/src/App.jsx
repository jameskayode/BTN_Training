import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Global.css';
import './App.css';


import Homespage from '../../../Ecommerce/src/Pages/Homespage';
import ProductListPage from '../../../Ecommerce/src/Pages/ProductListPage';
import ProductPage from '../../../Ecommerce/src/Pages/ProductPage';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import Carting from './Pages/Carting';
import Contact from './Pages/Contact';
import CartRender from './ShoppingCart/CartRender';
// import CartMe from './state/CartMe';
// import CartSection from './assets/Cart/CartSection';

function App() {
  return (

    
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Homespage/>} />
    //     <Route path="/products" element={<ProductListPage />} />
    //     <Route path="/product/:id" element={<ProductPage />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/pricing" element={<Pricing />} />
    //     <Route path="/cart" element={<Carting/>} />
    //     <Route path="/contact" element={<Contact/>} />
       
    //   </Routes>
    // </Router>
   <>
        <CartRender/>
   </>
  
  );
}

export default App;
