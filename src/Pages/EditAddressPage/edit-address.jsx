import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Input from "@material-ui/core/Input";
import "./edit-address.css";

function EditAddressPage() {
  function clearInput() {
    document.getElementById("form").reset();
  }

  const navigate = useNavigate();
  return (
    <div className="edit-address-page-container">
      <div className="container-1">
        <div className="my-account-header">
          <h3>My Account</h3>
        </div>
        <div className="edit-new-address-container">
          <p>Edit Address</p>
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
                {/* <label class="default">
                  <input class="checkbox" id="input" type="checkbox" />
                  <span class="checkmark"></span>
                  Set as default address
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
      <div className="navigation-buttons">
        <div className="return">
          <ArrowBackIosIcon />
          <p onClick={() => navigate("/profile")}>Return to Account Details</p>
        </div>
      </div>
    </div>
  );
}

export default EditAddressPage;
