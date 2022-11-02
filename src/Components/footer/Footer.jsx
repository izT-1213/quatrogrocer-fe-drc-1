import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "../footer/footer.css";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/signup" || "/signin") return null;

  return (
    <footer>
      <div className="footer-container">
        <div className="company-desc">
          <p>Company</p>
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
          <p>Shop</p>
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

        <div className="policies">
          <p>Policies</p>
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
              <Link to={"/terms-of-service"}>Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-content">
        <p>All Right Reserved 2022 © by Quatro Grocer</p>
      </div>
    </footer>
  );
};

export default Footer;
