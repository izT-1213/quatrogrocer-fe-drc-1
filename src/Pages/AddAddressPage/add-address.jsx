import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import "../AddAddressPage/add-address.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { CreateAddressFunc } from "../../function";

function AddAddressPage() {
  const [addressValues, setAddressValues] = useState({
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    postcode: "",
    state: "",
    user_id: "",
  });

  const addAddress = async (e) => {
    e.preventDefault();

    CreateAddressFunc(
      addressValues.address_line_1.toString(),
      addressValues.address_line_2.toString(),
      addressValues.address_line_3.toString(),
      addressValues.postcode.toString(),
      addressValues.state.toString(),
      addressValues.user_id
    );
  };

  function clearInput() {
    document.getElementById("form").reset();
  }
  const navigate = useNavigate();
  return (
    <div className="add-address-page-container">
      <div className="container-1">
        <div className="my-account-header">
          <h3>My Account</h3>
        </div>
        <div className="add-new-address-container">
          <p>Add New Address</p>
          <div className="address-form-container">
            <div className="address-form-content">
              <form className="address-form" id="form">
                <div className="address-line-container">
                  <div className="address-line-1">
                    <label>Address Line 1 *</label>
                    <Input
                      type="text"
                      disableUnderline={true}
                      className="address-input"
                      id="input"
                      placeholder="Address Line 1"
                      onChange={(e) => {
                        setAddressValues({
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
                      className="address-input"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      placeholder="Address Line 2"
                      onChange={(e) => {
                        setAddressValues({
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
                      className="address-input"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      placeholder="Address Line 3"
                      onChange={(e) => {
                        setAddressValues({
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
                      className="postcode-input"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      placeholder="Postcode"
                      onChange={(e) => {
                        setAddressValues({
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
                      className="state-input"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      onChange={(e) => {
                        setAddressValues({
                          ...addressValues,
                          state: e.target.value,
                        });
                      }}
                      value={addressValues.state}
                    />
                  </div>
                  <div className="state">
                    <label>User ID</label>
                    <Input
                      className="userid-input"
                      type="text"
                      disableUnderline={true}
                      id="input"
                      onChange={(e) => {
                        setAddressValues({
                          ...addressValues,
                          user_id: e.target.value,
                        });
                      }}
                      value={addressValues.user_id}
                    />
                  </div>
                </div>

                <div className="checkbox-container">
                  <label class="default">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    Set as default address
                  </label>
                </div>
              </form>
              <div className="buttons">
                <button className="cancel-btn" onClick={clearInput}>
                  Cancel
                </button>
                <button
                  className="add-address-btn"
                  type="submit"
                  onClick={addAddress} /*onClick={handleAddAddress}*/
                >
                  Add Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container">
        <div className="return">
          <ArrowBackIosIcon />
          <p onClick={() => navigate("/profile")}>Return to Account Details</p>
        </div>
      </div>
    </div>
  );
}

export default AddAddressPage;
