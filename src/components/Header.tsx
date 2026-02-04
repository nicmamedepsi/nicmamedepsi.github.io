import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2, MessageCircle } from 'lucide-react';
import { NavItem, Page } from '../types';
import { PROFESSIONAL_NAME } from '../constants';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: Page.HOME, label: 'Início' },
  { id: Page.ABOUT, label: 'Sobre Mim' },
  { id: Page.SERVICES, label: 'Atuação' },
  { id: Page.DBT, label: 'O que é DBT?' },
  { id: Page.CONTACT, label: 'Contato' },
];

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isMenuOpen 
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick(Page.HOME)}
        >
          <div className="p-2 bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <Flower2 className="w-6 h-6 text-brand-600" />
          </div>
          <span className="font-serif text-xl md:text-2xl font-semibold text-stone-800 tracking-tight group-hover:text-brand-800 transition-colors">
            {PROFESSIONAL_NAME}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-all duration-300 relative py-1 hover:text-spring-iris
                ${activePage === item.id ? 'text-spring-iris font-bold' : 'text-stone-600'}
              `}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-spring-iris rounded-full transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
          <button 
            onClick={() => handleNavClick(Page.CONTACT)}
            className="ml-4 bg-spring-iris text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-violet-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md flex items-center gap-2 shadow-spring-iris/20"
          >
            <MessageCircle size={16} />
            Agendar
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="p-2.5 text-spring-iris bg-spring-iris/10 hover:bg-spring-iris/20 rounded-full transition-colors"
            onClick={() => handleNavClick(Page.CONTACT)}
            aria-label="Ir para contato"
          >
            <MessageCircle size={22} />
          </button>

          <button
            className="p-2.5 text-stone-600 hover:bg-stone-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-stone-100 shadow-xl animate-slideUp">
          <div className="flex flex-col p-4 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left w-full py-4 px-6 rounded-2xl transition-all duration-200
                  ${activePage === item.id 
                    ? 'bg-spring-iris/10 text-spring-iris font-bold border border-spring-iris/20 shadow-sm' 
                    : 'text-stone-600 hover:bg-stone-50 font-medium'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};