import PageLayout from "../components/layout/PageLayout";
import AboutHeader from "../components/sections/AboutUs/AboutHeader";
import OurImpact from "../components/sections/AboutUs/OurImpact";
import OurStory from "../components/sections/AboutUs/OurStory";
import OurValues from "../components/common/OurValues";
import BigIdeas from "../components/sections/AboutUs/BigIdeas";
import LifeAtCodes from "../components/sections/AboutUs/LifeAtCodes";
import { COMPANY_VALUES } from "../config/data/valuesData";

const AboutUs = () => {
  return (
    <PageLayout>
      <AboutHeader />
      <BigIdeas />
      <OurImpact />
      <OurStory />
      <OurValues
        badgeTitle="Our Values"
        mainText="How We"
        italicText="Operate"
        subtitleText="Beyond the code, these are the principles that guide our decision-making every day."
        values={COMPANY_VALUES}
      />
      <LifeAtCodes />
    </PageLayout>
  );
};

export default AboutUs;
