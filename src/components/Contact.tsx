import React from 'react';
import { CONTACT_INFO, CONTACT_TEXT, SOCIAL_LINKS } from '../constants';
import { MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Left: Info */}
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-stone-800 mb-4">Entre em contato</h2>
                <p className="text-stone-600 leading-relaxed">
                  {CONTACT_TEXT.intro}
                  <br/>
                  <span className="text-sm mt-2 block">{CONTACT_TEXT.cta}</span>
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href={CONTACT_INFO.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-stone-700 hover:text-spring-iris transition-colors group"
                >
                  <div className="w-12 h-12 bg-spring-iris/10 rounded-full flex items-center justify-center group-hover:bg-spring-iris/20 transition-colors">
                    <MessageCircle className="text-spring-iris" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-medium">WhatsApp</p>
                    <p className="text-lg font-semibold">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </a>

                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-stone-700 hover:text-spring-tulip transition-colors group"
                >
                  <div className="w-12 h-12 bg-spring-tulip/10 rounded-full flex items-center justify-center group-hover:bg-spring-tulip/20 transition-colors">
                    <Instagram className="text-spring-tulip" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-medium">Instagram</p>
                    <p className="text-lg font-semibold">@nicmamede</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 text-stone-700 hover:text-spring-iris transition-colors group"
                >
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                    <Mail className="text-stone-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-medium">E-mail</p>
                    <p className="text-lg font-semibold">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                 <div className="flex items-center gap-4 text-stone-700">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-stone-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-medium">Localização</p>
                    <p className="text-base font-semibold">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                  {/* Removed explicit bg-green classes to use the default primary (Iris/Purple) */}
                  <Button fullWidth size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Agendar pelo WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Decorative / Ethical Disclaimer */}
            <div className="bg-brand-900 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
               {/* Pattern */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
               
               <div className="relative z-10">
                 <h3 className="text-xl font-serif mb-6">Importante</h3>
                 <ul className="space-y-4 text-brand-50 text-sm leading-relaxed">
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 bg-brand-300 rounded-full mt-2 flex-shrink-0" />
                     Em caso de emergência ou risco à vida, não aguarde o atendimento online. Procure o hospital mais próximo ou ligue para 188 (CVV).
                   </li>
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 bg-brand-300 rounded-full mt-2 flex-shrink-0" />
                     O sigilo é garantido e segue rigorosamente o Código de Ética Profissional do Psicólogo.
                   </li>
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 bg-brand-300 rounded-full mt-2 flex-shrink-0" />
                     Atendimentos particulares com emissão de recibo para reembolso.
                   </li>
                 </ul>
                 
                 <div className="mt-8 pt-8 border-t border-brand-800 text-xs text-brand-200 opacity-70">
                    CRP {CONTACT_INFO.crp}
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};