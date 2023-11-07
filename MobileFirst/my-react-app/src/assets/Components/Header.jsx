import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsCart, BsArrowRight } from "react-icons/bs";
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
  const navItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/products",
      name: "Product",
    },
    {
      href: "/pricing",
      name: "Pricing",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <header>
      <section className="Mobile-nav">
        <span className="logo"><Link to="/">Bandage</Link></span>
        <div className="mobile-icons">
          <BsSearch />
          <BsCart />
          <TbMenuDeep />
        </div>
      </section>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="account">
        <Link to="/login">Login</Link>
        <button className="btn btn-mid btn-primary">
          Become a Member <BsArrowRight />
        </button>
      </section>
    </header>
  );
}

export default Header;
