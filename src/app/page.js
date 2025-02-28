import AboutSection from "@/components/features/about";
import { ContactSection } from "@/components/features/contact";
import HomeSection from "@/components/features/home";
import PortfolioSection from "@/components/features/portfolio";
import SkillSection from "@/components/features/skill";

export default function Home() {
  return (
    <>
      <HomeSection />;
      <AboutSection/>;
      <PortfolioSection />;
      <SkillSection />;
      <section className="w-[100%]">
        <div className="max-w-[1200px] mx-auto">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
