
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PromptEditorSection from "@/components/sections/PromptEditorSection";
import TargetSection from "@/components/sections/TargetSection";
import ROISection from "@/components/sections/ROISection";
import TimeCalculatorSection from "@/components/sections/TimeCalculatorSection";
import TestDriveSection from "@/components/sections/TestDriveSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ComparisonSection />
      <FeaturesSection />
      <PromptEditorSection />
      <TargetSection />
      <ROISection />
      <TimeCalculatorSection />
      <TestDriveSection />
      <CTASection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
