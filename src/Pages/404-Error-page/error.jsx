import React from "react";
import { useNavigate } from "react-router-dom";
import error_img from "./Error.png";
import "./error.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-image-container">
      <img className="img" src={error_img} alt="Error Illustration" />
      <div className="error-msg-container">
        <h2>Oops!</h2>
        <p>We've run in to some issues,</p>
        <p>we couldn't find what you're looking for.</p>
        <div className="button-container">
          <button className="button" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
