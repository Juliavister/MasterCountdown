import { useRef, useEffect, useState } from "react";
import "../styles/gallery.css";
import PhotoBook from "../components/PhotoBook";

export default function Gallery({ className = "" }) {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHovered = useRef(false);
  const direction = useRef(1);

  const studyPhotos = [
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
  ];

  const japanPhotos = []; // will fill later

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

    // ...
  ];

  const outfitPhotos = [
  { src: "/images/outfitCheck/o1.JPG", caption: "" },
  { src: "/images/outfitCheck/o2.JPG", caption: "" },
  { src: "/images/outfitCheck/o3.png", caption: "" },
  { src: "/images/outfitCheck/o4.png", caption: "" },
  { src: "/images/outfitCheck/o5.JPG", caption: "" },
  { src: "/images/outfitCheck/o6.JPG", caption: "" },
  { src: "/images/outfitCheck/o7.JPG", caption: "" },

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
          and laughed through the struggle together. Huge shout-out to my co-students and friends who made this journey more fun! January - February 2026 my environment shifts from 
          the study hall to Japan! Hopefully I'll be able to capture some great moments there as well as work on my master thesis..
        </p>
      </div>
      
       <div className="bookshelf">
        <PhotoBook title="Study Hall Chronicles" photos={studyPhotos} color="var(--mauve)" />
        <PhotoBook title="Winter in Japan (coming soon)" photos={japanPhotos} color="var(--rose)" />
        <PhotoBook title="Moments in Between" photos={miscPhotos} color="var(--peach)" />
        <PhotoBook title="Elevator Outfit Check" photos={outfitPhotos} color="var(--deepgray)" 
/>

      </div>
    </section>
  );
}
