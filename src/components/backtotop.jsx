import React, { useState, useEffect } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) setVisible(true);
    else setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className="btn back-to-top"
      style={{ 
        backgroundColor: 'var(--brand-orange)', 
        borderColor: 'var(--brand-orange)', 
        color: 'white',
        display: visible ? "inline" : "none", 
        position: "fixed", 
        bottom: "40px", 
        right: "40px" 
      }}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}

export default BackToTop;