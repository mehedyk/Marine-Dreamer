import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import CoursesSection from "@/components/CoursesSection";
import PostersSection from "@/components/PostersSection";
import BooksSection from "@/components/BooksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import QuickThemeToggle from "@/components/QuickThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <HeroSection />
      <FounderSection />
      <CoursesSection />
      <PostersSection />
      <BooksSection />
      <ContactSection />
      <Footer />
      <ThemeSwitcher />
      <QuickThemeToggle />
    </main>
  );
};

export default Index;
