import { ArrowUpRight, Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";
import { ProjectOverlay } from "../components/projectOverlay";
import { useEffect } from "react";

const projects = [
  {
    title: "Farm",
    description: `Built a simple and dynamic product website using core Node.js (no frameworks).
Implemented custom routing, server-side rendering, and file-based templating to display farm product
data from a JSON API.`,
    image: "/projects/Nodefarm.png",
    link: "",
    tags: ["HTML", "CSS", "NodeJs", "JavaScript", "PUG"],
    github: "https://github.com/crestharpan/NodeJs/tree/main/nodeFarm",
    live: "https://farmnode.onrender.com/",
  },
  {
    title: "Natours",
    description: `A full-stack tour booking website using Node.js, Express, 
    MongoDB, and Pug. Implemented features like user authentication, tour search, 
    map integration, booking system with ESEWA API, and MVC architecture for clean and scalable code structure.`,
    image: "/projects/Natours.png",
    link: "",
    tags: [
      "NodeJS",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "ExpressJS",
      "CSS",
      "HTML",
      "Sass",
      "REST API",
    ],
    github: "https://github.com/crestharpan/NodeJs/tree/main/Natours",
    live: "https://natours-tours-vm35.onrender.com/",
  },
  {
    title: "Pizza-Menu",
    description: ``,
    image: "/projects/pizza.png",
    link: "",
    tags: ["React", "JavaScript", "HTML"],
    github:
      "https://github.com/crestharpan/React-projects/tree/main/pizza-menu",
  },
  {
    title: "Travel-List",
    description: `a travel packing checklist app using React, allowing users to add, mark, sort, and delete
items. Utilized state management with hooks, conditional rendering, and component composition to
create an interactive and efficient user experience.`,
    image: "/projects/Travel.png",
    link: "",
    tags: ["React", "JavaScript", "HTML", "Docker", "Github Actions", "Nginx"],
    github: "https://github.com/crestharpan/Travel-list-Dockerized",
    live: "https://yours-bagpack.onrender.com/",
  },
];

export const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of projects showcasing my journey in web development,
            problem-solving, and continuous skill growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl animate-fade-in md:row-span-1 overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-via-card/50 to-transparent opacity-60" />
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300 ">
                  <a
                    href={project.live}
                    className="p-3 rounded-full glass-strong hover:bg-primary hover:text-foreground transition-all-in"
                  >
                    <Link className="w-5 h-5 cursor-pointer" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass-strong hover:bg-primary  transition-all-in"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5"
                    text-muted-foreground
                    group-hover:text-primary
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                    transition-all
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA for View all */}
        {/* Display the porject through and overlay */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            onClick={() => {
              console.log("CLICKED");
              setIsModalOpen(true);
            }}
          >
            View All
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
      <ProjectOverlay
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};
