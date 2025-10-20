import "./Education.css";
import { education } from "../data/education";
import { Award, GraduationCap, School } from "lucide-react";
import { educationFade } from "../utils/motionSettings";
import { motion } from "framer-motion";
import { cardFade } from "../utils/motionSettings";

export default function Education() {
  const renderIcon = (name) => {
    switch (name) {
      case "award":
        return <Award size={18} color="#1d4ed8" />;
      case "graduation":
        return <GraduationCap size={18} color="#1d4ed8" />;
      case "school":
        return <School size={18} color="#1d4ed8" />;
      default:
        return null;
    }
  };

  return (
    <motion.section className="education" id="education" {...educationFade}>
      <h3 className="section__title">Education</h3>
      <hr className="section__divider" />

      <div className="education__list">
        {education.map((item, index) => (
          <motion.div key={index} className="education__card"  {...cardFade}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}>
            <h4 className="education__institution">{item.institution}</h4>

            <motion.div className="education__qualification"  {...cardFade}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}>
              {item.icon && (
                <span className="education__icon">{renderIcon(item.icon)}</span>
              )}
              <span>{item.qualification}</span>
            </motion.div>

            <span className="education__period">{item.period}</span>

            <ul className="education__details" role="list">
              {item.details.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}