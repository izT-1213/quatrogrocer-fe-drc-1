import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../Images/logo.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./navbar.css";

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
        </div>

        <div className="nav-middle">
          <ul>
            <li onClick={() => navigate("/marketplace")}>Marketplace</li>
            <li onClick={() => navigate("/best-sellers")}>Best Sellers</li>
            <li onClick={() => navigate("/all-new")}>All New</li>
            <li onClick={() => navigate("/deals-&-promotions")}>
              Deals & Promotions
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <ul>
            <li>
              <SearchOutlinedIcon />
            </li>
            <li>
              <AccountCircleOutlinedIcon />
            </li>
            <li>
              <ShoppingBagOutlinedIcon />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
