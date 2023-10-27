import { BsSearch, BsCart, BsArrowRight } from "react-icons/bs";
import { TbMenuDeep } from "react-icons/tb";
const Header = () => {
  return (
    <header>
      <section className="Mobile-nav">
        <span className="logo">Bandage</span>
        <div className="mobile-icons">
          <BsSearch />
          <BsCart />
          <TbMenuDeep />
        </div>
      </section>
      <nav>
        <ul>
          {navITems.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="account">
        <a href="#">Login</a>
        <button className="btn btn-mid btn-primary">
          Become a Member <BsArrowRight />
        </button>
      </section>
    </header>
  );
}
const navITems = [
  {

    href: "#",
    name: "Home",
  },
  {

    href: "#",
    name: "Product",
  },
  {

    href: "#",
    name: "Pricing",
  },
  {

    href: "#",
    name: "Contact",
  },

]

export default Header;
