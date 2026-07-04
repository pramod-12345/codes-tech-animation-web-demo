import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/common/PageHeader";
import PersonalizedEngagement from "../components/sections/LifeAtCodes/PersonalizedEngagement";
import BehavioralTriggers from "../components/sections/LifeAtCodes/BehavioralTriggers";
import LeadMagnets from "../components/sections/LifeAtCodes/LeadMagnets";
import CuratedNavigation from "../components/sections/LifeAtCodes/CuratedNavigation";
import FAQs from "../components/common/FAQs";

const seoFaqs = [
  {
    id: 1,
    question: "Semantic Entity Mapping",
    answer:
      "We move beyond keywords to map entities and relationships, ensuring your content satisfies Google's E-E-A-T requirements and aligns with complex search intent.",
  },
  {
    id: 2,
    question: "Technical Core Web Vitals",
    answer:
      "We optimize critical performance metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to secure top-tier organic rankings.",
  },
  {
    id: 3,
    question: "Conversion-Focused Interlinking",
    answer:
      "We establish semantic pathways through contextual links that distribute authority across high-value conversion pages and keep users engaged.",
  },
];

const LifeAtCodes = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Engineering the Future of Your Business."
        breadcrumbs={["Home", "Life At Codes"]}
        subtitle="Strategic recommendations to maximize lead generation and conversion on the CODES Technology website"
        className="relative pt-36 pb-12 md:pt-48 md:pb-[70px]"
        titleClassName="max-w-[80%] lg:leading-normal xl:leading-tight"
        subtitleClassName="max-w-md sm:max-w-lg"
        isButton={true}
      />
      <CuratedNavigation />
      <LeadMagnets />
      <BehavioralTriggers />

      <FAQs
        faqs={seoFaqs}
        badge={null}
        mainText="SEO Optimization"
        italicText="Deep Dives"
        subtitleText="Answers to the most common questions about working with CODES."
        isArrow={true}
        className="mb-0"
      />
      <PersonalizedEngagement />
    </PageLayout>
  );
};

export default LifeAtCodes;
