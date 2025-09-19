import React from "react";
import {
  FaMobileAlt,
  FaCode,
  FaPaintBrush,
  FaMicrophoneAlt,
  FaGlobe,
} from "react-icons/fa";

function Services() {
  return (
    <div className="container-xxl py-6" id="service">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-orange)' }}>Services</h3>
          <h3 className="text-dark text-uppercase mb-2">What I Offer</h3>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center p-4">
              <div
                className="mb-3"
                style={{ fontSize: "2rem", color: "var(--brand-orange)" }}
              >
                <FaGlobe />
              </div>
              <h5 className="mb-3">Sworn Translations</h5>
              <p>
                I provide certified translation services for legal and official
                documents.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center p-4">
              <div
                className="mb-3"
                style={{ fontSize: "2rem", color: "var(--brand-orange)" }}
              >
                <FaPaintBrush />
              </div>
              <h5 className="mb-3">Creative Designs</h5>
              <p>
                I create visually appealing designs for various digital
                platforms.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center p-4">
              <div
                className="mb-3"
                style={{ fontSize: "2rem", color: "var(--brand-orange)" }}
              >
                <FaCode />
              </div>
              <h5 className="mb-3">Software Development</h5>
              <p>
                I create responsive and modern websites using React, HTML, CSS,
                and JavaScript.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center p-4">
              <div
                className="mb-3"
                style={{ fontSize: "2rem", color: "var(--brand-orange)" }}
              >
                <FaMobileAlt />
              </div>
              <h5 className="mb-3">Mobile Apps</h5>
              <p>
                I develop cross-platform mobile applications using React Native
                for smooth performance.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center p-4">
              <div
                className="mb-3"
                style={{ fontSize: "2rem", color: "var(--brand-orange)" }}
              >
                <FaPaintBrush />
              </div>
              <h5 className="mb-3">UI/UX Design</h5>
              <p>
                I design user-friendly and aesthetic interfaces for web and
                mobile applications.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item text-center p-4">
              <div
                className="mb-3"
                style={{ fontSize: "2rem", color: "var(--brand-orange)" }}
              >
                <FaMicrophoneAlt />
              </div>
              <h5 className="mb-3">Voice over services</h5>
              <p>
                I provide professional voice-over services for various
                multimedia projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
