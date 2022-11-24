import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { FetchProduct } from "../../function";
import { AddShoppingCart } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "../BestSellerPage/bestseller.css";

function BestSellerPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const notify = () => {
    toast.success("Item added to cart! 🛒", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const MediumHorCard = () => (
    <div className="medium-horizontal-cards-container"></div>
  );

  return (
    <div>
      <div className="best-seller-page">
        <div className="best-seller-section">
          <div className="best-seller-title">
            <h5>Best Seller</h5>
          </div>
          <hr></hr>
          <div className="best-seller-product-cards">
            <MediumHorCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BestSellerPage;
