export default function About({ className = "" }) {
  return (
    <section id="about" className={`section about ${className}`}>
      <div className="section-content">
          <h2>About My Thesis</h2>
        <p>
         This thesis explores the field of artificial intelligence in penetration testing in web applications, focusing on the effectiveness of PenTestGPT, which is an AI-powered penetration testing tool.
        With the rise of AI-driven cybersecurity tools, the help of large language models in web application penetration testing remains an open question. 
        Therefore, this thesis aims to conduct a case study in which PenTestGPT and human penetration testers independently assess vulnerable web applications. 
        Through a case study using Damn Vulnerable Web Application (DVWA), PentestGPT and human penetration testers independently perform reconnaissance, initial foothold, and exploitation tasks. 
        This study compares the thought processes via process flows to assess PentestGPT's reliability in early phases of web hacking. The findings aim to provide information on the usefulness of integrating AI tools into security testing and its potential role in automated recon.
        </p>
      </div>
        
      <a href="#essay" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
