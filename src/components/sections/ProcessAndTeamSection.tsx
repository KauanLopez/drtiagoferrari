import { useRef } from 'react';
import { ButtonMedix } from '../ui/ButtonMedix';
import { ShaderBackground } from '../ui/ShaderBackground';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './ProcessAndTeamSection.css';

export const ProcessAndTeamSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.from('.team-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
    
    gsap.utils.toArray('.team-member-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <section className="team-section section dark-bg" id="team" ref={containerRef} style={{ position: 'relative' }}>
      <ShaderBackground />
      <div className="container grid-12">
        <div className="sticky-column col-span-12 lg-col-span-4">
          <div className="sticky-content">
            <h2 className="h2 team-anim">Especialistas focados em uma jornada perfeita</h2>
            <p className="team-anim">O Dr. Tiago e nossa equipe multidisciplinar unem precisão médica, acompanhamento próximo e cuidado integral.</p>
            <div className="team-anim" style={{ marginTop: '32px' }}>
              <ButtonMedix variant="accent" href="https://api.whatsapp.com/message/DBZCU5AN33CWK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                Agende Sua Consulta
              </ButtonMedix>
            </div>
          </div>
        </div>
        <div className="scrollable-list col-span-12 lg-col-span-8">
          {[
            { 
              name: 'Dr. Tiago Ferrari', 
              role: 'Médico Cirurgião Plástico (CRM 36424 | RQE 36982)', 
              img: '/doctor/optimized/dr-tiago-ferrari-76.webp', 
              desc: 'Especialista em procedimentos focados na naturalidade e segurança, liderando pessoalmente cada etapa da sua transformação estética.' 
            },
            { 
              name: 'Isis Ferrari', 
              role: 'Gestão e Acolhimento do Paciente', 
              img: '/isis.webp', 
              desc: 'Diretora do Instituto Ferrari e esposa do Dr. Tiago, trabalhando lado a lado com ele para garantir que a sua jornada seja leve, humana e acolhedora desde o primeiro contato, organizando cada detalhe da sua estadia e pós-operatório.' 
            },
            { 
              name: 'Dra. Ariana Ferrari', 
              role: 'Nutrição Avançada | CRN-8 4276', 
              img: '/Dra Ariani Ferrari.jpeg', 
              desc: 'Pioneira em nutrição pré e pós operatória, com doutorado em oncologia, especialização em cirurgias estéticas e foco em saúde e cuidado individualizado para potencializar resultados e segurança em cada etapa do tratamento. Autora de livros e artigos científicos que são referência na área.',
              imgPosition: 'top'
            }
          ].map((member, i) => (
            <div key={i} className="team-member-card">
              <div className="team-member-img-wrapper">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="team-member-img" 
                  style={member.imgPosition ? { objectPosition: member.imgPosition } : undefined}
                />
              </div>
              <div className="team-member-info">
                <div>
                  <h4 className="h4">{member.name}</h4>
                  <p className="caption team-member-desc">{member.desc}</p>
                </div>
                <div className="team-member-footer">
                  <div>
                    <div className="team-member-footer-name">{member.name}</div>
                    <div className="team-member-footer-role">{member.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
