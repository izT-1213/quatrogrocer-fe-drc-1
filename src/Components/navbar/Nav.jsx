import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";

function Nav() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <div>
      <nav className="nav">
        <Link to="/MainPage" className="nav__Brand">
          <img className="logo" alt="" src="" />
        </Link>
        <div onClick={navToggle} className={toggleIcon}></div>
        <ul className={active}>
          <li className="nav__main_item">
            <Link to="/MainPage" className="nav__link">
              Marketplace
            </Link>
          </li>
          <li className="nav__main_item">
            <Link to="/BestSellers" className="nav__link">
              Best Sellers
            </Link>
          </li>
          <li className="nav_main_item">
            <Link to="/NewItems" className="nav__link">
              All New
            </Link>
          </li>
          <li className="nav__main_item">
            <Link to="/Deals" className="nav__link">
              Deals & Promotions
            </Link>
          </li>
          {/*searchbar popsup*/}
          <li className="nav__users">
            <Link to="/ProfilePage" className="nav__link">
              <img className="user" alt="" src="" />
            </Link>
          </li>
          {/* Cart component pops up */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
