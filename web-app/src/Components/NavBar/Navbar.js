import React from "react";
import PropTypes from "prop-types";
import logo from "../../Images/logo.png"
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark justify-content-center text-center rounded-bottom"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1",
        backgroundColor: "black",
      }}
    >
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="" style={{height:"3rem",width:"3rem"}} />
        <h5 style={{ display: "inline" }}>SocialShield</h5>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mr-5 active">
            <Link className="nav-link" to="/">
              {" "}
              <i class="fa-solid fa-house fa-2x"></i>
              <h6 className="ml-1" style={{ display: "inline" }}>
                Home
              </h6>
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link className="nav-link" to="/complaintfile">
            <i class="fa-solid fa-book fa-2x text-light"></i>
              {/* <i class="fa-brands fa-twitter fa-2x text-light"></i> */}
              <h6 className="ml-1 text-light" style={{ display: "inline" }}>
                Complaint File
              </h6>
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link className="nav-link" to="/prediction">
              <i class="fa-sharp fa-solid fa-address-card fa-2x text-light"></i>
              <h6 className="ml-1 text-light" style={{ display: "inline" }}>
                Comments
              </h6>
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link className="nav-link" to="/login">
              <i class="fas fa-sign-in fa-solid  fa-2x text-light "></i>
              <h6 className="ml-1 text-light" style={{ display: "inline" }}>
                Login
              </h6>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


