import { DesignIcon, LayersIcon, CodeIcon, MonitorIcon, PhoneIcon, CloudIcon, SyncIcon, LinkIcon, GlobeIcon, BrainIcon, ChatIcon, HealthIcon, FinanceIcon, TransportIcon, FoodIcon, LogisticsIcon, EcommerceIcon, EduIcon, RetailIcon, ConstructIcon, AboutIcon, CaseStudyIcon, CareersIcon, BlogIcon, LifeIcon, ContactIcon } from '../../assets/icons/navbar-icons';

import aiMlIllustration from '../../assets/ai-illustrations/ai-ml.png';
import genAiIllustration from '../../assets/ai-illustrations/gen-ai.png';

export const megaMenuData = {
  AI: {
    customLayout: true,
    featuredCards: [
      {
        subtitle: "AI-POWERED INNOVATION",
        title: "AI & Machine Learning Solutions",
        description: "Explore our AI capabilities across industries and business functions.",
        to: "/service/ai-ml-solutions",
        image: aiMlIllustration
      },
      {
        subtitle: "NEXT-GEN CONVERSATIONS",
        title: "Generative AI & Chatbots",
        description: "Build intelligent conversational agents that understand your customers.",
        to: "/service/genai-chatbots",
        image: genAiIllustration
      }
    ],
    listLinks: [
      { name: "Data Engineering & Big Data", to: "/service/data-engineering" },
      { name: "Business Intelligence & Analytics", to: "/service/business-intelligence" },
      { name: "Computer Vision & NLP", to: "/service/computer-vision-nlp" },
      { name: "AI Consulting & PoC Development", to: "/service/ai-consulting-poc" },
    ]
  },
  Services: {
    categories: [
      {
        id: "design-growth",
        title: "Design & Growth",
        icon: <DesignIcon />,
        services: [
          { name: "UI/UX Design", to: "/service/ui-ux-design", icon: <LayersIcon /> },
          { name: "Product Design", to: "/service/product-design", icon: <LayersIcon /> },
          { name: "Digital Marketing", to: "/service/digital-marketing", icon: <LayersIcon /> },
          { name: "E-Commerce & Retail", to: "/service/e-commerce-retail-solutions", icon: <LayersIcon /> },
          { name: "Logistics & Travel", to: "/service/logistics-travel-hospitality", icon: <LayersIcon /> },
        ]
      },
      {
        id: "product-engineering",
        title: "Product & Engineering",
        icon: <CodeIcon />,
        services: [
          { name: "Product Development", to: "/service/product-development", icon: <LayersIcon /> },
          { name: "Custom Software", to: "/service/custom-software-development", icon: <MonitorIcon /> },
          { name: "Mobile Apps", to: "/service/mobile-apps", icon: <PhoneIcon /> },
          { name: "Cloud & DevOps", to: "/service/cloud-devops", icon: <CloudIcon /> },
          { name: "App Modernization", to: "/service/app-modernization", icon: <SyncIcon /> },
          { name: "API Integrations", to: "/service/api-integrations", icon: <LinkIcon /> },
          { name: "Web Apps", to: "/service/web-apps", icon: <GlobeIcon /> },
          { name: "Dedicated Teams", to: "/service/dedicated-teams", icon: <LayersIcon /> },
        ]
      },
      {
        id: "ai",
        title: "Artificial Intelligence",
        icon: <BrainIcon />,
        services: [
          { name: "AI/ML Solutions", to: "/service/ai-ml-solutions", icon: <LayersIcon /> },
          { name: "GenAI & Chatbots", to: "/service/genai-chatbots", icon: <LayersIcon /> },
          { name: "AI Consulting & PoC", to: "/service/ai-consulting-poc", icon: <LayersIcon /> },
          { name: "Computer Vision & NLP", to: "/service/computer-vision-nlp", icon: <LayersIcon /> },
          { name: "Data Engineering", to: "/service/data-engineering", icon: <LayersIcon /> },
          { name: "Business Intelligence", to: "/service/business-intelligence", icon: <LayersIcon /> },
        ]
      },
      {
        id: "consulting",
        title: "Consulting & Delivery",
        icon: <ChatIcon />,
        services: [
          { name: "Tech Consulting", to: "/service/tech-consulting", icon: <LayersIcon /> },
          { name: "Digital Transformation", to: "/service/digital-transformation", icon: <LayersIcon /> },
          { name: "Team Augmentation", to: "/service/team-augmentation", icon: <LayersIcon /> },
          { name: "Healthcare Solutions", to: "/service/healthcare-solutions", icon: <LayersIcon /> },
          { name: "FinTech & Enterprise", to: "/service/fintech-enterprise-solutions", icon: <LayersIcon /> },
        ]
      }
    ]
  },
  Products: {
    customLayout: true,
    title: "Our Products",
    subtitle: "Powerful, purpose-built software solutions for the textile industry and beyond.",
    items: [
      {
        id: "textile-software",
        number: "01",
        title: "Textile Software",
        description: "End-to-end digital solutions for the textile industry.",
        subItems: [
          { title: "Wholesaler App", description: "B2B ordering app for wholesalers & distributors" },
          { title: "Production Software", description: "Streamline production, track & manage efficiently" },
          { title: "Staff App", description: "Empower your staff with real-time insights" }
        ]
      },
      {
        id: "format-flow",
        number: "02",
        title: "Format Flow",
        description: "Smart format management and workflow automation made simple."
      },
      {
        id: "tffms",
        number: "03",
        title: "TFFMS",
        description: "Temple management system to simplify operations, devotee management & accounting."
      },
      {
        id: "coderabbit",
        number: "04",
        title: "CodeRabbit",
        description: "AI Shield for secure code, smart reviews & vulnerability detection.",
        locked: true
      }
    ]
  },
  Company: {
    columns: [
      {
        title: "Company",
        links: [
          { name: "About Us", to: "/about", icon: <AboutIcon /> },
          { name: "Case Study", to: "/case-study", icon: <CaseStudyIcon /> },
          { name: "Careers", to: "/career", icon: <CareersIcon /> },
          { name: "Blog", to: "/our-blog", icon: <BlogIcon /> },
          { name: "Life At Codes", to: "/life-at-codes", icon: <LifeIcon /> },
          { name: "Contact Us", to: "/contact", icon: <ContactIcon /> },
        ],
      },
    ],
    featured: [
      {
        title: "Who We Are?",
        description: "Learn about our journey",
        to: "/about",
        gradient: "from-[#FF4D00] via-[#FF8A00] to-[#FFC400]",
      },
      {
        title: "Our Working Process",
        description: "How we deliver success",
        to: "/services",
        gradient: "from-[#00C0FF] via-[#005BFF] to-[#8E51FF]",
      },
    ],
  },
  Resources: {
    gridItems: [
      {
        title: "Healthcare",
        description: "We provides the complete Solutions for Improving Patient Outcomes, Integrated with Your Existing Systems and Workflows",
        icon: <HealthIcon />,
        to: "/service/healthcare-solutions"
      },
      {
        title: "Finance",
        description: "Help you to increased operational efficiency, agility and constant cost leadership by developing highly secure applications",
        icon: <FinanceIcon />,
        to: "/service/fintech-enterprise-solutions"
      },
      {
        title: "Transportation",
        description: "We provide transportation and logistics app development solutions with innovative technologies to manage your business flow & business operations",
        icon: <TransportIcon />,
        to: "/service/logistics-travel-hospitality"
      },
      {
        title: "Food & Beverages",
        description: "It helps the restaurant owners automate tasks to optimize stock levels, reduce food waste, and manage cash flow",
        icon: <FoodIcon />,
        to: "/services"
      },
      {
        title: "Logistics",
        description: "Delivering supply chain expertise to ensure operational control & visibility",
        icon: <LogisticsIcon />,
        to: "/service/logistics-travel-hospitality"
      },
      {
        title: "E-Commerce",
        description: "Codes Technology will help you build, operate and transfer the eCommerce Business Module with web and mobile development",
        icon: <EcommerceIcon />,
        to: "/service/e-commerce-retail-solutions"
      },
      {
        title: "Educational",
        description: "Build next-generation software leveraging technologies in web and mobile to make the learning process globally accessible, interactive, and affordable",
        icon: <EduIcon />,
        to: "/services"
      },
      {
        title: "Retail",
        description: "To grow your Retail business with IT technology and reach your store to your customers",
        icon: <RetailIcon />,
        to: "/service/e-commerce-retail-solutions"
      },
      {
        title: "Construction",
        description: "We provides custom software development and maintenance services that simplify processes by providing cost and time benefits, to organizations in the construction industry.",
        icon: <ConstructIcon />,
        to: "/services"
      }
    ]
  },
};
