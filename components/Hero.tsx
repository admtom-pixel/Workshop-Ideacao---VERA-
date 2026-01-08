
import React from 'react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  // Foto oficial do Tom para o Workshop Ideação
  const userPhotoUrl = "https://lh3.googleusercontent.com/d/1_PBuUPruCMU2taY4GBkU_3OL0QAss_ty=s1200-rw";

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-0 px-6 overflow-hidden min-h-fit lg:min-h-[100dvh] flex items-center bg-vera-dark font-sans">
      <div className="glow-orb w-[600px] h-[600px] bg-vera-purple/20 -top-20 -right-40 animate-pulse" />
      <div className="glow-orb w-[800px] h-[800px] bg-vera-navy/30 -bottom-60 -left-40" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col">
        <div className="mb-10 lg:mb-16 opacity-90 transition-opacity hover:opacity-100 shrink-0 flex items-center justify-between">
          <Logo className="h-9 lg:h-11 w-auto text-white drop-shadow-xl" />
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40">Workshop Online</span>
            <span className="px-3 py-1 rounded-full border border-vera-accent/30 bg-vera-accent/10 text-[9px] font-black uppercase tracking-widest text-vera-accent">1h 30min</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-4 items-center flex-grow">
          <div className="lg:col-span-7 xl:col-span-7 z-20 flex flex-col items-start text-left py-10 lg:py-24">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-vera-navy/40 backdrop-blur-md border border-vera-accent/30 mb-8 shadow-inner group">
              <span className="w-2 h-2 rounded-full bg-vera-accent shadow-[0_0_12px_rgba(228,142,33,0.8)] group-hover:scale-125 transition-transform" />
              <span className="text-[10px] lg:text-[11px] font-extrabold tracking-[0.2em] lg:tracking-[0.25em] uppercase text-vera-accent">
                Vêra Educação apresenta
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 lg:mb-8 leading-[1] tracking-tight text-white">
              Workshop <br className="hidden sm:block" /> Ideação
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 font-light mb-10 max-w-2xl leading-relaxed">
              Um conjunto de conhecimentos estratégicos para quem convive com o <strong className="text-vera-accent italic">excesso</strong> de ideias e a <strong className="text-vera-rose italic">escassez</strong> de execução.
            </p>

            <p className="text-sm md:text-base text-slate-400 mb-10 max-w-xl border-l-2 border-vera-accent/30 pl-6">
              Unindo neurociência, branding e IA para desbloquear sua criatividade e transformar pensamentos em projetos reais.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <a 
                href="#pricing"
                className="vera-btn px-10 py-5 rounded-2xl text-base lg:text-lg font-extrabold text-white tracking-tight text-center"
              >
                Garanta sua vaga agora
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end self-end h-full">
            {/* Selos flutuantes */}
            <div className="absolute top-[10%] left-0 lg:-left-20 z-30 animate-float-slow">
              <div className="glass-card px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white border-white/20 shadow-2xl backdrop-blur-3xl">
                Inteligência Artificial
              </div>
            </div>
            <div className="absolute top-[40%] right-0 lg:-right-10 z-30 animate-float-delayed">
              <div className="glass-card px-4 py-2 text-[10px] font-black uppercase tracking-widest text-vera-accent border-vera-accent/20 shadow-2xl backdrop-blur-3xl">
                Neurociência
              </div>
            </div>
            <div className="absolute bottom-[25%] left-10 lg:-left-5 z-30 animate-float-slow">
              <div className="glass-card px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/60 border-white/10 shadow-2xl backdrop-blur-3xl">
                Branding & Vendas
              </div>
            </div>

            <div className="relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end items-end h-full">
              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-vera-accent/10 blur-[100px] rounded-full z-0 pointer-events-none opacity-40" />

              <div className="relative z-10 w-full flex justify-center lg:justify-end items-end h-full">
                <img 
                  src={userPhotoUrl} 
                  alt="Tom - Mentor Ideação"
                  className="w-full h-auto max-h-[100dvh] object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.30)] lg:scale-[1.4] lg:origin-bottom-right lg:-mb-1"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite 3s; }
      `}</style>
    </section>
  );
};
