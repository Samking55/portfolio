import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get In{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button variant="default" size="lg" asChild>
                <a href="mailto:ndris219@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/Samking55"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
