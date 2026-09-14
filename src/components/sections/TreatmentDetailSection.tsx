import { useState, useEffect, useRef } from 'react';
import './TreatmentDetailSection.css';

const slides = [
  {
    title: 'Procedimentos de excelência com foco natural',
    text: 'O Dr. Tiago Ferrari domina técnicas exclusivas e inovadoras que respeitam a sua anatomia. Nosso objetivo principal é proporcionar contornos deslumbrantes e elegantes, com resultados duradouros que exaltam a sua verdadeira essência, livres de exageros artificiais.',
    videoUrl: '/videos/ContornoAbdominal.webm' // Using Contorno as default since there's only 2 videos
  },
  {
    title: 'Mama sem Prótese',
    text: 'Técnica refinada que projeta, garante colo marcado e decote desenhado utilizando exclusivamente os seus próprios tecidos, sem a necessidade de implantes de silicone.',
    videoUrl: '/videos/mamasemprotese.webm'
  },
  {
    title: 'Contorno Abdominal Exclusivo',
    text: 'Lipoabdominoplastia avançada aliada à técnica autoral de afinamento da cintura (redução de 6 a 8cm) sem a necessidade de qualquer remodelamento de costelas.',
    videoUrl: '/videos/ContornoAbdominal.webm'
  }
];

export const TreatmentDetailSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="treatment-carousel-section section container" id="treatment" ref={containerRef}>
      <div className="treatment-carousel-card">
        {/* Background Videos */}
      {slides.map((slide, idx) => (
        <div 
          key={idx} 
          className={`treatment-video-bg ${activeIndex === idx ? 'active' : ''}`}
        >
          <video 
            src={slide.videoUrl} 
            autoPlay 
            loop 
            muted 
            playsInline
          />
          <div className="treatment-video-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="treatment-carousel-content container">
        <div className="treatment-text-wrapper">
           {slides.map((slide, idx) => (
             <div 
               key={idx} 
               className={`treatment-slide-text ${activeIndex === idx ? 'active' : ''}`}
             >
               <h2 className="treatment-slide-title">{slide.title}</h2>
               <p className="treatment-slide-desc">{slide.text}</p>
             </div>
           ))}
        </div>

        {/* Indicators */}
        <div className="treatment-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`treatment-indicator ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Ir para o procedimento ${idx + 1}`}
            >
              <div className="treatment-indicator-fill" />
            </button>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
