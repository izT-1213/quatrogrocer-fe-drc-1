// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import "./edit-address.css";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function EditAddressPage() {
  
  function clearInput() {
    document.getElementById("form").reset();
  }

  const navigate = useNavigate();
  return (
    <div className="add-address-page-container">
      <div className="container-1">
        <div className="my-account-header">
          <h1>My Account</h1>
        </div>
        <div className="add-new-address-container">
          <h2>Edit Address</h2>
          <div className="address-form-container">
            <div className="address-form-content">
              <form className="address-form" id="form">
                <div className="address-line-container">
                  <div className="address-line-1">
                    <label>Address Line 1</label>
                    <Input
                      type="text"
                      disableUnderline={true}
                      className="address-line-1"
                      id="input"
                      defaultValue="71, Persiaran Tengku Ampuan Rahmia"
                    />
                  </div>

                  <div className="address-line-2">
                    <label>Address Line 2</label>
                    <Input
                      className="address-line-2"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      defaultValue="Taman Sri Andalas"
                    />
                  </div>

                  <div className="address-line-3">
                    <label>Address Line 3</label>
                    <Input
                      className="address-line-3"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      defaultValue="Klang"
                    />
                  </div>
                </div>

                <div className="postcode-and-state-container">
                  <div className="postcode">
                    <label>Postcode</label>
                    <Input
                      className="postcode"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      defaultValue="41200"
                    />
                  </div>

                  <div className="state">
                    <label>State</label>
                    <Input
                      className="state"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      defaultValue="Selangor"
                    />
                  </div>
                </div>
                {/* <label class="default-address">
                  <input type="checkbox" id="input" />
                  <span class="checkmark"></span> Set as default address
                </label> */}
              </form>
              <div className="buttons">
                <button className="cancel-btn" onClick={clearInput}>
                  Cancel
                </button>
                <button
                  className="update-address-btn"
                  /*onClick={() => navigate("/address")}*/
                >
                  Update Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container">
        <div className="left-icon">
          <SlArrowLeft />
        </div>

        <button class="back-btn" onClick={() => navigate("/address")}>
          Return to Shipping Details
        </button>
      </div>
    </div>
  );
}

export default EditAddressPage;
