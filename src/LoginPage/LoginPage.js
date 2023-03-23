import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");  
  const navigate = useNavigate();

  console.log(email);
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter details correctly!");
    } else {
      alert("You are successfully logged in!");
      console.log("Your Email is: " + email + " and your password is: " + password);
      localStorage.setItem("email", email); // Save email to local storage
      localStorage.setItem("password", password); // Save password to local storage
      navigate("/home");
    }
  };
  

  return (
    <div className="container">
        <div className="facebook">
          <h1>facebook</h1>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h3 className="signinH">LogIn</h3>
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Enter your Email"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Enter your Password"
                  type="password"
                  name="password"
                  id="lpassword"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
              <li>
                <button type="submit" className="buttonn primary">
                  LogIn
                </button>
              </li>
              <li className="li">New to Facebook?</li>
              <li>
                <Link to="/register" className="buttonn secondary text-center">
                  Create your Facebook account
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;
