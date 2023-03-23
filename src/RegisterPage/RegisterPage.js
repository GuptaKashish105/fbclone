import React, { useState } from "react";
import "./RegisterPage.css"
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReEnterPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // new state variable for showing/hiding password

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !reenterpassword || !name) {
      alert("Please enter all the details correctly!");
    } else if (password !== reenterpassword) {
      setPasswordMatch(false);
    } else {
      alert("You are successfully registered!");
      console.log("Your Email is: " + email + " and your password is: " + password);
      localStorage.setItem("email", email); 
      localStorage.setItem("name", name); 
      localStorage.setItem("password", reenterpassword); 
      navigate("/home");
    }
  };

  return (
    <div className="container">
      <div className="fb">
        <h3 className="fbline">
          Facebook helps you connect and share with the people in your life.
        </h3>
        <img src="/images/connect.jpg" alt="code line" />
      </div>
      <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3 className="registerH">Create Your Account</h3>
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your name"
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <div style={{display: "flex"}}>
              <input
                placeholder="Enter your Password"
                type={showPassword ? "text" : "password"} 
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="checkbox"
                onClick={() => setShowPassword(!showPassword)} 
                style={{marginRight: 10}}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
          </li>
          <li>
            <label htmlFor="reenterpassword">Re-enter Password</label>
            <input
              placeholder="Enter your Password again"
              type="password"
              name="reenterpassword"
              id="reenterpassword"
              onChange={(e) => setReEnterPassword(e.target.value)}
            />
            {!passwordMatch && <div>Passwords do not match</div>} 
          </li>
          <li>
            <button type="submit" className="buttonn primary">
              Register
            </button>
          </li>
          <li className="loginR">
            <div>
            Already have account?
            <Link to="/" className="buttonn secondary text-center">
              LogIn
            </Link>
            </div>
          </li>
        </ul>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;
