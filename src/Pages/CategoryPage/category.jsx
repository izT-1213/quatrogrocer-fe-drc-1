import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { FetchProduct } from "../../function";
import {
  AddShoppingCart,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import "./category.css";
import SideNav from "../../Components/sidenav/sidenav.jsx";
import Pagination from "rc-pagination";

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state.category;
  const [perPage, setPerPage] = useState(8);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [productDetails, setProductDetails] = useState([]);
  const { products } = useParams();

  useEffect(() => {
    setProductDetails([]);
    FetchProduct(products).then(setProductDetails);
  }, [products]);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(
      productDetails.filter((obj) => obj.product_category === category).length /
        value
    );
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return productDetails
      .filter((obj) => obj.product_category === category)
      .slice((current - 1) * pageSize, current * pageSize);
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

  //mapping product
  const MediumHorCard = () => (
    <div className="medium-horizontal-cards-container">
      {getData(current, size).map((data, index) => {
        return (
          <div className="card-container">
            <div className="medium-horizontal-card" key={index}>
              <div
                className="product-image"
                onClick={() => {
                  navigate(`/product-details/${data.product_name}`);
                }}
              >
                <img src={data.product_image} />
              </div>
              <p
                className="product-name"
                onClick={() => {
                  navigate(`/product-details/${data.product_name}`);
                }}
              >
                {data.product_name}
              </p>
              <p className="product-price">
                <p className="RM">RM</p> {data.product_price.toFixed(2)}
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn">
                  <AddShoppingCart
                    className="cart-icon"
                    key={index}
                    onClick={() => {
                      navigate(`/product-details/${data.product_name}`);
                    }}
                  />
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
      <div className="category-page">
        <SideNav />
        <div className="category-section">
          <div className="category-section-title">
            <h5>{category}</h5>
          </div>
          <hr></hr>
          <div className="filter-info">
            <Pagination
              className="pagination-data"
              showTotal={(total, range) =>
                `Showing ${range[0]}-${range[1]} of ${total}`
              }
              onChange={PaginationChange}
              total={
                productDetails.filter(
                  (obj) => obj.product_category === category
                ).length
              }
              current={current}
              pageSize={size}
              showSizeChanger={false}
              itemRender={PrevNextArrow}
              onShowSizeChange={PerPageChange}
              showTitle={false}
            />
          </div>
          <div className="product-cards">
            <MediumHorCard />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CategoryPage;
