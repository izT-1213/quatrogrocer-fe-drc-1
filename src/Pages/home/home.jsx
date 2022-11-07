import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../home/home.css";

function Home() {
  return (
    <div className="error-image-container">
      <img className="pic" src={pic} alt="picture" />
      <div className="error-msg-container">
        <h1>Oops !</h1>
        <br></br>
        <h3> We've run in to some issues,</h3>
        <h3>we couldn't find what you're looking for.</h3>
        <button className="button"> BACK TO HOME</button>
      </div>
    </div>
  );
}
export default Home;
