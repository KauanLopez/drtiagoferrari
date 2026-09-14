import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonMedix } from '../ui/ButtonMedix';
import './MinimalCTASection.css';

gsap.registerPlugin(ScrollTrigger);

export const MinimalCTASection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.cta-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section className="section cta-section" ref={containerRef}>
      <div className="container">
        <div className="cta-card arch-mask">
          <div className="cta-content text-center">
            <h2 className="h2 cta-anim">Pronto para realçar sua beleza?</h2>
            <p className="cta-anim">
              Dê o primeiro passo para a sua transformação. Agende uma avaliação e descubra o plano ideal para você.
            </p>
            <div className="cta-anim cta-btn-wrapper" style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
              <ButtonMedix variant="accent" href="https://api.whatsapp.com/message/DBZCU5AN33CWK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </ButtonMedix>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
