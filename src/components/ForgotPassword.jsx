import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="card">
        <p>Don’t worry, Enter your email below and we will send you a link to change password.</p>
        <input type="email" placeholder="Email" />
        <button className="btn btn-green">Submit</button>
        <Link to="/" className="btn btn-blue">Sign In</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
