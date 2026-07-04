import React, { forwardRef } from "react";

const SectionLayout = forwardRef(
  ({ children, headingProps, className = "", style }, ref) => {
    return (
      <section
        ref={ref}
        className={`relative px-4 sm:px-6 lg:px-6 flex flex-col items-center justify-center overflow-hidden ${className}`}
        style={style}
      >
        {children}
      </section>
    );
  },
);

SectionLayout.displayName = "SectionLayout";

export default SectionLayout;
