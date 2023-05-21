import React from "react";
import Logo from "./assets/logo.svg";
import "./Navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#">
                <img src={Logo} className="logo-img"/>
            </a>
            <div className="logo-name">
              VICTORIA VU
            </div>
          </div>
          <div className="nav-content">
            <ul>
              <li>
                <a href="#">WORK</a>
              </li>
              <li>
                <a href="#">ABOUT ME</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    );
}

export default Navbar;