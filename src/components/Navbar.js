import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    closeNavbar();
  }

  // Close the bootstrap collapse navbar if it's open
  const closeNavbar = () => {
    const navCollapse = document.getElementById('navbarSupportedContent');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) toggler.click();
    }
  }

  // Auto-close the navbar when the user scrolls (mobile UX)
  useEffect(() => {
    const handleScrollClose = () => {
      const navCollapse = document.getElementById('navbarSupportedContent');
      if (navCollapse && navCollapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler');
        if (toggler) toggler.click();
      }
    }

    window.addEventListener('scroll', handleScrollClose);
    return () => window.removeEventListener('scroll', handleScrollClose);
  }, []);

  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">NoteNext</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link onClick={closeNavbar} className={`nav-link ${location.pathname==="/"? "active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link onClick={closeNavbar} className={`nav-link ${location.pathname==="/about"? "active" : ""}`} to="/about">About</Link>
        </li>
        </ul>
        {!localStorage.getItem("token") ? <form className="d-flex">
          <Link onClick={closeNavbar} className="btn btn-outline-success" to="/login">Login</Link>
          <Link onClick={closeNavbar} className="btn btn-outline-primary mx-2" to="/register">Sign Up</Link>
        </form> : <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>}
        </div>
        </div>
        </nav>
  )
}

export default Navbar
