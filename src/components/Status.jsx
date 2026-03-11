import "../styles/status.css";

export default function CurrentStatus({ className = "" }) {
  return (
    <section id="status" className={`section current-status ${className}`}>
      <div className="section-content fade-up">
        <h2>Current Status: Writing</h2><br></br>
        <p>
        As of March 2026, i have finished all testing, and am currently analyzing the results.
        At the same time I am also writing the thesis by trying to put to words to the results and visualizing all the findings 
        in graphs, tables and process flows. 
        </p>
        <p className="highlight">
          <strong>Next milestone:</strong> First draft ready in {" "}
          <em>April 2026</em>.
        </p>

        <div className="status-meter">
          <div className="status-fill" style={{ width: "75%" }}></div>
        </div>
        <p className="progress-text">Progress: 75% completed</p>
      </div>

      <a href="#gallery" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
