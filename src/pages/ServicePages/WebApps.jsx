import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import ServiceDetailHeader from "../../components/sections/ServiceDetail/ServiceDetailHeader";
import Challenge from "../../components/sections/ServiceDetail/Challenge";
import OurApproach from "../../components/sections/ServiceDetail/OurApproach";
import {
  LightbulbIcon,
  ArchitectureIcon,
  IterationIcon,
  TeamIcon,
  ShieldCheckIcon,
} from "../../components/sections/ServiceDetail/OurApproach";
import TechStack from "../../components/sections/ServiceDetail/TechStack";
import WebAppsHeaderImg from "../../assets/services/wad-header.jpg";
import challenge1 from "../../assets/services/wad-challenge1.jpg"
import challenge2 from "../../assets/services/wad-challenge2.jpg"
import {
  ReactLogo,
  NextJSLogo,
  VueJs,
  PythonLogo,
  Angular,
  GraphQl,
  RestApi,
  PostgresLogo,
  AwsCloudFront,
  RedisLogo,
  Vercel,
  Netlify,
  NodeJSLogo
} from "../../assets/icons";

const steps = [
  {
    number: "01",
    icon: LightbulbIcon,
    title: "Modern Frontend Engineering",
    description: "React, Next.js, and Vue.js applications with server-side rendering for performance and SEO where needed.",
  },
  {
    number: "02",
    icon: ArchitectureIcon,
    title: "Scalable Backend Architecture",
    description: "API-first design with Node.js, Python, or Go backends built to handle growth without re-architecture.",
  },
  {
    number: "03",
    icon: IterationIcon,
    title: "Performance Engineering",
    description: "Core Web Vitals optimization, CDN configuration, and caching strategies built into the development process.",
  },
  {
    number: "04",
    icon: TeamIcon,
    title: "Accessibility and Compliance",
    description: "WCAG 2.1 AA compliance and cross-browser testing as standard deliverables.",
  },
  {
    number: "05",
    icon: ShieldCheckIcon,
    title: "Progressive Web App Capabilities",
    description: "Offline functionality, push notifications, and app-like mobile experience where appropriate.",
  },
]

const WebApps = () => {
  return (
    <PageLayout>
      <ServiceDetailHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
          { label: "Web Application Development", active: true },
        ]}
        headerImg={WebAppsHeaderImg}

        title="Web Applications That Perform Under Pressure"
        description="We build web applications for businesses where performance, reliability, and user experience are directly tied to revenue."
      />
      <Challenge
        title="The Challenge"
        images={[challenge1, challenge2]}
        description="Web applications are often the primary interface between a business and its customers or internal teams. Poor performance, inconsistent UX, and scalability failures at traffic peaks are not just technical problems. They are business problems with direct revenue consequences."
      />
      <OurApproach mainText="Our" italicText="Approach" steps={steps} />
      <TechStack alignIconClass="" firstRowClass={"justify-between"} secondRowClass={"justify-around"} mainText="Tech Stack" italicText="Coverage" icons={[[ReactLogo, NextJSLogo, Angular, VueJs, NodeJSLogo, PythonLogo, GraphQl], [RestApi, PostgresLogo, RedisLogo, AwsCloudFront, Vercel, Netlify]]} />
    </PageLayout>
  );
};

export default WebApps;
