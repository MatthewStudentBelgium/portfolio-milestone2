import { useEffect, useState } from "react";
import "./HeaderNav.css";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderNav() {
  const sections = ["about", "experience", "skills", "projects", "hobbies"];
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll into section when clicked
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Detect section in view
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

  return (
    <nav className="navbar">
      <div className="nav__container">
        {/* Hamburger Menu Button */}
        <button
          className="menu__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>

        {/* Navigation Links */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth > 700) && (
            <motion.ul
              key="nav-menu"
              className={`nav__list ${menuOpen ? "show" : ""}`}
              role="list"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {sections.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`nav__link ${
                      activeSection === id ? "active" : ""
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}