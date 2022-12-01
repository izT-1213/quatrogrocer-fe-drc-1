import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../Images/white-logo.svg";
import {
  SearchOutlined,
  AccountCircleOutlined,
  ShoppingBagOutlined,
  Close,
  Menu,
} from "@mui/icons-material";
import "./navbar.css";

const Nav = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  function searchField() {
    // debugger;
    const products = searchVal;
    navigate(`/search-result/${products}`);
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
          <div className="nav-right-menu">
            <ul>
              <li>
                <AccountCircleOutlined onClick={() => navigate("/profile")} />
              </li>
              <li>
                <ShoppingBagOutlined
                  onClick={() => navigate("/cart/checkout")}
                />
              </li>
            </ul>
          </div>
          <div className="mobile">
            <Menu className="burger" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
