import React, { useEffect, useState } from "react";
import "../styles/hero.css";


export default function Hero({ className = "" }) {
  const [timeLeft, setTimeLeft] = useState("");
  const targetDate = new Date("May 15, 2026 12:00:00").getTime();

  useEffect(() => {
  const hero = document.querySelector(".hero");
  const handleScroll = () => {
    const scrollY = window.scrollY;
    //const fadeStart = 0;
    const fadeEnd = window.innerHeight * 0.6;
    const opacity = Math.max(1 - scrollY / fadeEnd, 0.2);
    hero.style.opacity = opacity;
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft("My Master's is complete! 🎓");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      requestAnimationFrame(updateCountdown);
    };
    updateCountdown();
  }, []);

  return (
    <section className={`hero section ${className}`}>
      <div className="content fade-in">
        <h1 className="fade-up">Master Thesis Countdown</h1>
        <p className="fade-up delay-1">
          My master thesis will be completed and delivered on{" "}
          <strong>May 15, 2026 at 12:00 PM</strong>.
        </p>
        <div id="countdown" className="fade-up delay-2">
          {timeLeft}
        </div>
      </div>

<footer className="hero-footer fade-in delay-3">
  <div className="socials">
    <a
      href="https://www.linkedin.com/in/julia-vister-a6756b22b"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fa-brands fa-linkedin"></i>
    </a>
    <a
      href="https://github.com/Juliavister"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fa-brands fa-github"></i>
    </a>
  </div>
  <p>&copy; {new Date().getFullYear()} Julia Vister</p>
  <a href="#about" className="scroll-down">
    <i className="fa-solid fa-angles-down"></i>
  </a>
</footer>



    </section>
  );
}
