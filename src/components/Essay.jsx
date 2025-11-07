import "../styles/essay.css";


export default function Essay({ className = "" }) {
  return (
    <section id="essay" className={`section essay ${className}`}>
      <div className="section-content">
        <h2>Master Essay</h2>
        <p>
          Here you can read the essay I wrote during the spring semester as part of my Thesis preperation.
          Please note that this was just the start phase of the project and many things has changed and 
          will change. However, as of now this gives a nice overview of what the project is about, and 
          it will be fun to see how the project will evolve!
        </p>
       <iframe
  src="/public/UiO_Masters_essay_spring2025.pdf"
  title="Essay Preview"
  width="100%"
  height="400px"
  style={{
    border: "2px solid var(--cream)",
    borderRadius: "8px",
    marginBottom: "20px",
  }}
></iframe>
<a href="/public/UiO_Masters_essay_spring2025.pdf" className="download-btn" download>
  <i className="fa-solid fa-file-arrow-down"></i> Download Essay
</a>

      </div>
      <a href="#thesis" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
