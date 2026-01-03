import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.hero} fade-in min-h-screen px-6 pt-[72px]`}
    >
      {/* MAIN GRID — TRUE CENTERING */}
      <div className="max-w-6xl mx-auto pt-20 md:pt-0 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 min-h-[calc(100vh-72px)]">
        {/* LEFT — TEXT */}
        <div className="text-center md:text-left fade-left">
          <span className={styles.badge}>Available for hire</span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Incoming React <br />
            <span className={styles.name}>Developer</span>
          </h1>

          <p className={`${styles.description} mt-6 max-w-md mx-auto md:mx-0`}>
            I build accessible, performant, and responsive web applications.
            Passionate about crafting intuitive user experiences with React.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-sm mx-auto md:mx-0">
            <a href="#projects" className={styles.primaryBtn}>
              View Projects →
            </a>

            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start">
            {/* GitHub */}
            <div className={styles.socialWrapper}>
              <a
                href="https://github.com/Milb0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label="GitHub"
                aria-describedby="tooltip-github"
                title="GitHub (opens in new tab)"
              >
                {/* SVG */}
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M12 .5C5.7.5.5 5.8.5 12.3c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-6a4.6 4.6 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.3 11.3 0 016 0C16.5 5.2 17.5 5.5 17.5 5.5a4.3 4.3 0 01.1 3.2 4.6 4.6 0 011.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.5 5.8 18.3.5 12 .5z" />{" "}
                </svg>
              </a>
              <span id="tooltip-github" className={styles.tooltip}>
                GitHub
              </span>
            </div>

            {/* LinkedIn */}
            <div className={styles.socialWrapper}>
              <a
                href="https://www.linkedin.com/in/mohamedilyesbennacer/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label="LinkedIn"
                aria-describedby="tooltip-linkedin"
                title="LinkedIn (opens in new tab)"
              >
                {/* SVG */}
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.48c0 1.64 1.34 2.98 2.98 2.98h.02A2.99 2.99 0 008 6.48C8 4.85 6.66 3.5 4.98 3.5zM2.4 21.5h5.2V9.98H2.4V21.5zM9.6 9.98v11.52h5.2v-6.2c0-3.3 4.2-3.6 4.2 0v6.2H24V13c0-6.2-6.6-6-8.8-2.9V9.98H9.6z" />{" "}
                </svg>
              </a>
              <span id="tooltip-linkedin" className={styles.tooltip}>
                LinkedIn
              </span>
            </div>

            {/* CV */}
            <div className={styles.socialWrapper}>
              <a
                href="/CV.pdf"
                className={styles.social}
                aria-label="Download CV"
                aria-describedby="tooltip-cv"
                title="Download CV"
                download
              >
                {/* SVG */}
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 4v2h16v-2H4z" />{" "}
                </svg>
              </a>
              <span id="tooltip-cv" className={styles.tooltip}>
                Download my CV
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        {/* IMAGE */}
        <div className="flex justify-center md:justify-end fade-right order-first md:order-none mb-2 md:mb-0 md:self-auto self-start">
          <div className={styles.imageWrapper}>
            <img
              src="/profile.png"
              alt="Portrait of Your Name"
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
          </div>
        </div>
      </div>

      {/* SCROLL HINT */}
      <a
        href="#projects"
        className={styles.scrollHint}
        aria-label="Scroll to projects"
      >
        <div className={styles.mouse}>
          <span className={styles.wheel}></span>
        </div>
        <span className={styles.scrollText}>Scroll down</span>
      </a>
    </section>
  );
};

export default Hero;
