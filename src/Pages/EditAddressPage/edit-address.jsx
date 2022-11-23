import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Input from "@material-ui/core/Input";
import "./edit-address.css";
import { UpdateAddressFunc } from "../../function";

function EditAddressPage() {
  const [addressValues, updateAddressValues] = useState({
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    postcode: "",
    state: "",
    address_id: "",
  });

  const editAddress = async (e) => {
    e.preventDefault();

    UpdateAddressFunc(
      addressValues.address_line_1.toString(),
      addressValues.address_line_2.toString(),
      addressValues.address_line_3.toString(),
      addressValues.postcode.toString(),
      addressValues.state.toString(),
      addressValues.address_id
    );
  };

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
                      placeholder="Address Line 1"
                      onChange={(e) => {
                        updateAddressValues({
                          ...addressValues,
                          address_line_1: e.target.value,
                        });
                      }}
                      value={addressValues.address_line_1}
                    />
                  </div>

                  <div className="address-line-2">
                    <label>Address Line 2</label>
                    <Input
                      className="address-line-2"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      placeholder="Address Line 2"
                      onChange={(e) => {
                        updateAddressValues({
                          ...addressValues,
                          address_line_2: e.target.value,
                        });
                      }}
                      value={addressValues.address_line_2}
                    />
                  </div>

                  <div className="address-line-3">
                    <label>Address Line 3</label>
                    <Input
                      className="address-line-3"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      placeholder="Address Line 3"
                      onChange={(e) => {
                        updateAddressValues({
                          ...addressValues,
                          address_line_3: e.target.value,
                        });
                      }}
                      value={addressValues.address_line_3}
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
                      placeholder="Postcode"
                      onChange={(e) => {
                        updateAddressValues({
                          ...addressValues,
                          postcode: e.target.value,
                        });
                      }}
                      value={addressValues.postcode}
                    />
                  </div>

                  <div className="state">
                    <label>State</label>
                    <Input
                      className="state"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      placeholder="State"
                      onChange={(e) => {
                        updateAddressValues({
                          ...addressValues,
                          state: e.target.value,
                        });
                      }}
                      value={addressValues.state}
                    />
                  </div>
                  <div className="address-id">
                    <label>Address ID</label>
                    <Input
                      className="address-id"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      placeholder="Address ID"
                      onChange={(e) => {
                        updateAddressValues({
                          ...addressValues,
                          address_id: e.target.value,
                        });
                      }}
                      value={addressValues.address_id}
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
                  type="submit"
                  onClick={editAddress}
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

        <button class="back-btn" onClick={() => navigate("/address")}>
          Return to Shipping Details
        </button>
      </div>
    </div>
  );
}

export default EditAddressPage;
