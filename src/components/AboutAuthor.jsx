import "../styles/author.css";


export default function AboutAuthor({ className = "" }) {
  return (
    <section id="about-author" className={`section about-author ${className}`}>
      <div className="section-content">
        <h2>About the Author</h2>
        <div className="author-card">
          <img
            src="/images/potrait.jpeg"
            alt="Portrait of Julia Vister"
            className="author-photo"
          />
          <div className="author-text">
            <p>
              I’m <strong>Julia Vister</strong>, a passionate Information Security master student.
              My work combines technology, security and human-centered research, leading up to a thesis
              to be completed on <strong>May 15, 2026</strong>. This date marks the end of my educational journey
              and the beginning of my professional career in cybersecurity. 
            </p>
            <p>
              This website documents my journey, milestones, and progress
              toward that goal - from initial concepts to final defense. Thank
              you for being part of this process - especially all my friends from SIFI. 
              Thank you!
            </p>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
