import { motion } from "framer-motion";
import { hobbies } from "../data/footer";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="hobbies" className="footer">
      <div className="footer__container">
        <h3 className="section__title">Hobbies</h3>
        <hr className="section__divider" />

        <div className="hobbies__grid">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.name}
                className="hobby-card"
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="hobby__icon" size={30} strokeWidth={1.6} />
                <p className="hobby__name">{hobby.name}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="footer__copyright">
          © 2025 Matthew Roberts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}