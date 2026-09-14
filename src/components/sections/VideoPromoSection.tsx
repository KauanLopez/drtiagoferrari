import { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import simpleParallax from 'simple-parallax-js/vanilla';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const VideoPromoSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      new simpleParallax(imgRef.current, { scale: 1.3, delay: 0.6 });
    }
  }, []);

  useGSAP(() => {
    gsap.from('.video-overlay > *', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section className="video-section section container" ref={containerRef}>
      <div className="video-container arch-mask" style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        <img ref={imgRef} src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop" alt="Video thumbnail" className="w-100" style={{ height: '100%', objectFit: 'cover' }} />
        <div className="video-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(51, 38, 32, 0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
          <h2 className="h2 text-inverse" style={{ color: 'var(--surface)', maxWidth: '600px' }}>Acompanhe nossa rotina no Centro Cirúrgico</h2>
          <button className="play-btn" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--accent)', color: 'var(--surface)', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginTop: '32px' }}>
            <Play fill="currentColor" size={32} style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </div>
    </section>
  );
};
