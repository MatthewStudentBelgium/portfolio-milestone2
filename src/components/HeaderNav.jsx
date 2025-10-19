import { useEffect, useState } from "react";
import "./HeaderNav.css";

export default function HeaderNav() {
  const sections = ["about",  "education", "experience", "skills", "projects", "hobbies"];
  const [activeSection, setActiveSection] = useState("about");
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-70px 0px -40% 0px",
      }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) setActiveSection("about");
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10)
        setActiveSection("hobbies");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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