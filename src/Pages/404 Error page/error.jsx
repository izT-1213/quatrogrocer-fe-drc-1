import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./error.css";
import pic from "./Error.png";

function ErrorPage() {
  return (
    <div className = "error-page-container">
        <div className= "error-image-container">
           <img>src= {pic} alt="picture"</img> 
           <div className="error-msg-container">
                
            </div>
    </div>
    </div>
  );
}
export default ErrorPage;
