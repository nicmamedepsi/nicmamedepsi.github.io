import React from 'react';
import { COMPLETE_NAME, CRP_NUMBER, CONTACT_INFO, APP_NAME, SOCIAL_LINKS } from '../constants';
import { Flower2 } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Flower2 className="w-5 h-5 text-brand-300" />
              <span className="font-serif text-lg font-semibold tracking-wide">{APP_NAME}</span>
            </div>
            <p className="text-sm mb-4 text-brand-100/80">
              Psicologia clínica baseada em evidências, com ética e acolhimento humano.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-serif">Navegação</h4>
            <ul className="space-y-2 text-sm text-brand-100/80">
              <li><button onClick={() => onNavigate(Page.HOME)} className="hover:text-white transition-colors">Início</button></li>
              <li><button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-white transition-colors">Sobre Mim</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICES)} className="hover:text-white transition-colors">Serviços</button></li>
              <li><button onClick={() => onNavigate(Page.CONTACT)} className="hover:text-white transition-colors">Contato</button></li>
            </ul>
          </div>

          {/* Professional Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-serif">Credenciais</h4>
            <ul className="space-y-2 text-sm text-brand-100/80">
              <li>{COMPLETE_NAME}</li>
              <li>Psicóloga Clínica</li>
              <li>CRP: {CRP_NUMBER}</li>
              <li className="pt-2 text-brand-200">{CONTACT_INFO.email}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-200/60">
          <p>&copy; {currentYear} {COMPLETE_NAME}. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 opacity-70">Desenvolvido com carinho.</p>
        </div>
      </div>
    </footer>
  );
};