import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import AudienceSection from "@/components/AudienceSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <AudienceSection />
      <FeaturedCollections />
      <Footer />
    </main>
  );
};

export default Index;
