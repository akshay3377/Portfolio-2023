
import AboutUsection from "./components/aboutSection";
import HomeSection from "./components/homeSection";
import SkillSection from "./components/skillSection";
import PortfolioSection from "./components/portfolioSection";
import ContactSection from "./components/contactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutUsection />
      <SkillSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
