import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidenav.css";

function SideNav() {
  const navigate = useNavigate();

  return (
    <div className="side-nav">
      <div className="side-nav-title">
        <h4>Category</h4>
      </div>
      <div className="category-list">
        <ul>
          <li
            onClick={() =>
              navigate("/category/beverages", {
                state: { category: "Beverages" },
              })
            }
          >
            Beverages
          </li>
          <li
            onClick={() =>
              navigate("/category/bread-&-pastry", {
                state: { category: "Bread & Pastry" },
              })
            }
          >
            Bread & Pastry
          </li>
          <li
            onClick={() =>
              navigate("/category/canned-food", {
                state: { category: "Canned Food" },
              })
            }
          >
            Canned Food
          </li>
          <li
            onClick={() =>
              navigate("/category/cereal", {
                state: { category: "Cereal" },
              })
            }
          >
            Cereal
          </li>
          <li
            onClick={() =>
              navigate("/category/confectionary", {
                state: { category: "Confectionary" },
              })
            }
          >
            Confectionary
          </li>
          <li
            onClick={() =>
              navigate("/category/condiments", {
                state: { category: "Condiments" },
              })
            }
          >
            Condiments
          </li>
          <li
            onClick={() =>
              navigate("/category/dairy", { state: { category: "Dairy" } })
            }
          >
            Dairy
          </li>
          <li
            onClick={() =>
              navigate("/category/frozen-dairy", {
                state: { category: "Frozen Dairy" },
              })
            }
          >
            Frozen Dairy
          </li>
          <li
            onClick={() =>
              navigate("/category/fruits", {
                state: { category: "Fruits" },
              })
            }
          >
            Fruits
          </li>
          <li
            onClick={() =>
              navigate("/category/jam", { state: { category: "Jam" } })
            }
          >
            Jam
          </li>
          <li
            onClick={() =>
              navigate("/category/meat", { state: { category: "Meat" } })
            }
          >
            Meat
          </li>
          <li
            onClick={() =>
              navigate("/category/pet-food", {
                state: { category: "Pet Food" },
              })
            }
          >
            Pet Food
          </li>
          <li
            onClick={() =>
              navigate("/category/snacks", {
                state: { category: "Snacks" },
              })
            }
          >
            Snacks
          </li>
          <li
            onClick={() =>
              navigate("/category/tea-coffee-chocolate-drinks", {
                state: { category: "Tea, Coffee, Chocolate Drinks" },
              })
            }
          >
            Tea, Coffee, Chocolate Drinks
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
