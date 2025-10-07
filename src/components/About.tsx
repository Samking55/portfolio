const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="animate-fade-in">
            I'm a passionate web & mobile developer building scalable,
            user-centric applications. My journey in tech started with a
            curiosity about how websites work, and it's evolved into a deep
            expertise in modern web & mobile development.
          </p>

          <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            I specialize in the PHP ecosystem, and cloud platforms like Vercel.
            I believe in writing clean, maintainable code and creating intuitive
            user experiences that solve real problems.
          </p>

          <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            When I'm not coding, you'll find me creating open-source
            projects, or exploring the latest web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
