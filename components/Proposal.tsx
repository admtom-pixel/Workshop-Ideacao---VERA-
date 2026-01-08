
import React from 'react';

export const Proposal: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-vera-dark to-vera-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed italic max-w-4xl mx-auto">
            "Se você vive pensando em projetos, negócios e possibilidades, mas sente que falta método para dar o próximo passo..."
          </p>
          <div className="mt-8 inline-block px-8 py-3 bg-vera-accent text-vera-dark font-black uppercase tracking-[0.3em] rounded-lg">
            este workshop foi feito para você.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            {/* Círculo do Cérebro do print */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-vera-accent/20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-vera-accent/10 animate-spin-slow" />
              <div className="w-32 h-32 md:w-48 md:h-48 bg-vera-accent/10 rounded-full flex items-center justify-center backdrop-blur-3xl border border-vera-accent/30 shadow-[0_0_50px_rgba(228,142,33,0.1)]">
                <svg className="w-16 h-16 md:w-24 md:h-24 text-vera-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                ideia,<br/>marca,<br/><span className="bg-white text-vera-dark px-2">ação</span>
              </h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                Entenda a biologia da realização. Saia do fluxo de "reatividade" e entre no fluxo de criação consistente.
              </p>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/5">
              {[
                "Neurociência da Tomada de Decisão",
                "Branding como Diferencial de Execução",
                "Uso de IA para Desbloqueio e Escala",
                "O Fim do Ciclo de Planejamento Infinito"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center group">
                  <div className="w-1.5 h-1.5 rounded-full bg-vera-accent group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
};
