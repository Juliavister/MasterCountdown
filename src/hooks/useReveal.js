import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2, // triggers when 20% of section is visible
      }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
