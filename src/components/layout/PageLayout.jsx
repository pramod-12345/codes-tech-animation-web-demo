import PageHeader from "../common/PageHeader";

const backgroundVariants = {
  default:
    "bg-white dark:bg-black space-y-20 sm:space-y-20 md:space-y-20 lg:space-y-20 xl:space-y-28 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28",
};

const PageLayout = ({
  children,
  variant = "default",
  headerProps,
  className = "",
}) => {
  return (
    <div
      className={`${backgroundVariants[variant]} transition-colors duration-300 ${className}`}
    >
      {headerProps && <PageHeader {...headerProps} />}
      {children}
    </div>
  );
};

export default PageLayout;
