import projects from "../data/projects";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={`${styles.section} py-24 px-6`} id="projects">
      <h2
        className={`text-3xl font-bold text-center mb-12 ${styles.title} fade-in`}
      >
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="fade-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className={styles.card}>
              {project.featured && (
                <span className={styles.featured}>Featured</span>
              )}

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className={`${styles.description} mb-4`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`${styles.tech} px-3 py-1 text-sm rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className={styles.actions}>
                {/* GitHub */}
                <div className={styles.iconWrapper}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code on GitHub"
                    className={styles.icon}
                  >
                    {/* GitHub icon */}
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.7.5.5 5.8.5 12.3c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-6a4.6 4.6 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.3 11.3 0 016 0C16.5 5.2 17.5 5.5 17.5 5.5a4.3 4.3 0 01.1 3.2 4.6 4.6 0 011.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.5 5.8 18.3.5 12 .5z" />
                    </svg>
                  </a>
                  <span className={styles.tooltip}>GitHub</span>
                </div>

                {/* Live Demo */}
                {project.live && (
                  <div className={styles.iconWrapper}>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                      className={styles.icon}
                    >
                      {/* External link icon */}
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z" />
                        <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
                      </svg>
                    </a>
                    <span className={styles.tooltip}>Live Demo</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
