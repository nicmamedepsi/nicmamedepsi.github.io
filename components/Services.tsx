import React from 'react';
import { SERVICES, ONLINE_THERAPY_TEXT } from '../constants';
import { Wifi, ArrowRight } from 'lucide-react';
import { Blob } from './Blob';
import { cn } from '../utils/cn';
import { Page } from '../types';

interface ServicesProps {
  onNavigate?: (page: Page) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  // Vibrant palette for cards
  const themeClasses = [
    { bg: 'bg-spring-leaf/10', text: 'text-spring-leaf', border: 'border-spring-leaf/20 hover:border-spring-leaf' },
    { bg: 'bg-spring-tulip/10', text: 'text-spring-tulip', border: 'border-spring-tulip/20 hover:border-spring-tulip' },
    { bg: 'bg-spring-iris/10', text: 'text-spring-iris', border: 'border-spring-iris/20 hover:border-spring-iris' },
    { bg: 'bg-spring-sun/10', text: 'text-yellow-700', border: 'border-spring-sun/20 hover:border-spring-sun' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Blob color="brand" className="top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3" variant="static" />
      <Blob color="purple" className="bottom-0 left-0 w-[500px] h-[500px] translate-y-1/2 -translate-x-1/3 opacity-20" variant="static" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-700 text-sm font-bold tracking-widest uppercase bg-brand-100 px-4 py-1.5 rounded-full mb-4 inline-block">Áreas de Atuação</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Como posso te ajudar</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Ofereço um espaço seguro e profissional, utilizando abordagens baseadas em evidências para promover mudanças reais na sua vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const theme = themeClasses[index % themeClasses.length];
            
            return (
              <div 
                key={index}
                className={cn(
                  "bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border-2 flex flex-col items-center text-center group hover:-translate-y-2 relative overflow-hidden",
                  theme.border
                )}
              >
                {/* Subtle background gradient on hover */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500", theme.bg)} />
                
                <div className={cn("w-16 h-16 rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center mb-6 relative z-10", theme.bg, theme.text)}>
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-serif text-stone-800 mb-3 font-bold relative z-10">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed relative z-10 opacity-90">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Online Therapy Section - LIGHT THEME UPDATE */}
        <div className="mt-24">
            <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-brand-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                
                {/* Background soft decoration */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-50/50 to-transparent opacity-50 pointer-events-none" />
                <Blob color="yellow" className="top-0 right-0 w-[400px] h-[400px] translate-x-1/3 -translate-y-1/3 opacity-30" variant="static" />
                <Blob color="pink" className="bottom-0 left-0 w-80 h-80 -translate-x-1/3 translate-y-1/3 opacity-30" variant="static" />
                
                <div className="flex-1 relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 text-brand-600 font-bold uppercase tracking-wider text-xs border border-brand-200 bg-white px-3 py-1 rounded-full shadow-sm">
                        <Wifi size={14} />
                        Sem Fronteiras
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif leading-tight text-stone-800">{ONLINE_THERAPY_TEXT.title}</h3>
                    <div className="text-stone-600 leading-relaxed whitespace-pre-line text-lg font-light">
                    {ONLINE_THERAPY_TEXT.description}
                    </div>
                    
                    <div className="pt-2">
                        <button 
                           onClick={() => onNavigate?.(Page.CONTACT)}
                           className="inline-flex items-center text-spring-iris font-semibold border-b-2 border-spring-iris/20 pb-0.5 hover:border-spring-iris hover:text-spring-iris/80 transition-all cursor-pointer group"
                        >
                           Entre em contato para agendar
                           <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 w-full relative group perspective-1000 flex justify-center">
                     <div className="relative transform group-hover:rotate-y-6 transition-transform duration-700 ease-out preserve-3d max-w-md w-full">
                        {/* Changed glow to be soft/pastel instead of dark */}
                        <div className="absolute inset-0 bg-spring-iris blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                        
                        <img 
                            src="/photos/nicole-oculos.webp"
                            alt="Atendimento Online" 
                            width={400}
                            height={533}
                            loading="lazy"
                            className="rounded-2xl shadow-xl w-full border-4 border-white relative z-10 object-cover aspect-square md:aspect-[3/4]"
                        />
                        
                         {/* Floating Tag */}
                        <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md text-stone-900 p-4 rounded-xl shadow-lg border border-stone-100 z-20 flex items-center gap-3 animate-float">
                            <div className="relative">
                                <div className="w-3 h-3 bg-brand-500 rounded-full" />
                                <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-75" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-stone-400">Modalidade</p>
                                <p className="font-serif font-bold text-brand-800">Online & Segura</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};