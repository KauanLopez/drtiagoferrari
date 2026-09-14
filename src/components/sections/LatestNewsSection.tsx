import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import simpleParallax from 'simple-parallax-js/vanilla';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const LatestNewsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      new simpleParallax(imgRef.current, { scale: 1.15 });
    }
  }, []);

  useGSAP(() => {
    gsap.from('.news-anim', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const newsArticles = [
    { 
      title: 'Tudo sobre a recuperação segura de uma Lipoabdominoplastia', 
      tag: 'Pós-Operatório & Conforto',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop'
    },
    { 
      title: 'Afinando a cintura em até 8cm sem mexer nas costelas', 
      tag: 'Técnica Autoral do Dr. Tiago',
      img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop'
    },
    { 
      title: 'Como se preparar para a sua primeira consulta de avaliação', 
      tag: 'Acolhimento da Isis',
      img: 'https://images.unsplash.com/photo-1576091160550-2173ff9e594b?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section className="news-section section container" id="blog" ref={containerRef}>
      <div className="section-header news-anim">
        <h2 className="h2" style={{ maxWidth: '600px' }}>Dicas e informações direto do consultório</h2>
      </div>
      <div className="grid-12" style={{ marginTop: '48px', alignItems: 'stretch' }}>
        <div className="news-anim col-span-12 lg-col-span-6" style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)', height: '100%', minHeight: '440px', position: 'relative', boxShadow: 'var(--shadow-card-rest)' }} className="w-100">
            <img 
              ref={imgRef} 
              src="/doctor/optimized/dr-tiago-ferrari-45.webp" 
              alt="Conteúdo em destaque Dr. Tiago" 
              style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(92, 0, 18, 0.95) 0%, rgba(92, 0, 18, 0.4) 50%, transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '36px' }}>
              <span className="label-text" style={{ color: 'var(--accent)', marginBottom: '8px', display: 'block' }}>Destaque da Semana</span>
              <h3 className="h3" style={{ color: '#fff', marginBottom: '8px', fontSize: '24px' }}>Os benefícios da Mamoplastia sem uso de Prótese</h3>
              <p className="caption" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>Como utilizar os próprios tecidos para estruturar colo e decote com elegância.</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg-col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
          {newsArticles.map((item, i) => (
            <div 
              key={i} 
              className="news-anim" 
              style={{ 
                display: 'flex', 
                gap: '20px', 
                alignItems: 'center', 
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-card-rest)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: '110px', height: '100px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', flexShrink: 0 }} 
              />
              <div style={{ flex: 1 }}>
                <span className="caption" style={{ color: 'var(--accent)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>{item.tag}</span>
                <h4 className="h4" style={{ fontSize: '17px', lineHeight: 1.3, marginBottom: 0 }}>{item.title}</h4>
              </div>
              <div style={{ color: 'var(--text-muted)', paddingRight: '8px' }}>
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
