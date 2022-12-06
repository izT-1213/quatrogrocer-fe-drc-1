import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CreateAddressFunc } from "../../function";
import jwt_decode from "jwt-decode";
import Input from "@material-ui/core/Input";
import "../AddAddressPage/add-address.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AuthContext from "../../Components/context/AuthProvider";

function AddAddressPage() {
  const jwtToken = useContext(AuthContext).auth?.token;
  const navigate = useNavigate();
  const userId = jwt_decode(jwtToken);
  const [addressValues, setAddressValues] = useState({
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    postcode: "",
    state: "",
  });

  // const [tempAddressValues, setTempAddressValues] = useState({
  //   address_line_1: "",
  //   address_line_2: "",
  //   address_line_3: "",
  //   postcode: "",
  //   state: "",
  // });

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

  const addAddress = async (e) => {
    e.preventDefault();

    const message = await CreateAddressFunc(
      addressValues.address_line_1.toString(),
      addressValues.address_line_2.toString(),
      addressValues.address_line_3.toString(),
      addressValues.postcode,
      addressValues.state,
      userId.user_id
    );

    if (message === 200) {
      alert("Address is successfully added.");
      navigate("/profile");
    } else {
      console.log(message);
      setErrMsg(message.error);
      setUpdatedMsg("");
    }
  };

  function clearInput() {
    navigate("/profile");
  }

  return (
    <div className="add-address-page-container">
      <div className="container-1">
        <div className="my-account-header">
          <h3>My Account</h3>
        </div>
        <div className="add-new-address-container">
          <h6>Add New Address</h6>
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
                    <label>Address Line 2*</label>
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
                    <label>Address Line 3*</label>
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
                    <label>Postcode*</label>
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
                    <label>State*</label>
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
                </div>
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
                  className="add-address-btn"
                  type="submit"
                  disabled={
                    addressValues.address_line_1 &&
                    addressValues.address_line_2 &&
                    addressValues.postcode &&
                    addressValues.state
                      ? false
                      : true
                  }
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
          <ArrowBackIosIcon onClick={() => navigate("/profile/addresses")} />
          <p onClick={() => navigate("/profile/addresses")}>
            Return to Shipping Address
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddAddressPage;
