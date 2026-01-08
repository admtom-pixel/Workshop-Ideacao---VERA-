
import React from 'react';

export const Instructor: React.FC = () => {
  // Foto oficial do Tom integrada via Google CDN
  const userPhotoUrl = "https://lh3.googleusercontent.com/d/1_PBuUPruCMU2taY4GBkU_3OL0QAss_ty=s800-rw";

  return (
    <section className="py-32 px-6 bg-vera-dark relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <h3 className="text-[15vw] font-black text-white opacity-[0.02] select-none leading-none whitespace-nowrap">
          ESTRATEGISTA
        </h3>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-vera-accent/20 rounded-full blur-2xl group-hover:bg-vera-accent/40 transition-colors duration-500" />
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-vera-accent via-vera-purple to-vera-accent shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-vera-dark border-4 border-vera-dark/50">
                <img 
                  src={userPhotoUrl} 
                  alt="Tom" 
                  className="w-full h-full object-cover object-top scale-110 transition-transform duration-700 group-hover:scale-115"
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-vera-accent text-vera-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg z-20">
              Mentor
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-vera-accent font-bold tracking-[0.4em] uppercase text-xs">Conheça o Seu Mentor</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">Tom</h2>
          </div>
          
          <div className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl">
            <div className="glass-card p-8 border-white/5 bg-white/[0.01]">
              <ul className="text-left space-y-4 text-sm md:text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-vera-accent font-bold">●</span>
                  Especialista em Processos Criativos e Execução de Alto Impacto;
                </li>
                <li className="flex gap-3">
                  <span className="text-vera-accent font-bold">●</span>
                  Mentor de projetos focados em inovação, branding e escala;
                </li>
                <li className="flex gap-3">
                  <span className="text-vera-accent font-bold">●</span>
                  Expert em Inteligência Artificial aplicada ao design e produtividade;
                </li>
                <li className="flex gap-3">
                  <span className="text-vera-accent font-bold">●</span>
                  Criador do método Ideação, Marca e Ação para destravar a execução.
                </li>
              </ul>
            </div>
            
            <div className="relative p-10 glass-card bg-vera-navy/10 border border-white/5 border-t-vera-accent/30 rounded-3xl overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vera-accent to-transparent opacity-50" />
              <p className="text-xl md:text-2xl italic text-slate-200 leading-relaxed">
                "Minha missão é ajudar você a atravessar o abismo entre ter uma ideia genial e vê-la funcionando no mundo real."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
