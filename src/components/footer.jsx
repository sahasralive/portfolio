import React from "react";

function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-12 mb-4 text-center">
            <div className="footer-logo">
              <img src="/img/logo.png" alt="Sahasra Nawodhi Silva" className="logo-img" style={{ height: '100px' }} />
            </div>
          </div>

          {/* Quick Links - One Line */}
          <div className="col-12 mb-4">
            <div className="footer-links justify-content-center">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#certifications" className="footer-link">Certifications</a>
              <a href="#skill" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Social Media - Next Line */}
          <div className="col-12 mb-4">
            <div className="social-links justify-content-center">
              <a href="https://www.linkedin.com/in/sahasralive/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/sahasralive" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/sahas.live/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/sahas_arts/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="https://www.youtube.com/@sahasralive" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12">
            <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            <p className="footer-copyright text-center">
              &copy; {new Date().getFullYear()}All Rights Reserved | Designed & Developed by SAHASRA 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;