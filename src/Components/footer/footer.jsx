import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/teal-logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../footer/footer.css";

const Footer = () => {
  const location = useLocation();
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <Link to={"/"}>
              <img
                src={logo}
                className="website-logo"
                alt="Quatro Grocer's Logo"
              />
            </Link>
          </div>

          <div className="footer-top-right">
            <div className="company-desc">
              <p>COMPANY</p>
              <ul>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/career"}>Career With Us</Link>
                </li>
              </ul>
            </div>

            <div className="page-directory">
              <p>SHOP</p>
              <ul>
                <li>
                  <Link to={"/marketplace"}>Marketplace</Link>
                </li>
                <li>
                  <Link to={"/best-sellers"}>Best Sellers</Link>
                </li>
                <li>
                  <Link to={"/all-new"}>All New</Link>
                </li>
                <li>
                  <Link to={"/deals-&-promotions"}>Deals & Promotions</Link>
                </li>
              </ul>
            </div>

            <div className="policies-directory">
              <p>POLICIES</p>
              <ul>
                <li>
                  <Link to={"/refund-policy"}>Refund Policy</Link>
                </li>
                <li>
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/shipping-policy"}>Shopping Policy</Link>
                </li>
                <li>
                  <Link to={"/terms-of-service"}>Terms of Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="line-2" />

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>All Rights Reserved 2022 © by Quatro Grocer</p>
          </div>

          <div className="footer-bottom-right">
            <ul>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
