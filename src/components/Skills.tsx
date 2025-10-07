import { Code2, Database, Cloud, Smartphone, Palette, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    technologies: ["React", "React Router", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend & Databases",
    technologies: ["PHP", "MySQL", "Laravel"],
  },
  
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["React Native", "Progressive Web Apps", "Responsive Design"],
  },
  {
    icon: Zap,
    title: "Performance",
    technologies: ["Optimization", "SEO", "Core Web Vitals", "Lighthouse"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="bg-gradient-accent bg-clip-text">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 bg-card border-border hover:border-primary/40 transition-all hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
