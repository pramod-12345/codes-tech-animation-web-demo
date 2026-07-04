import PageLayout from "../components/layout/PageLayout";
import CaseStudyHeader from "../components/sections/CaseStudyDetail/CaseStudyHeader";

import ProjectCaseStudy from "../components/sections/CaseStudyDetail/ProjectCaseStudy";

const CaseStudyDetail = () => {
  // Declared details in objects to map over them as per guidelines
  const technologies = [
    { label: "Backend", value: "Node.js, Express" },
    { label: "Cloud Infrastructure", value: "AWS, Kubernetes, Docker" },
    { label: "Database", value: "PostgreSQL, Redis Caching" },
    { label: "CI/CD", value: "GitHub Actions" },
    { label: "Monitoring", value: "Datadog / CloudWatch" },
  ];

  const results = [
    "40% reduction in transaction latency",
    "Significant improvements in system stability",
    "Independent scaling of core services",
    "Faster deployments with automated pipelines",
    "Real-time visibility into performance metrics",
  ];

  return (
    <PageLayout>
      <CaseStudyHeader />
      <ProjectCaseStudy technologies={technologies} results={results} />
    </PageLayout>
  );
};

export default CaseStudyDetail;
