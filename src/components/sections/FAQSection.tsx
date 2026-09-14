import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './FAQSection.css';

const faqs = [
  {
    question: "O que é a Mamoplastia sem Prótese?",
    answer: "É uma técnica exclusiva que modela, projeta e garante um colo marcado à mama utilizando apenas os próprios tecidos da paciente, eliminando totalmente a necessidade de implantes de silicone."
  },
  {
    question: "Como funciona a técnica para afinar a cintura?",
    answer: "Utilizamos uma abordagem avançada e autoral capaz de reduzir de 6 a 8cm da circunferência da sua cintura. Este procedimento preserva a sua anatomia natural, descartando qualquer necessidade de remodelamento de costelas."
  },
  {
    question: "A Lipoabdominoplastia é indicada para flacidez?",
    answer: "Sim. Trata-se de uma harmonização avançada do abdome que remove o excesso de pele e flacidez, enquanto esculpe e define os contornos corporais através da alta manipulação de gordura."
  },
  {
    question: "Terei suporte e acompanhamento após a cirurgia?",
    answer: "Com certeza. Nossa equipe multidisciplinar oferece suporte completo e exclusivo desde a primeira consulta até o fim do pós-operatório. Isso inclui acolhimento personalizado, acompanhamento nutricional e sessões de fisioterapia integradas."
  },
  {
    question: "Os resultados das cirurgias parecem artificiais?",
    answer: "Não. A filosofia do Dr. Tiago Ferrari baseia-se na excelência e no foco natural. Todos os nossos procedimentos visam realçar a sua beleza e proporção anatômica verdadeira, livres de exageros ou resultados artificiais."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.faq-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section container" id="faq" ref={containerRef}>
      <div className="section-header text-center faq-anim" style={{ marginBottom: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="label-text" style={{ marginBottom: '16px' }}>Esclarecimentos</div>
        <h2 className="h2" style={{ maxWidth: '600px', textAlign: 'center' }}>Perguntas Frequentes</h2>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`faq-item faq-anim ${isOpen ? 'is-open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <h4 className="h4">{faq.question}</h4>
                <div className="faq-icon-wrapper">
                  {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </div>
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{ 
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
