// PhotoBook.jsx
import { useState } from "react";
import "../styles/photoBook.css";

export default function PhotoBook({ title, photos, color }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  /*const nextPage = () => {
    if (currentPage < photos.length - 1) setCurrentPage(currentPage + 1);
  }; */

    const nextPage = () => {
  if (currentPage < photos.length - 1) {
    const page = document.querySelector(".page");
    page.classList.add("turning");
    setTimeout(() => {
      page.classList.remove("turning");
      setCurrentPage(currentPage + 1);
    }, 600);
  }
};

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };


  return (
    <div className={`book ${isOpen ? "open" : ""}`} style={{ backgroundColor: color }}>
      <div className="book-cover" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
      </div>

      {isOpen && (
        <div className="book-pages">
          <button className="nav-btn left" onClick={prevPage} disabled={currentPage === 0}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="page">
  <img src={photos[currentPage].src} alt={photos[currentPage].caption || "photo"} />
  <p className="caption">{photos[currentPage].caption}</p>
</div>


          <button
            className="nav-btn right"
            onClick={nextPage}
            disabled={currentPage === photos.length - 1}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}
