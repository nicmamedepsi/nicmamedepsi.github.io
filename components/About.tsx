import React from 'react';
import { PROFESSIONAL_NAME, CRP_NUMBER, QUOTE_TEXT } from '../constants';
import { Quote, GraduationCap, BookOpen, Heart, Award } from 'lucide-react';
import { Blob } from './Blob';
import { cn } from '../utils/cn';

const Highlight = ({ children, color = "yellow" }: { children: React.ReactNode, color?: "yellow" | "pink" | "purple" | "green" }) => {
  const colors = {
    yellow: "bg-spring-sun/20 text-stone-800",
    pink: "bg-spring-tulip/10 text-stone-800",
    purple: "bg-spring-iris/10 text-stone-800",
    green: "bg-brand-200/40 text-brand-900"
  };
  
  return (
    <span className={cn("px-1 py-0.5 mx-0.5 rounded-md font-medium inline-block decoration-clone", colors[color])}>
      {children}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Blob color="green" className="top-20 left-0 w-64 h-64 animate-float" />
      <Blob color="pink" className="bottom-20 right-0 w-64 h-64 animate-float" delay="2s" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Sobre Mim</h2>
            <div className="w-24 h-1.5 bg-spring-sun mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-[1.2fr_2fr] gap-12 items-start">
            <div className="flex flex-col items-center relative">
              <div className="absolute inset-0 bg-spring-sun/50 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] scale-110 -rotate-6 animate-morph-slow -z-10" />
              
              <img 
                src="/photos/nicole-livro.jpg"
                alt={`Foto de ${PROFESSIONAL_NAME} segurando um livro`} 
                width={300}
                height={375}
                loading="lazy"
                className="w-full max-w-[300px] rounded-2xl shadow-xl mb-6 object-cover aspect-[4/5] rotate-2 transition-transform hover:rotate-0 duration-500"
              />
              <div className="bg-white/95 backdrop-blur-sm border border-stone-200 p-6 rounded-xl w-full text-center shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white p-2 rounded-full">
                    <GraduationCap size={20} />
                </div>
                <p className="font-serif text-xl font-bold text-brand-800 mt-2">{PROFESSIONAL_NAME}</p>
                <p className="text-sm text-stone-600 mt-1 uppercase tracking-wide font-bold">Psicóloga Clínica</p>
                <p className="text-xs text-brand-700 mt-2 font-mono bg-brand-100 inline-block px-3 py-1 rounded-full font-semibold">CRP {CRP_NUMBER}</p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-2xl text-stone-800 font-serif leading-relaxed">
                Como psicóloga clínica orientada pelas Terapias Comportamentais Contextuais, realizo atendimentos voltados a adultos e adolescentes (a partir dos 15 anos).
              </p>
              
              <div className="text-stone-700 leading-relaxed space-y-5 text-lg">
                <p>
                  Busco auxiliar homens e mulheres que desejam melhorar sua <Highlight color="yellow">autoestima</Highlight>, seus <Highlight color="pink">relacionamentos interpessoais</Highlight>, além de tratar comorbidades como <Highlight color="purple">ansiedade e depressão</Highlight> e outros prejuízos decorrentes das interações diárias. 
                </p>
                <p>
                  Atendo também <Highlight color="green">casais</Highlight> que buscam fortalecer, reconstruir ou que estejam encarando dúvidas sobre um possível encerramento de sua relação.
                </p>
                <p>
                  Para além de qualquer diagnóstico em potencial, reconheço a <Highlight color="yellow">história única</Highlight> de cada pessoa que atendo, tanto nos desafios quanto ao destacar seus <Highlight color="green">comportamentos saudáveis</Highlight>. Afinal, para todo comportar-se existem seus prós e contras.
                </p>
                <p>
                  Minha trajetória profissional abrange atendimento clínico a pacientes com demandas variadas, que vão desde o <Highlight color="pink">autodesenvolvimento</Highlight> até o acompanhamento de situações de sofrimento mais complexas.
                </p>
              </div>

               <div className="text-stone-700 leading-relaxed space-y-4">
                <p>
                  Atualmente atuo apenas com psicoterapia particular. Acredito na importância de um <Highlight color="yellow">atendimento individualizado e acolhedor</Highlight> para cada paciente e na autenticidade de uma <Highlight color="purple">aliança terapêutica</Highlight> bem estabelecida para o desenvolvimento do processo em si.
                </p>
              </div>

              <div className="bg-brand-50 border-l-4 border-spring-tulip p-8 rounded-r-2xl mt-8 flex gap-6 relative overflow-hidden group hover:bg-brand-100/50 transition-colors">
                <Quote className="text-spring-tulip w-10 h-10 flex-shrink-0 absolute top-4 left-2 opacity-30" />
                <p className="italic text-stone-800 font-serif font-medium text-lg relative z-10 pl-6">
                  {QUOTE_TEXT}
                </p>
              </div>

              {/* Enhanced Education & Interests Section */}
              <div className="pt-8 border-t border-stone-100">
                    <h3 className="font-serif text-2xl text-stone-800 mb-6 flex items-center gap-3">
                        <BookOpen className="text-brand-600" size={24} strokeWidth={1.5} />
                        Formação e Interesses
                    </h3>
                    
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start">
                            <div className="mt-1 bg-spring-iris/10 p-1.5 rounded-full text-spring-iris flex-shrink-0">
                                <GraduationCap size={16} />
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-800 text-lg">Graduação em Psicologia</h4>
                                <p className="text-stone-600">Formação sólida com ênfase em processos clínicos e saúde mental.</p>
                            </div>
                        </li>

                        <li className="flex gap-4 items-start">
                            <div className="mt-1 bg-spring-tulip/10 p-1.5 rounded-full text-spring-tulip flex-shrink-0">
                                <Award size={16} />
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-800 text-lg">Terapias Contextuais</h4>
                                <p className="text-stone-600">
                                    Especialista em abordagens de terceira onda, com aprofundamento em 
                                    <span className="font-semibold text-brand-700"> Análise do Comportamento (AC)</span> e 
                                    <span className="font-semibold text-brand-700"> Psicoterapia Analítica Funcional (FAP)</span>.
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-4 items-start">
                            <div className="mt-1 bg-spring-leaf/10 p-1.5 rounded-full text-spring-leaf flex-shrink-0">
                                <Award size={16} />
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-800 text-lg">Terapia Comportamental Dialética (DBT)</h4>
                                <p className="text-stone-600">
                                    Treinamento intensivo de habilidades para regulação emocional, tolerância ao mal-estar e efetividade interpessoal.
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-4 items-start">
                            <div className="mt-1 bg-spring-poppy/10 p-1.5 rounded-full text-spring-poppy flex-shrink-0">
                                <Heart size={16} />
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-800 text-lg">Perspectiva Social e Interseccional</h4>
                                <p className="text-stone-600">
                                    Formação e interesse contínuo em <span className="font-semibold text-spring-poppy">Psicologia Feminista</span> e questões culturais, integrando o contexto social à compreensão clínica.
                                </p>
                            </div>
                        </li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
