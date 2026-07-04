import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/common/PageHeader";
import PolicyDetails from "../components/sections/PrivacyPolicy/PolicyDetails";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={["Home", "Privacy Policy"]}
        subtitle={
          <div className="font-medium text-base">
            Updated:
            <span className="font-normal text-base"> March 10, 2026</span>
          </div>
        }
        className="relative pt-36 pb-16 md:pt-48 md:pb-16"
      />
      <PolicyDetails />
    </PageLayout>
  );
};
export default PrivacyPolicy;
