// src/components/HeaderNav.jsx
import { useEffect, useState } from "react";
import "./HeaderNav.css";

export default function HeaderNav() {
  const sections = ["about", "experience", "skills", "projects", "hobbies"];
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  // Highlight active section
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
        {/* Hamburger button */}
        <button
          className="menu__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>

        {/* Menu links */}
        <ul className={`nav__list ${menuOpen ? "show" : ""}`} role="list">
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
        </ul>
      </div>
    </nav>
  );
}