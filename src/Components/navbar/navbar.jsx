import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../Images/white-logo.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./navbar.css";

const Nav = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => e.preventDefault();

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
                <SearchOutlinedIcon />
              </button>
            </form>
          </div>
          <ul>
            <li>
              <AccountCircleOutlinedIcon onClick={() => navigate("/profile")} />
            </li>
            <li>
              <ShoppingBagOutlinedIcon
                onClick={() => navigate("/cart/checkout")}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
