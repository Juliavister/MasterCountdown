import { useRef, useEffect, useState } from "react";
import "../styles/gallery.css";
import PhotoBook from "../components/PhotoBook";

export default function Gallery({ className = "" }) {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHovered = useRef(false);
  const direction = useRef(1);

  const studyPhotos = [
    {src: "/images/lesesalen/AItest.jpeg" },
    {src: "/images/lesesalen/Masterwork13.JPG" },
    { src: "/images/lesesalen/masterwork.JPG" },
    { src: "/images/lesesalen/masterwork2.jpg" },
    { src: "/images/lesesalen/lesesalen.JPG" },
    { src: "/images/lesesalen/lesesalenLunsj.JPG", caption: "lunchtime!" },
    { src: "/images/lesesalen/masterwork3.JPG" },
    {src: "/images/lesesalen/masterwork4.JPG" },
    {src: "/images/lesesalen/masterwork5.JPG" },
    { src: "/images/lesesalen/lesesalen2.JPG" },
    {src: "/images/lesesalen/masterwork6.JPG" },
    {src: "/images/lesesalen/masterwork7.JPG" },
     {src: "/images/lesesalen/SIFIjobb.JPG" },
    {src: "/images/lesesalen/masterwork8.JPG" },
    {src: "/images/lesesalen/masterwork9.JPG" },
    {src: "/images/lesesalen/masterwork12.JPG" },
    {src: "/images/lesesalen/lunsj2.JPG" },
    {src: "/images/lesesalen/tristeTorsdag.png", caption: "A sad thursday.." },
    {src: "/images/lesesalen/Stester.jpeg" },
    {src: "/images/lesesalen/kodekode.JPG" },
    {src: "/images/lesesalen/skrivedes.JPG" },
    {src: "/images/lesesalen/jobbemaster.JPG" },
    {src: "/images/lesesalen/masterjobb1.JPG" },
    {src: "/images/lesesalen/jobbejobbe.JPG" },
    {src: "/images/lesesalen/lesesalfeb.JPG" },
    {src: "/images/lesesalen/lesesalmars.JPG" },
    {src: "/images/lesesalen/hjemme.JPG" },
    {src: "/images/lesesalen/skriving.JPG" },
    {src: "/images/lesesalen/1.jpeg" },
    {src: "/images/lesesalen/2.jpeg" },
    {src: "/images/lesesalen/claude.jpeg" },
    
  ];

  const japanPhotos = [
    {src: "/images/Japan/mastercafe.jpeg"},
    {src: "/images/Japan/Tokyo.jpeg"},
    {src: "/images/Japan/tokyo2.JPG"},
    {src: "/images/Japan/cafetokyo.JPG"},
    {src: "/images/Japan/Hakone.jpeg"},
    {src: "/images/Japan/Hakone2.jpeg"},
    {src: "/images/Japan/mastercafe2.JPG"},
    {src: "/images/Japan/Masterjobbing.jpeg"},
    {src: "/images/Japan/osaka.jpeg"},
    {src: "/images/Japan/hiroshima.jpeg"},
    {src: "/images/Japan/food.jpeg"},
    {src: "/images/Japan/cafekyoto.JPG"},
    {src: "/images/Japan/Tokyo3.JPG"},
    {src: "/images/Japan/banen.jpg"},
    {src: "/images/Japan/nakanocafe.JPG"},
    {src: "/images/Japan/jpdog.jpg"},
  ]; 

  const miscPhotos = [
     {src: "/images/misc/miscDagen.png" },
     {src: "/images/misc/miscCTF.JPG", caption: "EPT ctf 2025"},
     {src: "/images/misc/misc1.JPG" },
     {src: "/images/misc/miscGøy.JPG" },
     {src: "/images/misc/miscGøy2.JPG" },
     {src: "/images/misc/miscDagen2.png", caption: "Hosting IFI career fair!"},
     {src: "/images/misc/miscLesesalen3.png" },
     {src: "/images/misc/miscBus.JPG" },
     {src: "/images/misc/miscSIFIctf.JPG", caption: "Hosting CTF" },
     {src: "/images/misc/bussTur.JPG" },
     {src: "/images/misc/EscapeQuiz.JPG" },
     {src: "/images/misc/EPTctf.JPG" },
     {src: "/images/misc/KielTur.JPG", caption: "weekend trip" },
     {src: "/images/misc/dagenmøte.JPG", caption: "meetings.." },
     {src: "/images/misc/konsert.JPG", caption: "went to a concert!!" },
     {src: "/images/misc/nicee.jpeg", caption: "went on a weeekend trip to Nice!!" },
     {src: "/images/misc/plane.jpeg", caption: "" },

  ];


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
        container.scrollLeft += direction.current * 0.5; 
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
      {/* --- Intro text --- */}
      <div className="section-content">
        <h2>Behind the Scenes: A digital diary of my final year</h2>
        <p>
          A glimpse into my research process and environment and all the moments that shaped my master’s
          journey. Mostly consisting of long (and some short) days at the study hall at ifi, surrounded by friends. We've shared countless lunches, complained about deadlines,
          and laughed through the struggle together. Huge shout-out to my co-students and friends who made this journey more fun! 
          January - February 2026 my environment shifted from the study hall to a master trip to Japan with friends. 
          I manged to capture some great moments there, and working on my thesis from a nice cafe all around Japan was pretty nice! 
          Though the hours were few, i spent time frustrated and annoyed that nothing technical worked, 
          which ended up being a good thing as i shifted my technical set up to something brand new after the trip!
        </p>
      </div>
      
       <div className="bookshelf">
        <PhotoBook title="Study Hall Chronicles" photos={studyPhotos} color="var(--mauve)" />
        <PhotoBook title="Winter in Japan " photos={japanPhotos} color="var(--rose)" />
        <PhotoBook title="Moments in Between" photos={miscPhotos} color="var(--peach)" />

      </div>
    </section>
  );
}

//<PhotoBook title="Elevator Outfit Check" photos={outfitPhotos} color="var(--deepgray)" />