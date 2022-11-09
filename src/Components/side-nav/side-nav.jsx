import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./side-nav.css";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="sidenav"></div>
        <p>Hello World!</p>
      </div>
    </div>
  );
};
