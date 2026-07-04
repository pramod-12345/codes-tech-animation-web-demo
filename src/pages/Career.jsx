import PageLayout from "../components/layout/PageLayout";
import LifeAtCodes from "../components/sections/Career/LifeAtCodes";
import CareerOpportunities from "../components/sections/Career/CareerOpportunities";
import PageHeader from "../components/common/PageHeader";
import OurValues from "../components/common/OurValues";
import internet from "../assets/icons/internet.svg";
import rocket from "../assets/icons/rocket.svg";
import code from "../assets/icons/code.svg";
import cap from "../assets/icons/cap.svg";
import Container from "../components/layout/Container";

const careerValues = [
  {
    title: "Engineering Excellence",
    description: "Work on complex, high-impact systems with senior engineers.",
    bgColor: "bg-brand-blue/10",
    icon: code,
  },
  {
    title: "Growth & Learning",
    description:
      "Structured mentorship, technical upskilling, and knowledge sharing.",
    bgColor: "bg-brand-purple/10",
    icon: cap,
  },
  {
    title: "Remote-First Team",
    description: "Flexible work, focused outcomes, global collaboration.",
    bgColor: "bg-brand-green/10",
    icon: internet,
  },
  {
    title: "Impact-Driven Projects",
    description: "Build products that users rely on for real businesses.",
    bgColor: "bg-brand-orange/10",
    icon: rocket,
  },
];

const Career = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Build the Future with Us"
        breadcrumbs={["Home", "Career"]}
        subtitle="We’re a global team of engineers, designers, and problem-solvers building scalable software and AI solutions. If you think big and deliver even bigger you belong here."
        className="relative pt-36 pb-28 md:pt-48 md:pb-36 mb-14 md:mb-36"
        titleClassName="max-w-[80%] sm:max-w-2xl leading-tight"
        subtitleClassName="max-w-md sm:max-w-lg"
      />
      <OurValues
        badgeTitle="Culture & Mission"
        mainText="Why Work at"
        italicText="CODES"
        subtitleText="At CODES, we combine deep engineering rigor with creative problem-solving.
      We care about quality, transparency, and growth — both for the products we
      build and the people building them."
        values={careerValues}
        leftContainerStyle="lg:max-w-md"
        cardClass="justify-between"
      />

      <Container className="w-full h-[1px] bg-slate-200 dark:bg-white/30 max-w-7xl mx-auto"></Container>

      <CareerOpportunities />
      <LifeAtCodes />
    </PageLayout>
  );
};

export default Career;
