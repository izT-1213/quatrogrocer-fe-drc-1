import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./address.css";
//history
import { useNavigate } from "react-router-dom";

function YourShippingAddressPage() {
  const navigate = useNavigate();

  return (
    <div className="address-page-container">
      <div className="address-page-header">
        <h1>My Account</h1>
        <div className="your-shipping-address-container">
          <h3>Your Shipping Address</h3>
        </div>
        <div className="shipping-details-container">
          <div className="shipping-details-table">
            <table className="address-details-table">
              <tr>
                <th className="user-name">Steven James (Default)</th>
              </tr>
              <tr>
                <td className="address">71, Persiaran Tengku Ampuan Rahimah</td>
              </tr>
              <tr>
                <td className="address">Taman Sri Andalas</td>
              </tr>
              <tr>
                <td className="address">41200</td>
              </tr>
              <tr>
                <td className="address">Klang</td>
              </tr>
              <tr>
                <td className="address">Selangor</td>
              </tr>
              <tr>
                <td>60186907892</td>
              </tr>
              <tr>
                <td>sjparty@gmail.com</td>
              </tr>
            </table>
          </div>
          <br></br>
          <div className="links">
            <Link to="/edit-address" className="edit-link">
              Edit
            </Link>

            <div className="vertical-line"></div>

            <Link to="/delete-address" className="delete-btn">
              Delete
            </Link>
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <div className="return">
          <ArrowBackIosIcon />
          <p>
            <Link to={"/profile"}>Return to Account Details</Link>
          </p>
        </div>

        <button
          className="add-address-btn"
          onClick={() => navigate("/add-address")}
        >
          <AiOutlinePlusCircle />
          Add New Address
        </button>

        {/* <button className="add-address-btn">
          <Link to="/add-address" className="add-address-link">
            <AiOutlinePlusCircle />
            Add New Address
          </Link>
        </button> */}
      </div>
    </div>
  );
}

export default YourShippingAddressPage;
