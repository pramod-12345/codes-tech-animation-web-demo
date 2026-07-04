import PageLayout from "../components/layout/PageLayout";
import FAQSection from "../components/common/FAQs";
import Testimonials from "../components/sections/Home/Testimonials";
import WhyChooseUs from "../components/sections/Home/WhyChooseUs";
import HeroToServicesLayout from "../components/sections/Home/HeroToServicesLayout";
import CaseStudy from "../components/sections/Home/CaseStudy";
import CodingAgents from "../components/sections/Home/CodingAgents";

const Home = () => {
  return (
    <PageLayout>
      <HeroToServicesLayout />
      <WhyChooseUs />
      <CodingAgents />
      <CaseStudy />
      <Testimonials />
      <FAQSection />
    </PageLayout>
  );
};

export default Home;
