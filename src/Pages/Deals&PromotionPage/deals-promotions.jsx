import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { FetchProduct } from "../../function";
import {
  AddShoppingCart,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "../Deals&PromotionPage/deals-promotions.css";

function DealsPromotionsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Pagination
  const [perPage, setPerPage] = useState(8);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [productDetails, setProductDetails] = useState([]);
  const { products } = useParams();

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

  useEffect(() => {
    setProductDetails([]);
    FetchProduct(products).then(setProductDetails);
  }, [products]);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(productDetails.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return productDetails.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left">
            <ArrowBackIos />
          </i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right">
            <ArrowForwardIos />
          </i>
        </button>
      );
    }
    return originalElement;
  };

  const MediumHorCard = () => (
    <div className="medium-horizontal-cards-container">
      {getData(current, size).map((data, index) => {
        return (
          <div className="card-container">
            <div className="medium-horizontal-card" key={index}>
              <div
                className="product-image"
                onClick={() => {
                  navigate(`/product-details/${data.product_name}`, {
                    state: {
                      product_name: data.product_name,
                      product_description: data.product_description,
                      product_category: data.product_category,
                      product_price: data.product_price,
                      product_quantity: data.product_quantity,
                      product_image: data.product_image,
                      product_id: data.product_id,
                    },
                  });
                }}
              >
                <img src={data.product_image} />
              </div>
              <p
                className="product-name"
                onClick={() => {
                  navigate(`/product-details/${data.product_name}`, {
                    state: {
                      product_name: data.product_name,
                      product_description: data.product_description,
                      product_category: data.product_category,
                      product_price: data.product_price,
                      product_quantity: data.product_quantity,
                      product_image: data.product_image,
                      product_id: data.product_id,
                    },
                  });
                }}
              >
                {data.product_name}
              </p>
              <p className="product-price">
                <p className="RM">RM</p> {data.product_price.toFixed(2)}
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn" onClick={notify}>
                  <AddShoppingCart className="cart-icon" key={index} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className="deals-promotions-page">
        <div className="deals-promotions-section">
          <div className="deals-promotions-title">
            <h5>Deals & Promotions</h5>
          </div>
          <hr></hr>
          <div className="product-cards">
            <MediumHorCard />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default DealsPromotionsPage;
