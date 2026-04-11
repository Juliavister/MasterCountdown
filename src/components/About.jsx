import "../styles/about.css";


export default function About({ className = "" }) {
  return (
    <section id="about" className={`section about ${className}`}>
      <div className="section-content">
          <h2>Abstract: "From Prompt To Payload"</h2>
        <p>
        As Artificial Intelligence (AI) becomes increasingly integrated into offensive
security, the extent to which Large Language Models (LLMs) can replicate
human-like intuition and decision-making remains a critical open question.
This thesis explores the reasoning gap between autonomous LLM agent
and human practitioners within the context of web application penetration
testing. Using a comparative case study design, both a tool-grounded
LLM agent (Claude Sonnet 4.6) and a group of human testers were tasked
with independently assessing a hardened instance of Damn Vulnerable
Web Application (DVWA). Unlike existing automated frameworks, the AI
agent was embedded directly into a native Kali Linux environment to
endure operational symmetry with the human participants. By mapping
the cognitive trajectories of both groups through detailed process flows,
this study analyzes differences in reconnaissance depth, vulnerability
chaining, and methodological persistence. The findings reveal a fundamental
divergence: while humans follow a narrative-driven approach tied to the
application’s interface, the LLM agent exhibits a system-centric logic that
prioritizes architectural artifacts over intended user paths. These results
provide critical insights into the reliability of AI as an autonomous actor
in the early attack chain and define the current operational boundaries of
LLM-driven exploitation.
        </p>
      </div>
        
      <a href="#essay" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
