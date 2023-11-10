import React from 'react';
import NavDark from '../../../../Ecommerce/src/assets/MyComponent/Header/DarkNav';
import LightNav from '../../../../Ecommerce/src/assets/MyComponent/Header/LightNav';
import FooterHead from '../assets/Components/FooterHead';
import NewFooter from '../assets/Components/NewFooter';
import Mobile from '../assets/Reuseables/Header/Mobile';
import HomeCart from '../assets/Reuseables/HomeCart';
import CartSection from '../assets/Cart/CartSection';

const Carting = () => {
  const bgColor = "green";
  return (
    <>
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <LightNav />
        <NavDark bgColor={bgColor} />
      </div>
      <HomeCart/>
      <CartSection/>
      {/* <FooterHead />
      <NewFooter /> */}
    </>
  );
}

export default Carting;

