import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const replaySectionAnimations = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const animationClasses = ["fade-in", "fade-up", "fade-left", "fade-right"];
    const selector = animationClasses.map((c) => `.${c}`).join(",");
    const animatedElements = section.querySelectorAll(selector);

    animatedElements.forEach((el) => {
      const cls = animationClasses.find((c) => el.classList.contains(c));
      if (!cls) return;

      // remove then re-add the animation class to restart it
      el.classList.remove(cls);

      // Force reflow
      void el.offsetWidth;

      el.classList.add(cls);
    });
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" aria-label="Go to home">
          <img src="/Asset 1.svg" alt="Logo" className="h-15 w-auto" />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => replaySectionAnimations(s.id)}
              className={`${styles.link} ${
                active === s.id ? styles.active : ""
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <ul className="flex flex-col items-center gap-4 py-6">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => {
                    replaySectionAnimations(s.id);
                    setOpen(false);
                  }}
                  className={`${styles.link} ${
                    active === s.id ? styles.active : ""
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
