import "../styles/status.css";

export default function CurrentStatus({ className = "" }) {
  return (
    <section id="status" className={`section current-status ${className}`}>
      <div className="section-content fade-up">
        <h2>Current Status: Testing</h2><br></br>
        <p>
          I'm currently setting up the testing set up and preparing for the first round of testing with human participants. 
          This includes a group of students who have taken the Ethical Hacking course at UiO, as well as a second group of more experiences security professionals. 
          I have up until now familiarized myself with DVWA, and modified modules and the code to fit the needs of my testing!  
        </p>

        <p className="highlight">
          <strong>Next milestone:</strong> Set up PentestGPT + conduc tests by {" "}
          <em>February 2026</em>.
        </p>

        <div className="status-meter">
          <div className="status-fill" style={{ width: "35%" }}></div>
        </div>
        <p className="progress-text">Progress: 35% completed</p>
      </div>

      <a href="#gallery" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
