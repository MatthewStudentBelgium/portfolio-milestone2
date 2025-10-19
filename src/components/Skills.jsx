import "./Skills.css";
import { skills } from "../data/skills.js";
import { motion } from "framer-motion";
import { scrollFade } from "../utils/motionSettings";

export default function Skills() {
  return (
    <motion.section className="skills" id="skills" {...scrollFade}>
      <h3 className="section__title">Technical Skills</h3>
      <hr className="section__divider" />

      <div className="skills__group">
        <h4 className="skills__subtitle">Programming Languages</h4>
        <div className="skills__badges">
          {skills.programming.map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills__group">
        <h4 className="skills__subtitle">Web Development</h4>
        <div className="skills__badges">
          {skills.webDevelopment.map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills__group">
        <h4 className="skills__subtitle">Database & Tools</h4>
        <div className="skills__badges">
          {skills.databaseTools.map((skill, index) => (
            <span key={index} className="badge">{skill}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

