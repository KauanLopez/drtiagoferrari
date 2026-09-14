import { NavigationBar } from '../components/layout/NavigationBar';
import { Footer } from '../components/layout/Footer';
import {
  HeroSection,
  AboutFeatureSection,
  ServicesHighlightSection,
  TreatmentDetailSection,
  ProcessAndTeamSection,
  TestimonialOverlapSection,
  MinimalCTASection,
  FAQSection
} from '../components/sections';

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="hero-wrapper">
        <NavigationBar />
        <HeroSection />
      </div>
      <AboutFeatureSection />
      <ServicesHighlightSection />
      <TreatmentDetailSection />
      <ProcessAndTeamSection />
      <FAQSection />
      <TestimonialOverlapSection />
      <MinimalCTASection />
      <Footer />
    </div>
  );
};

export default Home;
