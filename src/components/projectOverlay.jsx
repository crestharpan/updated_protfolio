import { Link, ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Eat-N split",
    description: `a bill-splitting app using React, allowing users to manage friends and split
  expenses easily. Utilized component-based architecture, state management with hooks, and dynamic form
  handling for a responsive and user-friendly experience.`,
    image: "/projects/project4.png",
    link: "",
    tags: ["React", "JavaScript", "HTML"],
    github:
      "https://github.com/crestharpan/React-projects/tree/main/split-bill",
  },

  {
    title: "Bank App",
    description: `a responsive and interactive banking UI using HTML, CSS, and JavaScript- .
Implemented features like user login, transaction history, fund transfers, loan requests, and account
closure with dynamic DOM manipulation and state handling.`,
    image: "/projects/Bank-app.png",
    link: "",
    tags: ["HTML, CSS, JavaScript"],
    github:
      "https://github.com/crestharpan/React-projects/tree/main/split-bill",
  },
  {
    title: "Bank Web",
    description: `A responsive banking landing page featuring smooth scrolling, lazy loading, sticky navigation, 
    and interactive UI components to deliver an engaging user experience using modern JavaScript techniques.`,
    image: "/projects/Bank-web.png",
    link: "",
    tags: ["HTML, CSS, JavaScript"],
    github: "https://github.com/crestharpan/Advance-DOM-JavaScript-",
  },
  {
    title: "Guess The Number",
    description: `an interactive JavaScript game where users try to guess a randomly generated number within a 
    limited number of attempts. The project demonstrates core JavaScript concepts such as DOM manipulation,
     event handling, conditional logic, and dynamic UI updates to provide real-time feedback and score tracking.`,
    image: "/projects/Guess-the-number.png",
    link: "",
    tags: ["HTML, CSS, JavaScript"],
    github:
      "https://github.com/crestharpan/Basic-JS-Projects/blob/main/Project-1(DOM%20MANIPULATION)/script_full.js",
  },
  {
    title: "Lucky-10",
    description: `Built a two-player dice game using HTML, CSS, and JavaScript, featuring dynamic UI
updates, turn-based logic, and state management. Applied event handling and DOM manipulation to
create a responsive and engaging user experience`,
    image: "/projects/Lucky-10.png",
    link: "",
    tags: ["HTML, CSS, JavaScript"],
    github:
      "https://github.com/crestharpan/Basic-JS-Projects/tree/main/Pig-Game(DOM%20MANIPULATION)",
  },
];

export const ProjectOverlay = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen ? "visible opacity-100" : "invisible opacity-0"} bg-black/60`}
    >
      <div className="relative bg-surface w-[90%] max-w-auto h-[90%]  p-6 pt-0 rounded-2xl overflow-y-auto overflow-x-hidden custom-scrollbar">
        <div className="sticky flex justify-end top-4 z-50  w-auto rounded-full  glass-strong  p-3 ">
          <button
            className=" text-muted-foreground cursor-pointer rounded-full bg-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-20 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 "
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover overflow-hidden "
                />
                <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300 ">
                  <a
                    href={project.live}
                    className="p-3 rounded-full glass-strong hover:bg-primary hover:text-foreground  transition-all-in"
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
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span>
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="text-muted-foreground text-sm">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
