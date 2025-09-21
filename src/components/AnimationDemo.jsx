import React, { useState } from "react";

function AnimationDemo() {
  const [currentStyle, setCurrentStyle] = useState('splash');

  const animationStyles = [
    { 
      id: 'splash', 
      name: 'Splash Circles', 
      description: 'Original rotating circles with scaling effects' 
    },
    { 
      id: 'particles', 
      name: 'Floating Particles', 
      description: 'Gentle floating motion with subtle movement' 
    },
    { 
      id: 'waves', 
      name: 'Wave Ripples', 
      description: 'Expanding ripple effects like water waves' 
    },
    { 
      id: 'geometric', 
      name: 'Geometric Shapes', 
      description: 'Squares and rounded rectangles with rotation' 
    },
    { 
      id: 'gradient', 
      name: 'Gradient Flow', 
      description: 'Animated gradient backgrounds with color flow' 
    },
    { 
      id: 'blobs', 
      name: 'Morphing Blobs', 
      description: 'Organic shapes that continuously morph' 
    },
    { 
      id: 'pulse', 
      name: 'Pulsing Orbs', 
      description: 'Breathing effect with glowing shadows' 
    },
    { 
      id: 'spiral', 
      name: 'Spiral Motion', 
      description: 'Circular spiral movement patterns' 
    }
  ];

  return (
    <div className="container-fluid bg-light" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Animation Background */}
      <div className={`splash-container splash-${currentStyle}`}>
        <div className="splash-circle"></div>
        <div className="splash-circle"></div>
        <div className="splash-circle"></div>
        <div className="splash-circle"></div>
        <div className="splash-circle"></div>
        <div className="splash-circle"></div>
      </div>
      
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-lg-6 py-6 pb-0 pt-lg-0 ps-lg-5">
            <h2 className="mb-3 fw-bold" style={{ color: "var(--brand-red)" }}>Animation Styles</h2>
            <h1 className="display-3 mb-3 text-gradient fw-bold">Choose Your Style</h1>
            
            <div className="mb-4">
              <h4>Current: {animationStyles.find(s => s.id === currentStyle)?.name}</h4>
              <p className="text-muted">{animationStyles.find(s => s.id === currentStyle)?.description}</p>
            </div>

            {/* Style Selector */}
            <div className="row g-2">
              {animationStyles.map((style) => (
                <div key={style.id} className="col-6 col-md-4 col-lg-6">
                  <button
                    className={`btn w-100 ${currentStyle === style.id ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setCurrentStyle(style.id)}
                    style={{ 
                      fontSize: '0.8rem',
                      padding: '0.5rem 0.25rem'
                    }}
                  >
                    {style.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '8px' }}>
              <h6>How to Use:</h6>
              <p className="mb-1 small">
                To apply any style to your header, change the className in your header component:
              </p>
              <code className="small">
                {`<div className="splash-container splash-${currentStyle}">`}
              </code>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="p-4" style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '15px' }}>
              <h5>Preview Area</h5>
              <p className="text-muted">The animation is running in the background</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationDemo;
