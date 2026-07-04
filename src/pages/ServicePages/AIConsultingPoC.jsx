import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import ServiceDetailHeader from "../../components/sections/ServiceDetail/ServiceDetailHeader";
import Challenge from "../../components/sections/ServiceDetail/Challenge";
import OurApproach, { LightbulbIcon, ArchitectureIcon, IterationIcon, TeamIcon, ShieldCheckIcon } from "../../components/sections/ServiceDetail/OurApproach";
import headerImg from "../../assets/services/acpd-header.jpg";
import challengeImg1 from "../../assets/services/acpd-challenge1.jpg";
import challengeImg2 from "../../assets/services/acpd-challenge2.jpg";

const consultingSteps = [
  {
    number: "01",
    icon: LightbulbIcon,
    title: "AI readiness assessment",
    description: "data maturity, team capabilities, and organizational alignment",
  },
  {
    number: "02",
    icon: ArchitectureIcon,
    title: "Use case prioritization:",
    description: "Identifying the highest-ROI AI applications for your specific business",
  },
  {
    number: "03",
    icon: IterationIcon,
    title: "AI Solution Strategy",
    description: "Build vs. buy vs. fine-tune analysis for specific AI needs",
  },
  {
    number: "04",
    icon: TeamIcon,
    title: "PoC design",
    description: "defining success criteria, data requirements, and evaluation methodology upfront",
  },
  {
    number: "05",
    icon: ShieldCheckIcon,
    title: "PoC execution",
    description: "4-8 week focused builds with clear go/no-go decision criteria",
  },
  {
    number: "06",
    icon: ShieldCheckIcon,
    title: "Transition planning",
    description: "Moving from PoC to production system with the right engineering investment",
  },
];

const AIConsultingPoC = () => {
  return (
    <PageLayout>
      <ServiceDetailHeader
        headerImg={headerImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
          { label: "AI Consulting & PoC Development", active: true },
        ]}
        title="Validate Your AI Investment Before You Make It"
        description="We help organizations identify where AI creates genuine value, design experiments to validate assumptions, and build proof-of-concepts that inform confident production decisions."
      />
      <Challenge
        title="The Challenge"
        images={[challengeImg1, challengeImg2]}
        description="AI investments fail when they start with a technology looking for a problem rather than a problem looking for a solution. Building a proof-of-concept before committing to a full AI system is the most reliable way to answer: will this actually work for our data, in our context, with our constraints?"
      />
      <OurApproach mainText="What AI" italicText="Consulting Covers" steps={consultingSteps} />
    </PageLayout>
  );
};

export default AIConsultingPoC;
