import React, { useState } from "react";
import logo from "../assets/logo.png";
import logoYellow from "../assets/logoyellow.png";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    
    // Store original scroll behavior
    const html = document.documentElement;
    const body = document.body;
    const originalHtmlScrollBehavior = html.style.scrollBehavior;
    const originalBodyScrollBehavior = body.style.scrollBehavior;
    
    // Temporarily disable smooth scrolling
    html.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';
    
    // Force scroll to absolute top using multiple methods
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    html.scrollLeft = 0;
    body.scrollTop = 0;
    body.scrollLeft = 0;
    
    // Use requestAnimationFrame to ensure it happens after any pending smooth scrolls
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      body.scrollTop = 0;
      
      // Restore original scroll behavior after a short delay
      setTimeout(() => {
        html.style.scrollBehavior = originalHtmlScrollBehavior;
        body.style.scrollBehavior = originalBodyScrollBehavior;
      }, 100);
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top modern-navbar py-lg-0 px-4 px-lg-5">
      {/* Mobile Logo */}
      <a 
        href="#home" 
        className="navbar-brand d-block d-lg-none modern-logo"
        onClick={handleLogoClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? logoYellow : logo}
          alt="Logo"
          className="img-fluid"
          style={{ height: "40px" }}
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto py-0">
          {/* Desktop Logo */}
          <a 
            href="#home" 
            className="navbar-brand d-none d-lg-block"
            onClick={handleLogoClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? logoYellow : logo}
              alt="Logo"
              className="img-fluid"
              style={{ height: "50px" }}
            />
          </a>

          <a href="#about" className="nav-item nav-link me-3">
            About
          </a>
          <a href="#education" className="nav-item nav-link me-3">
            Education
          </a>
           <a href="#certifications" className="nav-item nav-link me-3">
            Certifications
          </a>
          <a href="#skill" className="nav-item nav-link me-3">
            Skills
          </a>
          
         
        </div>

        <div className="navbar-nav me-auto py-0">
          <a href="#projects" className="nav-item nav-link me-3">
            Projects
          </a>
          <a href="#service" className="nav-item nav-link me-3">
            Services
          </a>
          <a href="#contact" className="nav-item nav-link me-3">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
