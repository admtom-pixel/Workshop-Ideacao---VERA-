
import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-vera-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vera-purple/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-vera-accent/20 text-vera-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
              O Problema
            </div>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8 text-white leading-tight">
              O Grande Dilema da <br/>
              <span className="text-vera-accent italic">Criatividade</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
              A maioria dos criativos vive um ciclo vicioso: a euforia da nova ideia seguida rapidamente pelo abismo da execução.
            </p>
            <div className="space-y-4">
              <div className="glass-card p-6 border-vera-rose/20 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-vera-rose/10 flex items-center justify-center text-vera-rose">✕</span>
                <span className="text-white font-bold tracking-widest uppercase text-xs">Ansiedade & Paralisia</span>
              </div>
              <div className="glass-card p-6 border-vera-rose/20 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-vera-rose/10 flex items-center justify-center text-vera-rose">✕</span>
                <span className="text-white font-bold tracking-widest uppercase text-xs">Perfeccionismo Excessivo</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 border-white/5 bg-vera-navy/40">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic">● Nível de Entusiasmo</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic">Platô de Projeto</span>
              </div>
              {/* Gráfico simplificado SVG baseado no print */}
              <svg viewBox="0 0 400 200" className="w-full h-auto drop-shadow-[0_0_15px_rgba(228,142,33,0.3)]">
                <path d="M0 180 Q50 20 100 50 T200 150 L400 150" fill="none" stroke="#e48e21" strokeWidth="3" strokeLinecap="round" />
                <circle cx="100" cy="50" r="4" fill="#e48e21" />
                <text x="110" y="40" fill="#e48e21" fontSize="10" fontWeight="bold">NOVA IDEIA</text>
              </svg>
              <div className="mt-4 flex justify-end">
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">Tempo de Execução ⟶</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vera-accent/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
