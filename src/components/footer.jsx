import React from "react";

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Sahasra Nawodhi Silva. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;