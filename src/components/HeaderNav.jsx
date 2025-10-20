import { useEffect, useState } from "react";
import "./HeaderNav.css";

export default function HeaderNav() {
  const sections = ["about", "experience", "skills", "projects", "hobbies"];
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <ul className="nav__list" role="list">
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
      </ul>
    </nav>
  );
}