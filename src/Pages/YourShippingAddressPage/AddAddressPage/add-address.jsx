import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import "./add-address.css";
import {
  allPostcodes,
  getStates,
  getCities,
  getPostcodes,
  findPostcode,
} from "malaysia-postcodes";
import YourShippingAddressPage from "../address";

function AddAddressPage() {
  function clearInput() {
    document.getElementById("Form").reset();
  }
  return (
    <div className="add-address-page-container">
      <div className="my-account-header">
        <h1>My Account</h1>
      </div>
      <div className="add-new-address-container">
        <h2>Add New Address</h2>
        <div className="address-form-container">
          <div className="address-form-content">
            <form className="address-form">
              <div className="address-line-1">
                <label>Address Line 1</label>
              </div>
              <div>
                <Input
                  type="text"
                  disableUnderline={true}
                  className="address-line-1"
                  id="input"
                />
              </div>
              <div className="address-line-2">
                <label>Address Line 2</label>
              </div>
              <div>
                <Input
                  className="address-line-2"
                  type="text"
                  disableUnderline={true}
                  id="input"
                />
              </div>
              <div className="address-line-3">
                <label>Address Line 3</label>
              </div>
              <div>
                <Input
                  className="address-line-3"
                  type="text"
                  disableUnderline={true}
                  id="input"
                />
              </div>
              <div className="postcode">
                <label>Postcode</label>
              </div>
              <div>
                <Input
                  className="postcode"
                  type="text"
                  disableUnderline={true}
                  id="input"
                />
              </div>
              <div className="state">
                <label>State</label>
              </div>
              <div>
                <Input
                  className="state"
                  type="text"
                  disableUnderline={true}
                  id="input"
                />
              </div>
              <label class="default-address">
                <input type="checkbox" id="input" />
                <span class="checkmark"></span> Set as default address
              </label>
              <div className="buttons">
                <button className="cancel-btn" default-addressonClick={clearInput}>
                  Cancel
                </button>
                <button className="add-address-btn" /**onClick= */>
                  <Link to="address">Add Address</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="navigation-button">
        <button className="return-button">
          <Link to="/address" className="return-to-shipping-details">
            Return to Shipping Details
          </Link>
        </button>
      </div>
    </div>
  );
}

export default AddAddressPage;
