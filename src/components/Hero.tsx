import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-pulse -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent animate-glow-pulse">
              Alex Chen
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-light">
            Full-Stack Web Developer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, performant web applications with modern technologies.
          Specialized in React, TypeScript, and cloud-native solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            variant="gradient"
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="text-base"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-base"
          >
            Get In Touch
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
