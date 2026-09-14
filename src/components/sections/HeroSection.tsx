import { useRef } from 'react';
import { ButtonMedix } from '../ui/ButtonMedix';
import { Shield, Star } from 'lucide-react';
import { ShaderBackground } from '../ui/ShaderBackground';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './HeroSection.css';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-left > *', { y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 });
    gsap.from('.hero-portrait', { x: 50, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.6 });
  }, { scope: containerRef });

  return (
    <header className="hero-section" id="home" ref={containerRef}>
      <div className="hero-bg">
        <ShaderBackground />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="h1">Realce a sua beleza natural com segurança</h1>
            <p>Resultados personalizados e sem exageros. Cada cirurgia é única, alinhando a melhor técnica médica aos seus desejos.</p>
            <div className="hero-cta-row">
              <ButtonMedix variant="accent" href="https://api.whatsapp.com/message/DBZCU5AN33CWK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Conhecer Tratamentos</ButtonMedix>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <img src="/hero-doctor.webp" alt="Dr. Tiago Ferrari" className="hero-portrait" />
        </div>
      </div>
    </header>
  );
};
