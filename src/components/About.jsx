// src/components/About.jsx
import "./About.css";
import { about } from "../data/about.js";
import { motion } from "framer-motion";
import { scrollFade } from "../utils/motionSettings";

export default function About() {
  return (

    <motion.section className="about" id="about" {...scrollFade}>
      <p className="about__text">{about.summary}</p>
    </motion.section>
  );
}