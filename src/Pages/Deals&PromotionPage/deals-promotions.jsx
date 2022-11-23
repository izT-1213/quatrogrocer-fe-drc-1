import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { FetchProduct } from "../../function";
import {
  ArrowForwardIos,
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
  AddShoppingCart,
} from "@mui/icons-material";
import "../Deals&PromotionPage/Deals&PromotionPage.css";

function DealsPromotionsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div></div>
    </div>
  );
}
export default DealsPromotionsPage;
