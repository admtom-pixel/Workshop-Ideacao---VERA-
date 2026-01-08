
import React from 'react';

export const Curriculum: React.FC = () => {
  const modules = [
    { num: 1, title: "Biologia da Realização", desc: "Por que seu cérebro prefere planejar do que executar e como hackear isso." },
    { num: 2, title: "O Platô de Projeto", desc: "Como atravessar o vale da morte da execução sem perder o entusiasmo." },
    { num: 3, title: "Branding de Partida", desc: "Construindo uma identidade visual e narrativa forte em tempo recorde." },
    { num: 4, title: "Arsenal de IA", desc: "Ferramentas práticas para brainstorming, design e automação de tarefas." },
    { num: 5, title: "Ideia ⟶ Marca ⟶ Ação", desc: "O workflow passo a passo para lançar seu projeto em 30 dias." },
    { num: "+", title: "Certificado 50h", desc: "Emissão imediata para quem concluir todas as atividades práticas." }
  ];

  return (
    <section className="py-32 px-6 bg-vera-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic text-white">Cronograma do Workshop</h2>
          <div className="h-1.5 w-32 bg-vera-accent rounded-full shadow-[0_0_10px_rgba(228,142,33,0.3)]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="glass-card p-6 group flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="text-4xl font-black text-white/5 group-hover:text-vera-accent/10 transition-colors mb-2 leading-none">
                  {m.num === "+" ? "+" : (typeof m.num === 'number' && m.num < 10 ? `0${m.num}` : m.num)}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-vera-accent transition-colors leading-tight">{m.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
