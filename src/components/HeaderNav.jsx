import { useEffect, useState } from "react";
import "./HeaderNav.css";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderNav() {
  const sections = ["about", "experience", "skills", "projects", "hobbies"];
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Highlight section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) setMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav__container">
        {/* Hamburger button (only visible on mobile via CSS) */}
        <button
          className="menu__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>

        {/* Always render nav list, visibility handled by CSS */}
        <AnimatePresence>
          <motion.ul
            className={`nav__list ${menuOpen ? "show" : ""}`}
            role="list"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {sections.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`nav__link ${activeSection === id ? "active" : ""}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </nav>
  );
}