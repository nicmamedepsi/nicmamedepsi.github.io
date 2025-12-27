import React from 'react';
import { Page } from '../types';
import { Button } from './Button';
import { HERO_TEXT } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Blob } from './Blob';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  
  const approaches = [
    { 
      acro: "DBT", 
      title: "Terapia Comportamental Dialética", 
      desc: "Foco em regulação emocional, mindfulness e viver uma vida que valha a pena." 
    },
    { 
      acro: "AC", 
      title: "Análise do Comportamento", 
      desc: "Compreensão profunda de como o ambiente influencia nossas ações e sentimentos." 
    },
    { 
      acro: "FAP", 
      title: "Psicoterapia Analítica Funcional", 
      desc: "Uso da relação terapêutica intensa para moldar novos comportamentos." 
    }
  ];

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-paper/50">
      
      {/* Background Decorations */}
      <Blob color="brand" className="top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4" variant="slow" />
      <Blob color="pink" className="bottom-0 left-0 w-[500px] h-[500px] translate-y-1/4 -translate-x-1/4" delay="2s" />
      <Blob color="yellow" className="top-1/4 left-10 w-64 h-64 opacity-60 animate-float" delay="4s" variant="static" />
      <Blob color="purple" className="bottom-1/4 right-10 w-48 h-48 opacity-60 animate-float" delay="1s" variant="static" />
      
      <div className="container px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left animate-slideUp relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles size={14} className="text-brand-500" />
            Psicologia Clínica Online
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.1]">
            {HERO_TEXT.title}
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            {HERO_TEXT.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button onClick={() => onNavigate(Page.CONTACT)} size="lg" className="group">
              {HERO_TEXT.cta}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button onClick={() => onNavigate(Page.ABOUT)} variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm border-2">
              Conheça meu trabalho
            </Button>
          </div>

          {/* Trust Indicators with Tooltips */}
          <div className="pt-8 flex items-center justify-center md:justify-start gap-4 md:gap-6">
             <div className="text-xs font-semibold text-stone-400 uppercase tracking-widest mr-2">Abordagens:</div>
             
             {approaches.map((item, index) => (
                <React.Fragment key={item.acro}>
                  {index > 0 && <div className="w-1 h-1 bg-stone-300 rounded-full" />}
                  
                  <div className="relative group cursor-help">
                    <div className="text-sm font-serif font-bold text-stone-600 border-b border-dotted border-stone-400 hover:text-brand-700 hover:border-brand-500 transition-colors pb-0.5">
                      {item.acro}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-stone-800/95 text-white p-4 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1 z-50 text-center backdrop-blur-sm pointer-events-none">
                        <p className="font-bold text-brand-300 mb-1 text-sm">{item.title}</p>
                        <p className="font-light text-stone-200 text-xs leading-relaxed">{item.desc}</p>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-stone-800/95 w-0 h-0 border-x-[6px] border-t-[6px]" />
                    </div>
                  </div>
                </React.Fragment>
             ))}
          </div>
        </div>

        {/* Image Area */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-80 h-96 md:w-[420px] md:h-[520px]">
             
            <div className="absolute inset-0 bg-spring-poppy/30 rounded-[40%] rotate-6 animate-morph-slow opacity-60 blur-md transform scale-110" />
            <div className="absolute inset-0 bg-spring-sun/40 rounded-[60%] -rotate-12 animate-morph opacity-50 blur-md transform scale-105" />

            {/* Image Container */}
            <div className="w-full h-full overflow-hidden shadow-2xl border-[6px] border-white relative z-10 animate-morph transition-all duration-1000 bg-stone-200">
              <img 
                src="/photos/nicole-sorrindo.webp"
                alt="Psicóloga Nicole sorrindo"
                width={420}
                height={520}
                fetchPriority="high"
                loading="eager" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-10 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 max-w-[150px] text-center border-l-4 border-spring-tulip animate-float" style={{ animationDelay: '1.5s' }}>
              <p className="text-xs font-bold text-spring-tulip uppercase tracking-wide mb-1">Foco em</p>
              <p className="text-sm text-stone-800 font-serif font-bold leading-tight">Autoestima & Relacionamentos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
