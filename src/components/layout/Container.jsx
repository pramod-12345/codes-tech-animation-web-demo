import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`md:max-w-5xl lg:max-w-[89%] w-full justify-between items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
