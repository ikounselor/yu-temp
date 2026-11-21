import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Institutions from "@/components/sections/Institution";
import WhyYungUnitee from "@/components/sections/WhyYungUnitee";
import PoweredBy from "@/components/sections/PoweredBy";
import Contact from "@/components/sections/Contact";
import ScrollHashSync from "@/components/layout/ScrollHashSync";

export default function Home() {
  return (
    <>
      <ScrollHashSync />
      <a href="#main" className="absolute left-[-9999px] top-4 z-100 rounded-md bg-light p-3 text-secondary focus:left-4">
        Skip to content
      </a>

      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Institutions />
        <WhyYungUnitee />
        <PoweredBy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
