import React, { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="container-xxl py-6" id="projects" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-orange)' }}>Projects</h3>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="project-item rounded overflow-hidden">
              <img className="img-fluid" src="/img/project-1.jpg" alt="Project 1"/>
              <div className="project-overlay">
                <h5 className="text-white">Rajarata Community Mobile App</h5>
                <a href="#" className="btn" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }}>View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-item rounded overflow-hidden">
              <img className="img-fluid" src="/img/project-2.jpg" alt="Project 2"/>
              <div className="project-overlay">
                <h5 className="text-white">E - Buy Online Shopping Platform</h5>
                <a href="#" className="btn" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }}>View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-item rounded overflow-hidden">
              <img className="img-fluid" src="/img/project-3.jpg" alt="Project 3"/>
              <div className="project-overlay">
                <h5 className="text-white">Inventory Management System</h5>
                <a href="#" className="btn" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }}>View Project</a>
              </div>
            </div>
            </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-item rounded overflow-hidden">
              <img className="img-fluid" src="/img/project-3.jpg" alt="Project 3"/>
              <div className="project-overlay">
                <h5 className="text-white">Inventory Management System</h5>
                <a href="#" className="btn" style={{ backgroundColor: 'var(--brand-orange)', borderColor: 'var(--brand-orange)', color: 'white' }}>View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;