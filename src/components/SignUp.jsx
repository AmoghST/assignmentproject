import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Helpdesk System</h2>
        <p>Sign up here</p>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="email" placeholder="Email" />
        <button className="btn btn-blue">Sign Up</button>
        <div className="links">
          <Link to="/forgot-password" className="link-red">Forgot password</Link>
          <Link to="/" className="link-blue">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
