import { useState } from "react";
import "./Caroussel.css";

const ArrowLeft = () => (
  <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 8L8 40L40 72" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L40 40L8 72" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si une seule image : pas de flèches ni de compteur
  const isSingle = !pictures || pictures.length <= 1;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={pictures[currentIndex]}
        alt={`Logement — photo ${currentIndex + 1}`}
      />

      {!isSingle && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={handlePrev}
            aria-label="Image précédente"
          >
            <ArrowLeft />
          </button>

          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            <ArrowRight />
          </button>

          <span className="carousel__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;
