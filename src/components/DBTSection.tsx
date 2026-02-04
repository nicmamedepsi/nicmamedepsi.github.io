import React from 'react';
import { CheckCircle2, Scale, Heart, ArrowRightLeft } from 'lucide-react';
import { Blob } from './Blob';

export const DBTSection: React.FC = () => {
  return (
    <section className="py-24 bg-paper/50 relative overflow-hidden">
       <Blob color="purple" className="top-1/4 left-0 w-64 h-64 opacity-60 animate-float" />
       <Blob color="yellow" className="bottom-1/4 right-0 w-96 h-96 opacity-60 animate-float" delay="3s" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-spring-iris/20 text-spring-iris text-sm font-bold mb-6 shadow-sm">
             <Heart size={16} className="fill-spring-iris" /> Abordagem Principal
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            Terapia Comportamental Dialética (DBT)
          </h2>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light">
            Uma abordagem baseada em evidências que ajuda você a <span className="font-serif italic text-brand-700 font-medium bg-gradient-to-r from-brand-200/50 to-brand-200/50 bg-[length:100%_0.5em] bg-no-repeat bg-[0%_90%] decoration-clone px-1 rounded-sm">
                construir uma vida que valha a pena ser vivida
            </span>.
          </p>
        </div>

        {/* The Balance Visual */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-24 max-w-6xl mx-auto">
            
            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-spring-leaf/20 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-spring-leaf/10 rounded-full blur-2xl group-hover:bg-spring-leaf/20 transition-colors" />
                 <span className="text-sm font-bold tracking-widest text-spring-leaf uppercase mb-2 block">O pilar da</span>
                 <h3 className="text-3xl font-serif text-stone-800 mb-4">Aceitação</h3>
                 <p className="text-stone-600 text-lg leading-relaxed">
                    Validar sua história e aceitar a realidade exatamente como ela é neste momento, sem julgamentos.
                 </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center px-4">
                <div className="w-16 h-16 bg-spring-iris/10 rounded-full flex items-center justify-center text-spring-iris animate-pulse">
                    <Scale size={32} />
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-serif italic text-2xl text-stone-800">Dialética</span>
                    <ArrowRightLeft className="text-stone-400 mt-2" size={20} />
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">Equilíbrio</span>
                </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-spring-poppy/20 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-spring-poppy/10 rounded-full blur-2xl group-hover:bg-spring-poppy/20 transition-colors" />
                 <span className="text-sm font-bold tracking-widest text-spring-poppy uppercase mb-2 block">O pilar da</span>
                 <h3 className="text-3xl font-serif text-stone-800 mb-4">Mudança</h3>
                 <p className="text-stone-600 text-lg leading-relaxed">
                    Trabalhar ativamente para transformar comportamentos que causam sofrimento e impedem seus objetivos.
                 </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Skills Section */}
          <div className="space-y-8">
             <div>
                <h3 className="text-3xl font-serif text-stone-900 mb-4">Treinamento de Habilidades</h3>
                <p className="text-stone-600 text-lg">
                    Diferente da terapia tradicional, a DBT envolve aprender ferramentas práticas para lidar com o dia a dia:
                </p>
             </div>
            
             <div className="grid gap-4">
                {[
                    { title: "Mindfulness", desc: "Estar presente no momento.", color: "bg-spring-leaf" },
                    { title: "Regulação Emocional", desc: "Entender e mudar emoções.", color: "bg-spring-iris" },
                    { title: "Tolerância ao Mal-estar", desc: "Sobreviver a crises sem piorar.", color: "bg-spring-tulip" },
                    { title: "Efetividade Interpessoal", desc: "Pedir o que quer e dizer não.", color: "bg-spring-poppy" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-stone-100 flex items-center gap-5 transition-all duration-300 hover:scale-[1.02]">
                        <div className={`w-3 h-12 rounded-full ${item.color} opacity-80`} />
                        <div>
                            <h4 className="font-serif font-bold text-stone-800 text-lg">{item.title}</h4>
                            <p className="text-stone-500 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Benefits/Indications */}
          <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-center">
            <Blob color="brand" className="top-0 right-0 w-64 h-64 bg-white/10 opacity-100" />
            <Blob color="green" className="bottom-0 left-0 w-64 h-64 bg-brand-500/50 opacity-100" />
            
            <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-8 border-b border-white/20 pb-4 inline-block">Para quem é indicada?</h3>
                <ul className="space-y-4">
                    {[
                        "Pessoas com emoções intensas e desreguladas",
                        "Dificuldade em manter relacionamentos",
                        "Impulsividade e comportamentos de risco",
                        "Transtorno de Personalidade Borderline",
                        "Depressão ou Ansiedade resistentes",
                        "Quem busca autoconhecimento profundo"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                            <CheckCircle2 className="text-brand-300 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" size={20} />
                            <span className="font-medium text-brand-50/90 group-hover:text-white transition-colors leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-brand-200 text-sm italic">
                        "Não é sobre consertar o que está quebrado, mas construir o que falta."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};