import React from "react";

function About() {
  return (
    <div className="container-xxl py-6" id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="about-card shadow-sm rounded overflow-hidden">
              <img
                className="img-fluid w-100"
                src="/img/about-1.jpg"
                alt="About"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-orange)' }}>About Me</h3>
            <h2 className="mb-3">
              Sworn Translator, Designer & Developer, Writer, Voice-over Artist
            </h2>
            <p className="text-muted mb-3">
              I’m an undergraduate at Rajarata University of Sri Lanka,
              passionate about merging technology and creativity to deliver
              impactful solutions. My experience spans across sworn translation,
              creative design, software development, UI/UX design, content
              writing, SEO, and voice-over services. With a strong balance of
              technical expertise and artistic vision, I enjoy crafting digital
              products, compelling content, and seamless user experiences.
              Beyond my academic journey, I’ve collaborated with clients on web
              apps, mobile apps, digital artworks, and professional
              translations, consistently striving to bring innovation, clarity,
              and quality to every project.
            </p>

            <div className="row g-3 mb-4">
              <div className="col-6 col-md-3">
                <div className="about-badge">Sworn Translations</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-badge">Creative contents</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-badge">UI/UX Designs</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-badge">Web Apps</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-badge">Mobile Apps</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-badge">SEO Content</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-badge">Voice-over Services</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-badge">Digital Artworks</div>
              </div>
            </div>

            <div className="row text-center mb-4">
              <div className="col-6 col-md-3">
                <div className="about-stat">
                  <div className="about-stat-num">100+</div>
                  <div className="about-stat-label">Projects</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-stat">
                  <div className="about-stat-num">50+</div>
                  <div className="about-stat-label">Clients</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="about-stat">
                  <div className="about-stat-num">5+</div>
                  <div className="about-stat-label">Years</div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <a href="/cv/sahasra-cv.pdf" className="btn" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }} download>
                <i className="bi bi-download text-white me-2"></i>
                Download CV
              </a>
              <a href="#contact" className="btn" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
