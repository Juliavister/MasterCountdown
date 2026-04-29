import "../styles/status.css";

export default function CurrentStatus({ className = "" }) {
  return (
    <section id="status" className={`section current-status ${className}`}>
      <div className="section-content fade-up">
        <h2>Current Status: Polishing</h2><br></br>
        <p>
        As of April 2026, I completed the first draft of my thesis. 
        I am currently polishing the writin and preparing for the final submission. 
        </p>
        <p className="highlight">
          <strong>Next milestone:</strong> Delivery {" "}
          <em>15th of May 2026</em>.
        </p>

        <div className="status-meter">
          <div className="status-fill" style={{ width: "95%" }}></div>
        </div>
        <p className="progress-text">Progress: 95% completed</p>
      </div>

      <a href="#gallery" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
