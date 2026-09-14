import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './AboutFeatureSection.css';

export const AboutFeatureSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.about-manifesto-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section className="about-manifesto-section section" id="about" ref={containerRef}>
      <div className="container">
        <div className="about-manifesto-content">
          <h2 className="about-manifesto-heading about-manifesto-anim">
            Técnica cirúrgica aliada ao alto padrão de atendimento.
          </h2>
          <p className="about-manifesto-text about-manifesto-anim">
            Liderado pelo Dr. Tiago Ferrari, nosso instituto oferece uma experiência estética incomparável. 
            Unimos métodos cirúrgicos exclusivos, como o afinamento de cintura sem remodelamento costal e a mamoplastia com tecidos naturais, a um cuidado multidisciplinar humano e constante. 
            Do primeiro contato até a sua recuperação total, nossa prioridade é a sua segurança e a exaltação da sua beleza natural, sem exageros.
          </p>
        </div>
      </div>
    </section>
  );
};
