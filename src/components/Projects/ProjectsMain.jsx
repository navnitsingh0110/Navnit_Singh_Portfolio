import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Meditation Application",
    year: "Feb 2025",
    align: "right",
    image: "/images/MedApp.png",
    link: "https://meditation-application-bay.vercel.app/",
  },
  {
    name: "Pokemon Cards",
    year: "Jan 2025",
    align: "left",
    image: "/images/PokCards.png",
    link: "https://pokemon-cards-rose.vercel.app/",
  },
  {
    name: "Chat App",
    year: "Mar 2025",
    align: "right",
    image: "/images/ChatApp.png",
    link: "https://chat-app-indol-two-74.vercel.app/",
  },
  {
    name: "Memory Game",
    year: "Feb 2025",
    align: "left",
    image: "/images/MemoryGame.png",
    link: "https://match-pair-navy.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;