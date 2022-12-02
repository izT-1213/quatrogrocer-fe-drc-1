import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Input from "@material-ui/core/Input";
import "./edit-address.css";
import { UpdateAddressFunc, GetUserAddress } from "../../function";
import jwt_decode from "jwt-decode";
import AuthContext from "../../Components/context/AuthProvider.js";

function EditAddressPage() {
  const location = useLocation();
  const addId = location.state.address_id;
  console.log(addId);
  const navigate = useNavigate();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);
  const [addressDetails, setAddressDetails] = useState([]);
  const [addressValues, updateAddressValues] = useState([]);

  useEffect(() => {
    GetUserAddress(userId.user_id, addId).then(setAddressDetails);
  }, []);

  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  useEffect(() => {
    setErrMsg("");
  }, [
    addressValues.address_line_1,
    addressValues.address_line_2,
    addressValues.address_line_3,
    addressValues.postcode,
    addressValues.state,
  ]);

  const [updatedMsg, setUpdatedMsg] = useState("");

  useEffect(() => {
    setUpdatedMsg("");
  }, [
    addressValues.address_line_1,
    addressValues.address_line_2,
    addressValues.address_line_3,
    addressValues.postcode,
    addressValues.state,
  ]);

  const editAddress = async (e) => {
    console.log(addId);
    e.preventDefault();

    const message = await UpdateAddressFunc(
      addressValues.address_line_1
        ? addressValues.address_line_1.toString()
        : addressDetails.address_line_1,
      addressValues.address_line_2
        ? addressValues.address_line_2.toString()
        : addressDetails.address_line_2,
      addressValues.address_line_3
        ? addressValues.address_line_3.toString()
        : addressDetails.address_line_3,
      addressValues.postcode ? addressValues.postcode : addressDetails.postcode,
      addressValues.state
        ? addressValues.state.toString()
        : addressDetails.state,
      addId
    );
    console.log(message);

    if (message === 200) {
      navigate("/profile/addresses");
    } else {
      console.log(message);
      setErrMsg(message.error);
      setUpdatedMsg("");
    }
  };

  function clearInput() {
    document.getElementById("form").reset();
  }

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
                      placeholder={addressDetails[0]?.address_line_1}
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
                      placeholder={addressDetails[0]?.address_line_2}
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
                      placeholder={addressDetails[0]?.address_line_3}
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
                      placeholder={addressDetails[0]?.postcode}
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
                      placeholder={addressDetails[0]?.state}
                      onChange={(e) => {
                        updateAddressValues({
                          ...addressValues,
                          state: e.target.value,
                        });
                      }}
                      value={addressValues.state}
                    />
                  </div>
                </div>
                {/* <label class="default">
                  <input class="checkbox" id="input" type="checkbox" />
                  <span class="checkmark"></span>
                  Set as default address
                </label> */}
              </form>
              <div className="errMsg">
                {errMsg && (
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                )}
              </div>
              <div className="updatedMsg">
                {updatedMsg && (
                  <p
                    className={updatedMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {updatedMsg}
                  </p>
                )}
              </div>
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

        <button
          className="back-btn"
          onClick={() => navigate("/profile/addresses")}
        >
          Return to Shipping Details
        </button>
      </div>
    </div>
  );
}

export default EditAddressPage;
