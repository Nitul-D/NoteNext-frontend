import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import logger from "../utils/logger";

const Register = (props) => {
  const host = "https://notenext-backend.vercel.app";
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    logger.log(json);

    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <>
    <h2 className="container mb-3 mt-3" style={{ textAlign: "center"}}>Register</h2>
    <div className="container mt-3" style={{ fontFamily: "sans-serif" }}>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" value={credentials.name} id="name" name="name" onChange={onChange} minLength={4} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} id="email" name="email" onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} id="password" name="password" onChange={onChange} minLength={8} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" value={credentials.cpassword} id="cpassword" name="cpassword" onChange={onChange} minLength={8} required/>
            </div>
            <button type="submit" className="btn btn-outline-primary">Sign Up</button>
        </form>
    </div>
    </>
  )
}

export default Register
