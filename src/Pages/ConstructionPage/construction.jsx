import React from "react";
import { useNavigate } from "react-router-dom";
import construction_img from "./construction.gif";
import "./construction.css";

function ConstructionPage() {
  const navigate = useNavigate();

  return (
    <div className="construction-container">
      <div className="construction-content">
        <img
          className="img"
          src={construction_img}
          alt="Construction Illustration"
        />
        <h2>Ongoing Maintenance!</h2>
        <p className="maintenance-message">
          The page is currently on maintenance, please come back in a short
          while.
        </p>
        <div className="button-container">
          <button className="button" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConstructionPage;
