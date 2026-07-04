import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";

// Mockup image assets representing case studies
import featureImage1 from "../assets/casestudy1.png";
import featureImage2 from "../assets/casestudy2.png";
import featureImage3 from "../assets/casestudy3.png";

// SVG Tech Icons
import { OpenaiIcon, ClaudeIcon, ReactIcon, VscodeIcon } from "../assets/icons";
import SectionLayout from "../components/layout/SectionLayout";
import Container from "../components/layout/Container";
import { useNavigate } from "react-router-dom";

const CaseStudy = () => {

  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      title: "FinTech Platform Performance Optimization",
      description:
        "Reduced transaction latency by 40% through microservices and cloud optimization.",
      image: featureImage1,
    },
    {
      id: 2,
      title: "Enterprise Legacy System Modernization",
      description:
        "Migrated outdated systems to cloud-native architecture, improving reliability and deployment speed.",
      image: featureImage2,
    },
    {
      id: 3,
      title: "Dedicated Engineering Team for Product Scale",
      description:
        "Streamlined user experience led to a 25% rise in bookings, leveraging AI-driven recommendations.",
      image: featureImage3,
    },
    {
      id: 4,
      title: "AI-Powered Customer Support Automation",
      description:
        "Improved patient engagement by 50% with a mobile-first design and personalized notifications.",
      image: featureImage1,
    },
  ];

  const techIcons = [
    { id: "openai", element: <OpenaiIcon /> },
    { id: "claude", element: <ClaudeIcon /> },
    { id: "react", element: <ReactIcon /> },
    { id: "vscode", element: <VscodeIcon /> },
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Our Case Studies"
        breadcrumbs={["Home", "Our Case Study"]}
        subtitle="In the symphony of life, our paths intertwined, weaving a tapestry of shared moments and cherished memories. Bound by laughter, trust, and understanding."
        className="relative pt-36 pb-28 md:pt-48 md:pb-36 mb-14 md:mb-36"
      />

      {/* Case Studies Grid Layout (2-column layout matching design) */}
      <SectionLayout>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full justify-center">
            {caseStudies.map((post) => (
              <div
                key={post.id}
                className="cursor-pointer w-full bg-white dark:bg-[#0B0B0B] border border-slate-200 dark:border-white/15 rounded-3xl p-6 flex flex-col justify-between hover:border-brand-blue/30 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(0,192,255,0.1)] transition-all duration-300"
                onClick={() => navigate('/case-study-detail')}
              >
                {/* Image mockup container with aspect-[16/10] */}
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden mb-6 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title & Description Content Block */}
                <div className="flex-grow mb-6">
                  <h3 className="text-slate-900 dark:text-white font-manrope font-semibold text-2xl leading-snug md:leading-relaxed mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal md:leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>

                {/* Footer row containing Tech Icons and View Case Study action */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Tech Icons (styled dark for optimal icon contrast in both light/dark modes) */}
                  <div className="flex items-center gap-2">
                    {techIcons.map((icon) => (
                      <div
                        key={icon.id}
                        className="w-10 h-10 rounded-xl border border-slate-800 bg-[#161618] flex items-center justify-center text-white shrink-0 scale-90"
                      >
                        {icon.element}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Load More Blogs Button */}
          <div className="flex justify-center mt-[60px]">
            <Button variant="primary">Load More Blogs</Button>
          </div>
        </Container>
      </SectionLayout>
    </PageLayout>
  );
};

export default CaseStudy;
