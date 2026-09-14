import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LegalModal } from '../ui/LegalModal';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  useGSAP(() => {
    gsap.from('.footer-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <footer className="footer dark-bg" id="contact" ref={containerRef}>
      <div className="footer-watermark">Instituto Ferrari</div>
      <div className="container footer-content">
        <div className="footer-anim footer-col footer-col--brand">
          <h4 className="h4">Dr. Tiago Ferrari</h4>
          <p className="footer-info">Médico Cirurgião Plástico<br />CRM: 36424 | RQE: 36982<br />Sociedade Brasileira de Cirurgia Plástica</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Av.+Carlos+Gomes+602+Zona+05+Maring%C3%A1+PR" target="_blank" rel="noopener noreferrer" className="footer-info" style={{ textDecoration: 'none', display: 'block', marginTop: '16px' }}>
            Av. Carlos Gomes 602, Zona 05<br />Clínica Carlos Gomes — Maringá-PR
          </a>
        </div>
        <div className="footer-anim footer-col">
          <h4 className="h4">Links Úteis</h4>
          <ul className="footer-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#team">Equipe</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="footer-anim footer-col">
          <h4 className="h4">Especialidades</h4>
          <ul className="footer-links">
            <li><a href="#services">Mamoplastia sem Prótese</a></li>
            <li><a href="#services">Lipoabdominoplastia</a></li>
            <li><a href="#services">Afinar a Cintura</a></li>
            <li><a href="#services">Contorno Corporal</a></li>
          </ul>
        </div>
        <div className="footer-anim footer-col">
          <h4 className="h4">Legal</h4>
          <ul className="footer-links">
            <li><button className="footer-btn-link" onClick={() => setModalType('privacy')}>Política de Privacidade</button></li>
            <li><button className="footer-btn-link" onClick={() => setModalType('terms')}>Termos de Uso</button></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom footer-anim">
        <p className="caption">© 2026 Instituto Ferrari. Todos os direitos reservados.</p>
      </div>
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
};
