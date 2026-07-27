import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Hobbies from "@/components/sections/Hobbies";
import Extracurricular from "@/components/sections/Extracurricular";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BootScreen from "@/components/terminal/BootScreen";
import CommandLine from "@/components/terminal/CommandLine";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <BootScreen />
      <Navigation />

      {/* CRT scanlines + vignette over everything */}
      <div className="crt-overlay fixed inset-0 pointer-events-none z-[90]" aria-hidden="true" />
      <div className="crt-vignette fixed inset-0 pointer-events-none z-[90]" aria-hidden="true" />

      {/* pt clears the fixed header (quote strip + fn nav + ticker), pb clears the command line */}
      <div className="pt-[7.25rem] pb-20">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 space-y-4 mt-2">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Extracurricular />
          <Hobbies />
          <Contact />
        </div>
        <Footer />
      </div>

      <CommandLine />
    </main>
  );
};

export default Index;
