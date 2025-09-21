import React from "react";
import { TypeAnimation } from "react-type-animation";
import MeshAnimation from "./MeshAnimation";

function Header() {
  return (
    <div className="container-fluid modern-hero" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Mesh Animation Background */}
      <MeshAnimation />
      
      {/* Mesh Overlay */}
      <div className="mesh-overlay"></div>
      
      {/* bg-header2.png overlay on top of bg-header.png */}
      <div 
        className="bg-header2-overlay"
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '60%',
          height: '100%',
          backgroundImage: 'url(/img/bg-header2.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      ></div>
      
      {/* Polygonal shape with liquid glass effect */}
      <div 
        className="polygonal-glass-shape"
        style={{
          position: 'absolute',
          top: '25%',
          right: '31%',
          width: '330px',
          height: '330px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      ></div>
      
      {/* Second polygonal shape with liquid glass effect */}
      <div 
        className="polygonal-glass-shape"
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '12%',
          width: '364px',
          height: '364px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      ></div>
      
      {/* Custom Polygon Shape */}
      <svg
        style={{
          position: 'absolute',
          top: '-28%',
          right: '-13%',
          width: '100%',
          height: '130%',
          zIndex: 2,
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
          animation: 'liquidGlass 4s ease-in-out infinite alternate'
        }}
        viewBox="0 0 1400 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#e8e0fa', stopOpacity: 0.8}} />
            <stop offset="50%" style={{stopColor: '#e8e0fa', stopOpacity: 0.6}} />
            <stop offset="100%" style={{stopColor: '#e8e0fa', stopOpacity: 0.8}} />
          </linearGradient>
        </defs>
        <polygon 
          points="700,200 1400,0 1400,1000 700,1000 520,600 700,200"
          fill="url(#glassGradient)"
          stroke="rgba(232, 224, 250, 0.3)"
          strokeWidth="1"
        />
      </svg>
      
      {/* Top Left Background Image */}
      <div 
        className="bg-header1-image"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '300px',
          height: '300px',
          backgroundImage: 'url(/img/bg-header1.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      ></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="row g-3 align-items-center">
          <div className="col-lg-6 col-md-12 py-6 pb-0 pt-lg-0 ps-lg-5 text-mobile-center">
                    <h2 className="mb-3 fw-bold letter-spacing-1" style={{
                      color: "var(--brand-dark-bg)",
                      fontSize: 'clamp(2.2rem, 5vw, 2.8rem)',
                      fontWeight: '600'
                    }}>Hello!</h2>
            
                    <h1 className="display-3 mb-4 fw-bold" style={{
                      background: 'linear-gradient(90deg, var(--brand-purple) 0%, var(--brand-pink) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: 'clamp(3rem, 9vw, 5.5rem)',
                      fontWeight: '800',
                      lineHeight: '1.1',
                      letterSpacing: '-0.02em'
                    }}>I'm Sahasra</h1>

            {/* Typing effect for roles */}
            <h2 className="mb-4 fw-normal" style={{ 
              color: "var(--brand-dark-bg)",
              fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
              lineHeight: '1.5',
              fontWeight: '400'
            }}> 
              I'm a <span className="fw-bold" style={{ color: "var(--brand-purple)" }}>
                <TypeAnimation
                  sequence={[
                    "Sworn Translator",
                    2000,
                    "Creative Designer",
                    2000,
                    "Software Developer",
                    2000,
                    "Writer",
                    2000,
                    "Voice over Artist",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h2>

                    {/* Buttons */}
                    <div className="hero-buttons d-flex flex-column flex-sm-row align-items-center gap-3 pt-4">
                      <a href="#contact" className="btn btn-primary btn-primary-modern py-3 px-4" style={{ backgroundColor: 'var(--brand-purple)', borderColor: 'var(--brand-purple)', color: 'white', borderRadius: '25px', minWidth: '200px' }}><i className="bi bi-telephone-fill text-white me-2"></i>
                        Contact Me
                      </a>
                      <a href="/cv/sahasra-cv.pdf" className="btn btn-outline-primary btn-secondary-modern py-3 px-4" style={{ backgroundColor: 'transparent', borderColor: 'var(--brand-purple)', color: 'var(--brand-dark-bg)', borderRadius: '25px', minWidth: '200px' }} download>
                        <i className="bi bi-download me-2"></i>
                        Download CV
                      </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="social-links d-flex justify-content-center justify-content-sm-start gap-4 pt-4">
                      <a href="https://www.linkedin.com/in/sahasralive/" target="_blank" rel="noopener noreferrer" className="social-link social-linkedin">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="https://github.com/sahasralive" target="_blank" rel="noopener noreferrer" className="social-link social-github">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href="https://www.instagram.com/sahas.live/" target="_blank" rel="noopener noreferrer" className="social-link social-instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://www.pinterest.com/sahas_arts/" target="_blank" rel="noopener noreferrer" className="social-link social-pinterest">
                        <i className="bi bi-pinterest"></i>
                      </a>
                      <a href="https://www.youtube.com/@sahasralive" target="_blank" rel="noopener noreferrer" className="social-link social-youtube">
                        <i className="bi bi-youtube"></i>
                      </a>
                    </div>
          </div>

          <div className="col-lg-6 col-md-12 text-center">
            <div className="hero-image-container">
              <img className="img-fluid profile-image" src="/img/profile.png" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
