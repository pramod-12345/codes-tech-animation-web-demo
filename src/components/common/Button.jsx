import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary", // Options: "primary", "glass", "outline"
  onClick,
  type = "button",
  className = "",
  disabled = false,
  to,
  href,
  isArrow = true,
  ...props
}) => {
  // 1. Core structural base classes shared across buttons
  const baseClasses =
    "rounded-full font-medium flex items-center justify-center gap-2 whitespace-nowrap select-none disabled:opacity-50 disabled:pointer-events-none";

  // 2. Exact variant matching from your designs
  const variantClasses = {
    // Button 1: Request a Consultation style
    primary:
      "group relative overflow-hidden w-fit px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 py-2 sm:py-2.5 md:py-2.5 lg:py-3 xl:py-4 text-sm sm:text-base md:text-base xl:text-lg text-white bg-brand-dark",

    // Button 2: View Our Work style
    glass:
      "glass border border-slate-200 w-fit backdrop-blur-[8px] dark:border-white/22 text-slate-700 dark:text-white dark:bg-white/10 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 py-2 sm:py-2.5 md:py-2.5 lg:py-3 xl:py-4 text-sm sm:text-base md:text-base xl:text-lg hover:bg-slate-50 dark:hover:bg-white/5",

    // Button 3: Get in Touch style
    outline:
      "hidden sm:flex px-3 sm:px-4 w-fit md:px-6 py-2 sm:py-2.5 md:py-4 text-xs sm:text-sm md:text-lg h-9 sm:h-10 md:h-12 text-brand-blue border border-brand-blue hover:bg-brand-blue/10",
  };

  // Render the exact SVG arrow matching each specified design layout
  const renderArrow = () => {
    switch (variant) {
      case "primary":
        return (
          <svg
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        );
      case "glass":
        return (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M3 9H15M15 9L10 4M15 9L10 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "outline":
        return (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M10.8203 4.44727L15.3728 8.99976L10.8203 13.5523"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.625 9H15.2475"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const fullClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const splitLayers =
    variant === "primary" ? (
      <>
        <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#00C0FF] to-[#2E8CAE] transition-transform duration-500 ease-out origin-bottom group-hover:-translate-y-full" />
        <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#00C0FF] to-[#2E8CAE] transition-transform duration-500 ease-out origin-top group-hover:translate-y-full" />
      </>
    ) : null;

  const contentChildren = (alwaysShowArrow = false) => (
    <span
      className={`flex items-center gap-2 ${variant === "primary" ? "relative z-10" : ""}`}
    >
      {children}
      {(alwaysShowArrow || isArrow) && renderArrow()}
    </span>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={fullClassName} {...props}>
        {splitLayers}
        {contentChildren(true)}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={fullClassName} {...props}>
        {splitLayers}
        {contentChildren(true)}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={fullClassName}
      {...props}
    >
      {splitLayers}
      {contentChildren()}
    </button>
  );
};

export default Button;
