import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const baseTitle = "Codes Technology";

const routeTitles = {
  "/": baseTitle,
  "/about": "About Us",
  "/services": "Services",
  "/our-blog": "Our Blog",
  "/case-study": "Case Studies",
  "/career": "Careers",
  "/privacy-policy": "Privacy Policy",
  "/terms-and-conditions": "Terms & Conditions",
  "/contact": "Contact Us",
  "/life-at-codes": "Life at Codes",
  "/service/custom-software-development": "Custom Software Development",
  "/service/product-development": "Product Development",
  "/service/web-apps": "Web Application Development",
  "/service/mobile-apps": "Mobile Application Development",
  "/service/cloud-devops": "Cloud & DevOps",
  "/service/api-integrations": "API Integrations",
  "/service/app-modernization": "App Modernization",
  "/service/tech-consulting": "Tech Consulting",
  "/service/dedicated-teams": "Dedicated Teams",
  "/service/team-augmentation": "Team Augmentation",
  "/service/digital-transformation": "Digital Transformation",
  "/service/ai-ml-solutions": "AI & ML Solutions",
  "/service/business-intelligence": "Business Intelligence",
  "/service/data-engineering": "Data Engineering",
  "/service/genai-chatbots": "GenAI Chatbots",
  "/service/ai-consulting-poc": "AI Consulting & PoC",
  "/service/computer-vision-nlp": "Computer Vision & NLP",
  "/service/healthcare-solutions": "Healthcare Solutions",
  "/service/e-commerce-retail-solutions": "E-Commerce & Retail Solutions",
  "/service/fintech-enterprise-solutions": "FinTech & Enterprise Solutions",
  "/service/logistics-travel-hospitality": "Logistics, Travel & Hospitality",
  "/service/ui-ux-design": "UI/UX Design",
  "/service/product-design": "Product Design",
  "/service/digital-marketing": "Digital Marketing",
};

export const useDocumentTitle = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    let newTitle = baseTitle;
    
    if (routeTitles[location.pathname]) {
      newTitle = location.pathname === "/" ? baseTitle : `${routeTitles[location.pathname]} | ${baseTitle}`;
    } else {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      if (pathSegments.length > 0) {
        const lastSegment = pathSegments[pathSegments.length - 1];
        const formatted = lastSegment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        newTitle = `${formatted} | ${baseTitle}`;
      }
    }
    
    document.title = newTitle;
  }, [location.pathname]);
};
