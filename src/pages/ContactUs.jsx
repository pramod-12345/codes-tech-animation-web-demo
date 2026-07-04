import PageLayout from "../components/layout/PageLayout";
import {
  Alphawave,
  Biosynthesis,
  Bolshift,
  BuildingBlocks,
  Chromatool,
  Clandestine,
  CloudWatch,
  CodeCraft,
  Constellation,
  ContrastAi,
  Eightball,
} from "../assets/icons/our-trusted-clients";
import PageHeader from "../components/common/PageHeader";
import SectionBadge from "../components/common/SectionBadge";
import SectionHeading from "../components/common/SectionHeading";
import ContactForm from "../components/sections/ContactUs/ContactForm";
import ContactInfoGrid from "../components/sections/ContactUs/ContactInfoGrid";
import GlobalWorkspaces from "../components/sections/ContactUs/GlobalWorkspaces";
import FAQSection from "../components/common/FAQs";
import SectionLayout from "../components/layout/SectionLayout";
import Container from "../components/layout/Container";

const ContactUs = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Have a project in mind? Let’s talk."
        breadcrumbs={["Home", "Contact Us"]}
        className="relative pt-36 pb-20 md:pt-48 md:pb-24"
        titleClassName="max-w-[90%] sm:max-w-2xl lg:leading-tight xl:leading-tight"
      />

      <SectionLayout className="select-none text-slate-900 dark:text-white">
        <Container className="flex flex-col items-center ">
          <SectionBadge title="Contact Us" />
          <SectionHeading
            mainText="Start the"
            align="center"
            italicText="Conversation"
            italicOnNextLine={false}
            subtitleText="Tell us what you are building or where you are stuck. We will respond within one business day with a direct assessment, not a sales pitch."
            subtitleClass={"sm:max-w-lg text-center mb-12"}
            subtitleFontSize={"text-sm md:text-base"}
          />

          <ContactInfoGrid />
        </Container>
      </SectionLayout>
      <SectionLayout>
        <Container>
          <ContactForm />
        </Container>
      </SectionLayout>

      <SectionLayout>
        <Container>
          <GlobalWorkspaces />
        </Container>
      </SectionLayout>

      <SectionLayout className="px-4 md:px-6 mt-20 md:mt-32 mb-20 md:mb-36 flex flex-col items-center select-none text-slate-900 dark:text-white">
        <Container>
          <SectionHeading
            mainText="Our Trusted"
            align="center"
            italicText="Clients"
            italicOnNextLine={false}
          />

          <div className="w-full max-w-7xl mt-7">
            <div className="hidden md:block space-y-[34px]">
              <div className="flex items-center justify-between flex-wrap">
                <Alphawave />
                <Biosynthesis />
                <Bolshift />
                <Chromatool />
              </div>
              <div className="flex items-center justify-between flex-wrap">
                <Eightball />
                <Eightball />
                <ContrastAi />
                <BuildingBlocks />
              </div>
              <div className="flex items-center justify-between flex-wrap">
                <CloudWatch />
                <Clandestine />
                <CodeCraft />
                <Constellation />
              </div>
            </div>

            <div className="md:hidden grid grid-cols-2 gap-x-4 gap-y-6 px-1 sm:gap-x-6 sm:gap-y-8">
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Alphawave />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Biosynthesis />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Bolshift />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Chromatool />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Eightball />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Eightball />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <ContrastAi />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <BuildingBlocks />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <CloudWatch />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Clandestine />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <CodeCraft />
                </div>
              </div>
              <div className="flex items-center justify-start overflow-hidden">
                <div className="origin-left scale-[0.58] sm:scale-[0.7]">
                  <Constellation />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionLayout>
      <FAQSection />
    </PageLayout>
  );
};

export default ContactUs;
