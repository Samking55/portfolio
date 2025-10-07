import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">
          © 2025 Luc Samuel. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
