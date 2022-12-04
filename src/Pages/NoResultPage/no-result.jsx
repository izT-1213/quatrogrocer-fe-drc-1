import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./no-result.css";

function NoResultPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-header">
        <h6>Sorry, no result for what you are looking for</h6>
      </div>
      <div className="page-content">
        <p>Try checking the spelling or search with more generic term.</p>
      </div>
      <div className="back-btn">
        <button onClick={() => navigate("/")}>BACK TO HOME</button>
      </div>
    </div>
  );
}

export default NoResultPage;
