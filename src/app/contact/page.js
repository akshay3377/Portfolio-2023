import { ContactSection, FAQSection } from "@/components/features/contact";

const Contact = () => {
  return (
    <section className="w-[100%]">
      <div className="max-w-[1200px] mx-auto">
        <ContactSection />
        <FAQSection />
      </div>
    </section>
  );
};

export default Contact;
