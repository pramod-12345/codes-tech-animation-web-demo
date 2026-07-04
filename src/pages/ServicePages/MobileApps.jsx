import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import ServiceDetailHeader from "../../components/sections/ServiceDetail/ServiceDetailHeader";
import Challenge from "../../components/sections/ServiceDetail/Challenge";
import OurApproach, { ArchitectureIcon, IterationIcon, LightbulbIcon, ShieldCheckIcon, TeamIcon } from "../../components/sections/ServiceDetail/OurApproach";
import WhatYouGet from "../../components/sections/ServiceDetail/WhatYouGet";
import headerImg from "../../assets/services/mad-header.jpg";
import challengeImg2 from "../../assets/services/mad-challenge2.jpg";
import whatWeGetImg from "../../assets/services/mad-what-you-get.jpg";

const customSteps = [
  {
    number: "01",
    icon: LightbulbIcon,
    description:
      "React Native and Flutter for cross-platform efficiency where appropriate, native Swift/Kotlin for performance-critical applications.",
  },
  {
    number: "02",
    icon: ArchitectureIcon,
    description:
      "Offline-first architecture for applications where connectivity cannot be guaranteed.",
  },
  {
    number: "03",
    icon: IterationIcon,
    description:
      "App Store optimization readiness: performance profiling, App Store review guideline compliance, and crash reporting infrastructure.",
  },
  {
    number: "04",
    icon: TeamIcon,
    description:
      "Push notification and engagement infrastructure designed for behavioral triggers, not spam.",
  },
  {
    number: "05",
    icon: ShieldCheckIcon,
    description:
      "Analytics and event tracking integrated from the first sprint so you have data to make product decisions.",
  },
];


const MobileApps = () => {
  return (
    <PageLayout>
      <ServiceDetailHeader
        headerImg={headerImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
          { label: "Mobile Application Development", active: true },
        ]}
        title="Mobile Apps Built for Retention, Not Just Download Numbers"
        description="We build iOS and Android applications with the engineering depth and UX quality that turns first-time users into daily active users."
      />
      <Challenge
        title="The Challenge"
        images={[headerImg, challengeImg2]}
        description="The average app loses 77% of its daily active users within the first three days of install. Most apps fail not at launch but in the weeks after, when users encounter performance issues, confusing flows, or features that do not solve real problems. Building a successful mobile product requires engineering quality and product thinking in equal measure."
      />
      <OurApproach mainText="Our" italicText="Approach" steps={customSteps} />
      <WhatYouGet title="What You Get" image={whatWeGetImg} ownershipTitle="End-to-End Ownership"
        ownershipDescription="From discovery workshops to post-launch support, we own the full product lifecycle."
        minorChecklist={[
          "No handoff friction",
          "No hidden costs",
          "No technical surprises"
        ]}
        deliveryItems={[
          "iOS and/or Android production-ready application",
          "Backend APIs and cloud infrastructure",
          "App Store submission support",
          "Analytics dashboard and user behavior tracking setup",
          "Post-launch monitoring and iteration support"
        ]} />
    </PageLayout>
  );
};

export default MobileApps;
