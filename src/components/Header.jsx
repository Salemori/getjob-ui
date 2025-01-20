import React from "react";
import logo from "../assets/getajob_logo-removebg-preview.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <p>Companies</p>
        <p>Candidates</p>
        <p>Assessments</p>
        <p>Post a Job</p>
        <p>Career Advice</p>
      </div>
      <div className="log-sign-in">
        <a href="#">Sign Up</a>
        <button>Log In</button>
      </div>
    </header>
  );
};

export default Header;
