import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xgovalvo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();

        // auto-hide success after 4s
        setTimeout(() => {
          setStatus("");
        }, 4000);
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`${styles.section} py-24 px-6`}>
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div className="fade-left">
          <span className={styles.eyebrow}>Get in touch</span>

          <h2 className={styles.heading}>
            Let’s work <br /> together
          </h2>

          <p className={styles.description}>
            I’m currently available for freelance work or full-time
            opportunities. If you have a project that needs a creative touch,
            I’d love to hear about it.
          </p>

          <div className={styles.emailBox}>
            <div className={styles.emailIcon}>✉️</div>
            <div>
              <p className={styles.emailLabel}>Email me at</p>
              <a
                href="mailto:mohamedilyes.bennacer@univ-constantine2.dz"
                className={styles.emailLink}
              >
                mohamedilyes.bennacer@univ-constantine2.dz
              </a>
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className={`${styles.formCard} fade-right`}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label>Name</label>
              <input type="text" name="name" placeholder="John Doe" required />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "SUCCESS" && (
              <div className={styles.bannerSuccess} role="status">
                <span className={styles.bannerIcon}>✓</span>
                <span>
                  Your message has been sent successfully. I’ll get back to you
                  soon.
                </span>
              </div>
            )}

            {status === "ERROR" && (
              <div className={styles.bannerError} role="alert">
                <span className={styles.bannerIcon}>!</span>
                <span>Something went wrong. Please try again later.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
