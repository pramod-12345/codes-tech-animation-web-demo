import React, { useRef, useState, useLayoutEffect } from 'react';

const FooterReveal = ({ children }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    
    const updateHeight = () => {
      const height = el.offsetHeight;
      setFooterHeight(height);
      
      // Disable the fixed reveal effect if the footer is taller than the viewport.
      if (typeof window !== 'undefined' && height >= window.innerHeight) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };
    
    // Initial check
    updateHeight();
    
    // Setup observer
    const observer = new ResizeObserver(() => {
      updateHeight();
    });
    
    observer.observe(el);
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div 
        style={{ height: isFixed ? footerHeight : 0 }} 
        className="w-full relative z-0 pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        ref={footerRef} 
        className={isFixed ? "fixed bottom-0 left-0 w-full z-0" : "relative w-full z-0"}
      >
        {children}
      </div>
    </>
  );
};

export default FooterReveal;
