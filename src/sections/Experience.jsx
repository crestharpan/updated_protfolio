const experiences = [
  {
    period: "March 2025 - June 2025",
    role: "Backend Developer Intern",
    company: "Bluefox PVT LTD",
    description: "Assisted backend teams on developing RESTful APIs",
    technologies: [
      "NodeJS",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "ExpressJS",
      "Postman",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-56 h-96 bg-primary/5 rounded-full blur-3x; -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-10">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>
          <h2 className="text-4xl md-text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              Speaks
            </span>
          </h2>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          {/* Experience item */}
          <div>
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative grid  md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"></div>
                {/* COntent */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pl-16"
                      : "md:col-start-2 md:pr-16 md:text-right"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {experience.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {experience.role}
                    </h3>
                    <p className="text-muted-foreground">
                      {experience.company}
                    </p>
                    <p text-sm text-muted-foreground mt-4>
                      {experience.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 mt-4 `}>
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
