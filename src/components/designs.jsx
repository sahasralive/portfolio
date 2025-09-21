import React, { forwardRef, useEffect, useRef, useState } from "react";
import { designsData } from "../data/data.jsx";

const Designs = forwardRef((props, ref) => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!scrollContainerRef.current || isHovered) return;

    const autoScroll = () => {
      if (isHovered) return;

      const tileWidth = 380 + 40; // tile width + gap
      const nextIndex = (currentIndex + 1) % designsData.length;
      
      // Calculate target scroll position
      const targetScroll = nextIndex * tileWidth;
      
      // Smooth scroll using native scrollTo with smooth behavior
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      // Update the current index for tracking
      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(autoScroll, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Handle dot click to jump to specific design
  const handleDotClick = (index) => {
    const tileWidth = 380 + 40;
    const targetScroll = index * tileWidth;
    
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  // Add scroll event listener for progress tracking
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scroll start/end detection
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollTimeout;
    const handleScrollStart = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
    };

    const handleScrollEnd = () => {
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    scrollContainer.addEventListener('scroll', handleScrollStart);
    scrollContainer.addEventListener('scroll', handleScrollEnd);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScrollStart);
      scrollContainer.removeEventListener('scroll', handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="container-xxl py-6" id="designs" ref={ref}>
      <div className="container">
        <div className="text-center mb-3">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-purple)' }}>Designs</h3>
          
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <div className="d-flex gap-2">
              {designsData.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <div 
                    key={index}
                    className={`scroll-dot ${isActive ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    style={{
                      width: isActive ? '12px' : '8px',
                      height: isActive ? '12px' : '8px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--brand-purple)' : 'rgba(135, 89, 238, 0.3)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      border: isActive ? '2px solid var(--brand-purple)' : '2px solid transparent',
                      boxShadow: isActive 
                        ? '0 0 15px rgba(135, 89, 238, 0.4)' 
                        : '0 0 0px rgba(135, 89, 238, 0)',
                      transform: isActive ? 'scale(1.2)' : 'scale(1)',
                      position: 'relative'
                    }}
                  >
                    {isActive && (
                      <div 
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          animation: 'pulse 2s infinite'
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="projects-container" style={{ padding: '1rem 0' }}>
          
          {/* Scroll Status Indicator */}
          <div 
            className="position-fixed top-3 end-3 d-flex align-items-center gap-2"
            style={{
              zIndex: 2,
              opacity: isScrolling ? 1 : 0.6,
              transition: 'opacity 0.3s ease'
            }}
          >
            <div 
              className="d-flex align-items-center gap-1"
              style={{
                fontSize: '0.8rem',
                color: 'var(--brand-dark-bg)',
                fontWeight: '600',
                background: 'rgba(255,255,255,0.9)',
                padding: '0.3rem 0.8rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(135, 89, 238, 0.2)'
              }}
            >
              <div 
                className={`${isScrolling ? 'spinning' : ''}`}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: isScrolling ? 'var(--brand-purple)' : 'var(--brand-purple)',
                  transition: 'all 0.3s ease'
                }}
              />
              {isScrolling ? 'Scrolling...' : 'Auto-scroll'}
            </div>
          </div>
          
          <div 
            className="projects-horizontal-scroll" 
            id="designs-scroll"
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              background: 'transparent',
              transition: 'all 0.3s ease',
              border: isScrolling 
                ? '2px solid rgba(135, 89, 238, 0.2)'
                : '2px solid transparent',
              borderRadius: '20px',
              boxShadow: isScrolling 
                ? '0 8px 32px rgba(135, 89, 238, 0.15)'
                : 'none'
            }}
          >
            <div className="projects-scroll-container">
              {designsData.map((design, index) => (
                <div 
                  key={`design-${design.id}`} 
                  className={`project-tile ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="project-item rounded overflow-hidden position-relative" style={{ 
                    height: '500px',
                    width: '380px',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.12)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    flexShrink: 0,
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255,255,255,0.05)'
                  }}>
                    <img 
                      className="img-fluid" 
                      src={`/${design.image}`} 
                      alt={design.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    
                    {/* Basic Design Info - Always Visible */}
                    <div 
                      className="position-absolute bottom-0 start-0 w-100 p-3"
                      style={{
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: 'white'
                      }}
                    >
                      <h5 className="text-white mb-1" style={{ fontSize: '1rem', fontWeight: '600' }}>
                        {design.title}
                      </h5>
                      <span 
                        className="badge" 
                        style={{ 
                          backgroundColor: 'var(--brand-purple)', 
                          color: 'white',
                          fontSize: '0.7rem'
                        }}
                      >
                        {design.category}
                      </span>
                    </div>

                    {/* Detailed Overlay - On Hover */}
                    <div 
                      className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(135, 89, 238, 0.95), rgba(236, 72, 153, 0.95))',
                        opacity: 0,
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {/* Top Section - Design Info */}
                      <div className="text-white">
                        <span 
                          className="badge mb-2" 
                          style={{ 
                            backgroundColor: 'rgba(255,255,255,0.2)', 
                            color: 'white',
                            fontSize: '0.75rem',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.3)'
                          }}
                        >
                          {design.category}
                        </span>
                        <h5 className="text-white mb-2" style={{ fontSize: '1.2rem', fontWeight: '700' }}>
                          {design.title}
                        </h5>
                      </div>

                      {/* Middle Section - Full Description */}
                      <div className="text-white flex-grow-1 d-flex align-items-center">
                        <p className="text-white mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.5', textAlign: 'left' }}>
                          {design.description}
                        </p>
                      </div>

                      {/* Bottom Section - Technologies and Actions */}
                      <div className="text-white">
                        {/* Technology Tags */}
                        <div className="mb-3">
                          <div className="d-flex flex-wrap gap-1">
                            {design.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="badge" 
                                style={{ 
                                  backgroundColor: 'rgba(255,255,255,0.25)', 
                                  color: 'white',
                                  fontSize: '0.7rem',
                                  fontWeight: '500',
                                  padding: '0.3rem 0.6rem',
                                  borderRadius: '12px',
                                  backdropFilter: 'blur(10px)',
                                  border: '1px solid rgba(255,255,255,0.2)'
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      
                        {/* Action Buttons */}
                        <div className="d-flex gap-2 flex-wrap">
                          <a 
                            href={design.demo} 
                            className="btn btn-sm project-btn" 
                            style={{ 
                              backgroundColor: 'rgba(255,255,255,0.2)', 
                              borderColor: 'rgba(255,255,255,0.3)', 
                              color: 'white',
                              fontSize: '0.8rem',
                              padding: '0.5rem 1rem',
                              borderRadius: '20px',
                              backdropFilter: 'blur(10px)',
                              fontWeight: '600'
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-eye me-1"></i>
                            View Design
                          </a>
                          {design.github && design.github !== "#" && (
                            <a 
                              href={design.github} 
                              className="btn btn-sm project-btn" 
                              style={{ 
                                backgroundColor: 'rgba(255,255,255,0.1)', 
                                borderColor: 'rgba(255,255,255,0.3)', 
                                color: 'white',
                                fontSize: '0.8rem',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                                fontWeight: '600'
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="bi bi-github me-1"></i>
                              View Code
                            </a>
                          )}
                          <a 
                            href={design.link} 
                            className="btn btn-sm project-btn" 
                            style={{ 
                              backgroundColor: 'rgba(255,255,255,0.1)', 
                              borderColor: 'rgba(255,255,255,0.3)', 
                              color: 'white',
                              fontSize: '0.8rem',
                              padding: '0.5rem 1rem',
                              borderRadius: '20px',
                              backdropFilter: 'blur(10px)',
                              fontWeight: '600'
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-link-45deg me-1"></i>
                            Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Designs;
