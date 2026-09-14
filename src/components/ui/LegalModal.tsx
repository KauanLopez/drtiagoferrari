import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './LegalModal.css';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [type]);

  if (!type) return null;

  const content = {
    privacy: {
      title: 'Política de Privacidade',
      text: (
        <>
          <p>O Instituto Ferrari tem o compromisso de proteger a sua privacidade e os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos e protegemos as informações fornecidas por você através do nosso site e durante o seu atendimento.</p>
          
          <h4 className="h4" style={{ marginTop: '24px' }}>Coleta de Informações</h4>
          <p>Podemos coletar dados pessoais (como nome, telefone e e-mail) quando você preenche formulários de contato ou nos contata via WhatsApp para agendar uma consulta. Tais dados são essenciais para o acompanhamento da sua jornada médica.</p>
          
          <h4 className="h4" style={{ marginTop: '24px' }}>Uso dos Dados</h4>
          <p>Suas informações são utilizadas estritamente para fins de atendimento médico, agendamentos, comunicação sobre nossos tratamentos e para garantir a excelência e personalização da sua experiência.</p>
          
          <h4 className="h4" style={{ marginTop: '24px' }}>Segurança e Proteção</h4>
          <p>Adotamos medidas rigorosas de segurança, tanto técnicas quanto administrativas, para proteger seus dados contra acessos não autorizados, perdas ou alterações, em conformidade com as legislações vigentes (como a LGPD).</p>
          
          <h4 className="h4" style={{ marginTop: '24px' }}>Compartilhamento</h4>
          <p>Nós não vendemos ou compartilhamos os seus dados pessoais com terceiros não envolvidos no seu plano de atendimento direto, salvo quando exigido por lei ou autoridade competente.</p>
        </>
      )
    },
    terms: {
      title: 'Termos de Uso',
      text: (
        <>
          <p>Bem-vindo ao site do Instituto Ferrari. Ao acessar este site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso.</p>
          
          <h4 className="h4" style={{ marginTop: '24px' }}>Natureza Informativa</h4>
          <p>Todo o conteúdo deste site, incluindo textos, imagens e descrições de tratamentos (como Mamoplastia e Lipoabdominoplastia), tem caráter puramente informativo e não substitui a consulta médica presencial. A indicação de qualquer procedimento depende de avaliação clínica individual.</p>
          
          <h4 className="h4" style={{ marginTop: '24px' }}>Resultados Médicos</h4>
          <p>A medicina não é uma ciência exata e os resultados das cirurgias plásticas variam significativamente de paciente para paciente, dependendo de fatores biológicos, anatômicos e de cuidados pós-operatórios.</p>
          
          <h4 className="h4" style={{ marginTop: '24px' }}>Direitos Autorais</h4>
          <p>O conteúdo deste site, incluindo design, estrutura, logotipos e textos autorais, é de propriedade do Instituto Ferrari e protegido por leis de direitos autorais. Sua reprodução não autorizada é proibida.</p>
        </>
      )
    }
  };

  const { title, text } = content[type];

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal-header">
          <h3 className="h3" style={{ marginBottom: 0 }}>{title}</h3>
          <button className="legal-modal-close" onClick={onClose} aria-label="Fechar">
            <X size={24} />
          </button>
        </div>
        <div className="legal-modal-body">
          {text}
        </div>
      </div>
    </div>
  );
};
