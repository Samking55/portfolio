import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Job Application automation app",
    description:
      "A full stack mobile APP that lets you add recrutors to your list then automate job application twice a day throughout the duration set by the user",
    tags: ["React Native", "React JS", "CI net Pay", "MySQL", "PHP & Laravel"],
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop",
    github: "https://github.com/Samking55/recrutio.git",
    live: "#",
  },
  {
    title: "Residence Finder Web App",
    description:
      "A residence finder app that lets you find residence in your area",
    tags: ["React", "PHP & Laravel", "MySQL", "Tailwind", "Google Maps"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    github: "https://github.com/Samking55/welly-api.git",
    live: "#",
  },
  {
    title: "Fitness Tracking App",
    description:
      "Mobile-first progressive web app for tracking workouts and fitness goals with social features, first made for learning deep core concept of React JS. Has been discontinued due to lack of financial ressource to maintain it available online.",
    tags: ["PWA", "React Native", "PHP & Laravel", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border hover:border-primary/40 transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
