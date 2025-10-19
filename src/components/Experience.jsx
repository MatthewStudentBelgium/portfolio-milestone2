import "./Experience.css";
import { experience } from "../data/experience.js";
import { motion } from "framer-motion";
import { scrollFade } from "../utils/motionSettings";

function Experience() {
  return (
    <motion.section className="experience" id="experience" {...scrollFade}>
      <h3 className="section__title">IT Experience</h3>
      <hr className="section__divider" />
      <ul className="experience__list" role="list">
        {experience.it.map((item, index) => (
          <li key={index} className="experience__item">
            <h4 className="experience__company">{item.company}</h4>
            <p className="experience__date">{item.date}</p>
          </li>
        ))}
      </ul>

      <h3 className="section__title">Additional Experience</h3>
      <hr className="section__divider" />
      <ul className="experience__list" role="list">
        {experience.additional.map((item, index) => (
          <li key={index} className="experience__item">
            <h4 className="experience__company">{item.company}</h4>
            <p className="experience__date">{item.date}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Experience;