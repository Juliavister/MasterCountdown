import { useRef, useEffect, useState } from "react";

export default function Gallery({ className = "" }) {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHovered = useRef(false);
  const direction = useRef(1);

 const photos = [
    { src: "/images/masterwork.JPG"},
    { src: "/images/masterwork2.jpg"},
    { src: "/images/masterwork3.JPG" },
    {src: "/images/masterwork4.JPG" },
  ];

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 350;
    container.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  // Detect when gallery is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (scrollRef.current) observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll animation loop
  useEffect(() => {
    let rafId;
    const container = scrollRef.current;

    const animate = () => {
      if (container && isVisible && !isHovered.current) {
        container.scrollLeft += direction.current * 0.5; // ✅ gentle speed
        // reverse direction at edges
        if (
          container.scrollLeft + container.clientWidth >= container.scrollWidth - 1 ||
          container.scrollLeft <= 0
        ) {
          direction.current *= -1;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible]);

  return (
    <section id="gallery" className={`section gallery ${className}`}>
      <div className="section-content">
        <h2>Behind the Scenes</h2>
        <p>
          A glimpse into my research process, environment, and the moments that
          inspired this Master’s journey.
        </p>

        <div
          className="carousel-container"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="carousel" ref={scrollRef}>
            {photos.map((photo, i) => (
              <div className="carousel-item" key={i}>
                <img src={photo.src} alt={photo.caption} />
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll("right")}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <a href="#essay" className="scroll-down light">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </section>
  );
}
