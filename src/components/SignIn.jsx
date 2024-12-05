import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SignIn = () => {
    const [userdata, setUserdata] = useState("");
    

  return (
    <div className="container">
      <div className="card">
        <h2>Helpdesk System</h2>
        <input type="text" placeholder="Username" name="name"/>
        <input type="password" placeholder="Password"  />
        <button className="btn btn-green">Sign In</button>
        <div className="links">
          <Link to="/forgot-password" className="link-red">Forgot password</Link>
          <Link to="/signup" className="link-blue">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
