import styles from "./Skills.module.css";

const skills = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "PHP", icon: "PHP" },
      { name: "HTML5", icon: "html-5" },
      { name: "CSS3", icon: "css-3" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Vite", icon: "Vitejs" },
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "VSCODE" },
    ],
  },
];

const Skills = () => {
  return (
    <section className={`${styles.section} py-24 px-6`} id="skills">
      <h2 className={`text-3xl font-bold text-center ${styles.title} fade-in`}>
        Skills & Technologies
      </h2>
      <p className={styles.subtitle}>
        The tools and technologies I use to bring products to life.
      </p>

      <div className="max-w-6xl mx-auto mt-16 space-y-16">
        {skills.map((group, i) => (
          <div
            key={group.title}
            className="fade-left"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryLine} />
              {group.title}
            </h3>

            <div className={styles.skillsGrid}>
              {group.items.map((skill) => (
                <div key={skill.name} className={styles.skillCard}>
                  <div className={styles.iconWrapper}>
                    {skill.icon ? (
                      <img
                        src={`/skills/${skill.icon}.svg`}
                        alt={skill.name}
                        className={styles.iconImg}
                        loading="lazy"
                      />
                    ) : (
                      <span className={styles.fallbackIcon}>›</span>
                    )}
                  </div>

                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
