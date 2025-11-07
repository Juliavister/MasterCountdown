import React, { useEffect, useState } from "react";

export default function Thesis({ className = "" }) {
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    const unlockTime = new Date("May 15, 2026 12:00:00").getTime();
    const interval = setInterval(() => {
      if (new Date().getTime() >= unlockTime) setLocked(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="thesis" className={`section thesis ${className}`}>
      <div className="section-content">
        <h2>Download Thesis</h2>
        <p>The full thesis will be available once it’s delivered.</p>
        <a
          href={locked ? "#" : "/files/thesis.pdf"}
          className={`download-btn ${locked ? "disabled" : ""}`}
          download={!locked}
        >
          <i
            className={`fa-solid ${locked ? "fa-lock" : "fa-file-arrow-down"}`}
          ></i>{" "}
          {locked ? "Coming Soon" : "Download Thesis"}
        </a>
      </div>
    </section>
  );
}
