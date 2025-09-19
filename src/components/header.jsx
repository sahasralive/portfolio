import React from "react";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <div className="container-fluid bg-light" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-lg-6 py-6 pb-0 pt-lg-0 ps-lg-5">
            <h2 className="mb-3 fw-bold" style={{ color: "var(--brand-red)" }}>Hello</h2>
            <h1 className="display-3 mb-3 text-gradient fw-bold">I'm Sahasra</h1>

            {/* Typing effect for roles */}
            <h2 className="text-dark mb-4"> I'm a <space></space>
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
            </h2>

            {/* Buttons */}
            <div className="d-flex align-items-center pt-4">
              <a href="#contact" className="btn py-3 px-4 me-4" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }}><i className="bi bi-telephone-fill text-white me-2"></i>
                Contact Me
              </a>
              <a href="/cv/sahasra-cv.pdf" className="btn py-3 px-4" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }} download>
                <i className="bi bi-download text-white me-2"></i>
                Download CV
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="/img/profile.png" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
