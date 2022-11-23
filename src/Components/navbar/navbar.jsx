import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../Images/white-logo.svg";
import {
  SearchOutlined,
  AccountCircleOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchProduct } from "../../function";

const Nav = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  function searchField() {
    // debugger;
    const products = SearchProduct(searchVal.toString());
    navigate("/search-result", { state: { product: products } });
  }

  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <Link to={"/"}>
            <img
              src={logo}
              className="website-logo"
              alt="Quatro Grocer's Logo"
            />
          </Link>
          <ul>
            <li onClick={() => navigate("/marketplace")}>Marketplace</li>
            <li onClick={() => navigate("/best-sellers")}>Best Sellers</li>
            <li onClick={() => navigate("/deals-&-promotions")}>
              Deals & Promotions
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <div className="search-container">
            <input
              className="searchTerm"
              type="text"
              placeholder="Search quatrogrocer.com"
              name="keyword"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
            />
            <button className="searchButton" onClick={searchField}>
              <SearchOutlined />
            </button>
          </div>
          <ul>
            <li>
              <Link to="/profile">
                <AccountCircleOutlined />
              </Link>
            </li>
            <li>
              <Link to="/cart/checkout">
                <ShoppingBagOutlined />
              </Link>
            </li>
            <li>
              <MenuIcon className="burger" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
