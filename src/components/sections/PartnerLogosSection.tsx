import { useRef } from 'react';
import { ShieldCheck, Award, FileCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const PartnerLogosSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.partner-badge-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section className="partners-section section container text-center" style={{ paddingBottom: '96px', paddingTop: '40px' }} ref={containerRef}>
      <p className="caption" style={{ marginBottom: '28px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600 }}>
        Registros Oficiais e Certificações Médicas
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <div 
          className="partner-badge-card"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 28px',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-pill)',
            boxShadow: 'var(--shadow-card-rest)'
          }}
        >
          <ShieldCheck size={20} color="var(--accent)" />
          <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-heading)', letterSpacing: '0.04em' }}>CRM 36424</span>
        </div>

        <div 
          className="partner-badge-card"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 28px',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-pill)',
            boxShadow: 'var(--shadow-card-rest)'
          }}
        >
          <FileCheck size={20} color="var(--accent)" />
          <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-heading)', letterSpacing: '0.04em' }}>RQE 36982</span>
        </div>

        <div 
          className="partner-badge-card"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 28px',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-pill)',
            boxShadow: 'var(--shadow-card-rest)'
          }}
        >
          <Award size={20} color="var(--accent)" />
          <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)' }}>Sociedade Brasileira de Cirurgia Plástica</span>
        </div>
      </div>
    </section>
  );
};
