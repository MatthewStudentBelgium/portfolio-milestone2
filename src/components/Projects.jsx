import "./Projects.css";
import { projects } from "../data/projects.js";
import { motion } from "framer-motion";
import { scrollFade } from "../utils/motionSettings";

function Projects() {
  return (
    <motion.section className="projects" id="projects" {...scrollFade}>
      <h3 className="section__title">Projects</h3>
      <hr className="section__divider" />

      <div className="projects__list">
        {projects.map((proj, index) => (
          <div key={index} className="project__card">
            <h4 className="project__title">{proj.title}</h4>

            <div className="project__tech">
              {proj.tech.map((tech, i) => (
                <span key={i} className="badge">{tech}</span>
              ))}
            </div>

            <ul className="project__desc" role="list">
              {proj.description.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;