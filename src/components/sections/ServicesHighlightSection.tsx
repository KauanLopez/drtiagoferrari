import { useRef } from 'react';
import { ServiceCardArched } from '../ui/ServiceCardArched';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ServicesHighlightSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.services-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
    
    gsap.from('.service-card-wrapper', {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section className="services-section section container" id="services" ref={containerRef}>
      <div className="section-header text-center services-anim" style={{ marginBottom: '56px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="h2" style={{ maxWidth: '640px', textAlign: 'center' }}>Trabalho único, resultado natural.</h2>
      </div>
      <div className="grid-12" ref={cardsRef}>
        <div className="service-card-wrapper col-span-12 md-col-span-6 lg-col-span-4">
          <ServiceCardArched 
            imageSrc="/services/1.webp"
            imageClassName="zoom-mamoplastia"
            title="Mamoplastia sem Prótese"
            description="Técnica exclusiva que modela e dá colo marcante e decote à mama utilizando os próprios tecidos, sem a necessidade do implante de silicone."
          />
        </div>
        <div className="service-card-wrapper col-span-12 md-col-span-6 lg-col-span-4">
          <ServiceCardArched 
            imageSrc="/services/2.webp"
            title="Afinar a Cintura"
            description="Uma técnica avançada autoral que afina de 6 a 8cm da sua cintura, preservando sua anatomia e sem qualquer remodelamento costal."
          />
        </div>
        <div className="service-card-wrapper col-span-12 md-col-span-6 lg-col-span-4">
          <ServiceCardArched 
            imageSrc="/services/3.webp"
            title="Lipoabdominoplastia"
            description="Harmonização avançada do abdome que remove flacidez enquanto esculpe os contornos utilizando alta manipulação de gordura."
          />
        </div>
      </div>
    </section>
  );
};
