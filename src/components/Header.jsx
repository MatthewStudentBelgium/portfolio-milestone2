import "./Header.css";
import { useState } from "react";
import { profile } from "../data/profile.js";
import profilePhoto from "../assets/project-images/ProfilePicture.png";
import profileFull from "../assets/project-images/ProfileFull.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { headerFade, profilePicMotion, imageModalMotion } from "../utils/motionSettings";

// icons
import EmailIcon from "../assets/icons/Email.png";
import PhoneIcon from "../assets/icons/Phone.png";
import GitHubIcon from "../assets/icons/GitHub.png";
import LinkedInIcon from "../assets/icons/LinkedIn.png";
import LocationIcon from "../assets/icons/Location.png";
import BrowserIcon from "../assets/icons/Browser.png";

export default function Header() {
  const contacts = [
    { icon: EmailIcon, label: profile.email, href: `mailto:${profile.email}` },
    { icon: PhoneIcon, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
    { icon: LocationIcon, label: profile.location, href: null },
    { icon: GitHubIcon, label: "github.com/MatthewStudentBelgium", href: profile.github },
    { icon: LinkedInIcon, label: "linkedin.com/in/matthew-roberts", href: profile.linkedin },
    { icon: BrowserIcon, label: "matthewroberts.dev", href: profile.website },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header className="header" id="header" {...headerFade}>
      <div className="header__left">
        <div className="header__photo-wrapper">
          <motion.img
            className="header__photo"
            src={profilePhoto}
            alt={`${profile.name} headshot`}
            {...profilePicMotion}
            onClick={() => setIsOpen(true)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="image-modal"
              variants={imageModalMotion.backdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            >
              <motion.img
                src={profileFull}
                alt="Matthew Roberts hiking"
                className="image-modal__content"
                variants={imageModalMotion.image}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
              <p className="image-modal__caption">Matthew Roberts — enjoying a hike, 2025</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          <h1 className="header__name">{profile.name}</h1>
          <h2 className="header__title">{profile.title}</h2>
        </div>
      </div>

      <ul className="header__contacts" role="list">
        {contacts.map((c, i) => (
          <li className="contact" key={i}>
            <img className="contact__icon" src={c.icon} alt="" />
            {c.href ? (
              <a className="contact__text" href={c.href} target="_blank" rel="noreferrer">
                {c.label}
              </a>
            ) : (
              <span className="contact__text">{c.label}</span>
            )}
          </li>
        ))}
      </ul>

      <hr className="header__divider" />
      <h3 className="section__title">Professional Summary</h3>
    </motion.header>
  );
}