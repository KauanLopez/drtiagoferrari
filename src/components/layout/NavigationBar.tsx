import { useState, useRef } from 'react';
import { ButtonMedix } from '../ui/ButtonMedix';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './NavigationBar.css';

export const NavigationBar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useGSAP(() => {
    gsap.from(navRef.current, { y: -20, opacity: 0, duration: 1, ease: 'power3.out' });
  }, { scope: navRef });

  return (
    <>
      <nav className="navbar container" ref={navRef}>
        <div className="brand-logo" style={{ marginBottom: 0, display: 'flex', alignItems: 'center', gap: '16px', fontWeight: 300 }}>
          <img src="/logo-gold.svg" alt="Dr. Tiago Ferrari" style={{ height: '48px', width: 'auto' }} />
          <span className="brand-text" style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>DR TIAGO FERRARI</span>
        </div>
        <div className="nav-links">
          <a href="#home">INÍCIO</a>
          <a href="#about">SOBRE</a>
          <a href="#services">CIRURGIAS</a>
          <a href="#team">EQUIPE</a>
          <a href="#contact">CONTATO</a>
        </div>
        <div className="nav-cta">
          <ButtonMedix variant="primary" href="https://api.whatsapp.com/message/DBZCU5AN33CWK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Agendar</ButtonMedix>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>INÍCIO</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>SOBRE</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>CIRURGIAS</a>
          <a href="#team" onClick={() => setIsMenuOpen(false)}>EQUIPE</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTATO</a>
        </div>
      </div>
    </>
  );
};
