import brain from "../../assets/icons/brain.svg";
import circle from "../../assets/icons/circle.svg";
import eye from "../../assets/icons/eye.svg";
import search from "../../assets/icons/search.svg";

export const COMPANY_VALUES = [
  {
    title: "Accountability Over Activity",
    description:
      "We measure ourselves by outcomes delivered, not hours logged. Every engagement has a named owner who is responsible for the result, not just the effort.",
    icon: circle,
    bgColor: "bg-brand-blue/10",
  },
  {
    title: "Specificity Over Generality",
    description:
      "We do not offer generic technology advice. We give specific recommendations based on your actual data, systems, and constraints.",
    icon: search,
    bgColor: "bg-brand-green/10",
  },
  {
    title: "Transparency as Default",
    description:
      "You always know where your project stands. We share bad news early, document decisions, and do not hide behind status reports.",
    icon: eye,
    bgColor: "bg-brand-purple/10",
  },
  {
    title: "Engineering Depth, Business Fluency",
    description:
      "Our engineers understand P&L. Our consultants can review a pull request. The intersection of technical and business thinking is where we do our best work.",
    icon: brain,
    bgColor: "bg-brand-orange/10",
  },
];
