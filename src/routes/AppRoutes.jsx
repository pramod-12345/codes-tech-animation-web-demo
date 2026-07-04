import { lazy, Suspense, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from 'lenis/react';

import ProgressBar from "../components/common/ProgressBar";
import ReadyToBuild from "../components/sections/Home/ReadyToBuild";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// Lazy loaded page components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Services = lazy(() => import("../pages/Services"));
const OurBlog = lazy(() => import("../pages/OurBlog"));
const BlogDetail = lazy(() => import("../pages/BlogDetail"));
const CaseStudy = lazy(() => import("../pages/CaseStudy"));
const CaseStudyDetail = lazy(() => import("../pages/CaseStudyDetail"));
const Career = lazy(() => import("../pages/Career"));
const CareerDetail = lazy(() => import("../pages/CareerDetail"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsAndCondition = lazy(() => import("../pages/TermsAndCondition"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const LifeAtCodes = lazy(() => import("../pages/LifeAtCodes"));
const ErrorPage = lazy(() => import("../pages/Error"));

// Lazy loaded Service pages
const ProductDevelopment = lazy(() => import("../pages/ServicePages/ProductDevelopment"));
const CustomSoftwareDevelopment = lazy(() => import("../pages/ServicePages/CustomSoftwareDevelopment"));
const WebApps = lazy(() => import("../pages/ServicePages/WebApps"));
const MobileApps = lazy(() => import("../pages/ServicePages/MobileApps"));
const CloudDevOps = lazy(() => import("../pages/ServicePages/CloudDevOps"));
const APIIntegrations = lazy(() => import("../pages/ServicePages/APIIntegrations"));
const AppModernization = lazy(() => import("../pages/ServicePages/AppModernization"));
const TechConsulting = lazy(() => import("../pages/ServicePages/TechConsulting"));
const DedicatedTeams = lazy(() => import("../pages/ServicePages/DedicatedTeams"));
const TeamAugmentation = lazy(() => import("../pages/ServicePages/TeamAugmentation"));
const DigitalTransformation = lazy(() => import("../pages/ServicePages/DigitalTransformation"));
const AIMLSolutions = lazy(() => import("../pages/ServicePages/AIMLSolutions"));
const BusinessIntelligence = lazy(() => import("../pages/ServicePages/BusinessIntelligence"));
const DataEngineering = lazy(() => import("../pages/ServicePages/DataEngineering"));
const GenAIChatbots = lazy(() => import("../pages/ServicePages/GenAIChatbots"));
const AIConsultingPoC = lazy(() => import("../pages/ServicePages/AIConsultingPoC"));
const ComputerVisionNLP = lazy(() => import("../pages/ServicePages/ComputerVisionNLP"));
const HealthcareSolutions = lazy(() => import("../pages/ServicePages/HealthcareSolutions"));
const ECommerceRetail = lazy(() => import("../pages/ServicePages/ECommerceRetail"));
const FinTechEnterprise = lazy(() => import("../pages/ServicePages/FinTechEnterprise"));
const LogisticsTravelHospitality = lazy(() => import("../pages/ServicePages/LogisticsTravelHospitality"));
const UIUXDesign = lazy(() => import("../pages/ServicePages/UIUXDesign"));
const ProductDesign = lazy(() => import("../pages/ServicePages/ProductDesign"));
const DigitalMarketing = lazy(() => import("../pages/ServicePages/DigitalMarketing"));

const AppRoutes = () => {
  const location = useLocation();
  const lenis = useLenis();

  useDocumentTitle();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

  const hideReadyToBuild = location.pathname === "/career-detail";

  return (
    <Suspense fallback={<ProgressBar />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-blog" element={<OurBlog />} />
        <Route path="/our-blog-detail" element={<BlogDetail />} />
        <Route path="/our-blog/:slug" element={<BlogDetail />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study-detail" element={<CaseStudyDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career-detail" element={<CareerDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/life-at-codes" element={<LifeAtCodes />} />
        
        {/* Services Routes */}
        <Route path="/service/custom-software-development" element={<CustomSoftwareDevelopment />} />
        <Route path="/service/product-development" element={<ProductDevelopment />} />
        <Route path="/service/web-apps" element={<WebApps />} />
        <Route path="/service/mobile-apps" element={<MobileApps />} />
        <Route path="/service/cloud-devops" element={<CloudDevOps />} />
        <Route path="/service/api-integrations" element={<APIIntegrations />} />
        <Route path="/service/app-modernization" element={<AppModernization />} />
        <Route path="/service/tech-consulting" element={<TechConsulting />} />
        <Route path="/service/dedicated-teams" element={<DedicatedTeams />} />
        <Route path="/service/team-augmentation" element={<TeamAugmentation />} />
        <Route path="/service/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/service/ai-ml-solutions" element={<AIMLSolutions />} />
        <Route path="/service/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/service/data-engineering" element={<DataEngineering />} />
        <Route path="/service/genai-chatbots" element={<GenAIChatbots />} />
        <Route path="/service/ai-consulting-poc" element={<AIConsultingPoC />} />
        <Route path="/service/computer-vision-nlp" element={<ComputerVisionNLP />} />
        <Route path="/service/healthcare-solutions" element={<HealthcareSolutions />} />
        <Route path="/service/e-commerce-retail-solutions" element={<ECommerceRetail />} />
        <Route path="/service/fintech-enterprise-solutions" element={<FinTechEnterprise />} />
        <Route path="/service/logistics-travel-hospitality" element={<LogisticsTravelHospitality />} />
        <Route path="/service/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/service/product-design" element={<ProductDesign />} />
        <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
        
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!hideReadyToBuild && <ReadyToBuild />}
    </Suspense>
  );
};

export default AppRoutes;
