import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShaderBackground } from '../ui/ShaderBackground';
import './TestimonialOverlapSection.css';

const testimonials = [
  {
    name: 'Calliê Maiana',
    text: '"Dr. Tiago é um médico excepcional! Estou com quase 30 dias de pós-operatório e já estou muito feliz com o resultado. Um profissional extremamente competente, atencioso e cuidadoso. Super recomendo! ❤️"'
  },
  {
    name: 'Lorena N.Brites',
    text: '"Equipe maravilhosa, todos super atenciosos, estão ao seu lado a todo momento dando todo apoio e suporte. Resultado espetacular."'
  }
];

export const TestimonialOverlapSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  
  useGSAP(() => {
    gsap.from('.floating-testimonial-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      scale: 0.96,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section className="testimonial-section" ref={containerRef}>
      <div className="testimonial-bg" style={{ position: 'relative' }}>
        <ShaderBackground />
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="floating-testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-top-row">
                <div className="testimonial-stars">
                  ★★★★★
                </div>
              </div>
              
              <div className="testimonial-slider-container">
                {testimonials.map((t, idx) => (
                  <div key={idx} className={`testimonial-slide ${activeIndex === idx ? 'active' : ''}`}>
                    <h3 className="h3 testimonial-quote">
                      {t.text}
                    </h3>
                    <div className="testimonial-author">
                      <div className="label-text author-name">{t.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="testimonial-indicators">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`test-indicator ${activeIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Ver depoimento ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
