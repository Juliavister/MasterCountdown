import "../styles/status.css";

export default function CurrentStatus({ className = "" }) {
  return (
    <section id="status" className={`section current-status ${className}`}>
      <div className="section-content fade-up">
        <h2>Current Status: Revising</h2><br></br>
        <p>
        As of April 2026, I have completed the first draft of my thesis. I am currently 
        in the process of revising and refining the content based on feedback from my supervisor
        and friends who include both cybersecurity experts and non-technical readers.
        The next steps involve polishing the writing, ensuring the arguments are clear and well-supported, 
        and preparing for the final submission. 
        I am also working on creating a presentation to effectively communicate my findings for a defense in June 2026.

        </p>
        <p className="highlight">
          <strong>Next milestone:</strong> Delivery {" "}
          <em>15th of May 2026</em>.
        </p>

        <div className="status-meter">
          <div className="status-fill" style={{ width: "87%" }}></div>
        </div>
        <p className="progress-text">Progress: 85% completed</p>
      </div>

      <a href="#gallery" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
