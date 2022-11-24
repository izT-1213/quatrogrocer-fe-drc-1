import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../Images/white-logo.svg";
import {
  SearchOutlined,
  AccountCircleOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const navigate = useNavigate();

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
            <form action="/">
              <input
                className="searchTerm"
                type="text"
                placeholder="Search quatrogrocer.com"
                name="search"
              />
              <button className="searchButton" type="submit">
                <SearchOutlined />
              </button>
            </form>
          </div>
          <ul>
            <li>
              <AccountCircleOutlined onClick={() => navigate("/profile")} />
            </li>
            <li>
              <ShoppingBagOutlined onClick={() => navigate("/cart/checkout")} />
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
