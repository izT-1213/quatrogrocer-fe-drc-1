import React, { useState, useEffect, useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  GetUserAddress,
  FetchUser,
  DeleteAddressFunc,
} from "../../function.jsx";
import jwt_decode from "jwt-decode";
import AuthContext from "../../Components/context/AuthProvider.js";
import "./address.css";

function YourShippingAddressPage() {
  const navigate = useNavigate();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);

  const [addressDetails, setAddressDetails] = useState([]);

  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    setAddressDetails([]);
    GetUserAddress(userId.user_id).then(setAddressDetails);
  }, [userId.user_id]);

  useEffect(() => {
    setProfileDetails({});
    FetchUser(userId.user_id).then(setProfileDetails);
  }, [userId.user_id]);

  return (
    <div className="address-page-container">
      <div className="address-page-header">
        <h3>My Account</h3>
        <div className="your-shipping-address-container">
          <p>Your Shipping Addresses</p>
        </div>
        <div className="shipping-details-container">
          <div className="user-details-container">
            <h5 className="user-name">
              {profileDetails.first_name} {profileDetails.last_name}
            </h5>
            <p>{profileDetails.phone_number}</p>
            <p>{profileDetails.email}</p>
          </div>
          <div className="addresses-map-container">
            {addressDetails?.map(function (key, index) {
              return (
                <div className="address-card-container" key={key}>
                  {console.log(addressDetails[index]?.address_id)}
                  {index === 0 ? (
                    <div>
                      <h6>Primary address</h6>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  <p className="address">
                    {addressDetails[index]?.address_line_1}
                  </p>
                  <p className="address">
                    {addressDetails[index]?.address_line_2}
                  </p>
                  <p className="address">
                    {addressDetails[index]?.address_line_3}
                  </p>
                  <p className="address">{addressDetails[index]?.postcode}</p>
                  <p className="address">{addressDetails[index]?.state}</p>
                  <br />
                  <div className="links">
                    {/* <Link to="/edit-address" className="edit-link">
                      Edit
                    </Link> */}
                    <p
                      className="edit-link"
                      onClick={() =>
                        navigate("/edit-address", {
                          state: {
                            address_id: addressDetails[index]?.address_id,
                          },
                        })
                      }
                    >
                      Edit
                    </p>

                    <div className="vertical-line"></div>
                    <p
                      className="delete-btn"
                      onClick={async (e) => {
                        const delConfirm = window.confirm(
                          "Are you sure you want to click this card?"
                        );
                        console.log(delConfirm);
                        if (delConfirm === true) {
                          const message = await DeleteAddressFunc(
                            addressDetails[index]?.address_id
                          );
                          console.log(message);
                          if (message === 200) {
                            navigate("/profile");
                          }
                        }
                      }}
                    >
                      Delete
                    </p>

                    {/* <Link to="/delete-address" className="delete-btn">
                      Delete
                    </Link> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <div className="return">
          <ArrowBackIosIcon />
          <p onClick={() => navigate("/profile")}>Return to Account Details</p>
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
