import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { DBTSection } from './components/DBTSection';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Simple Router Switch
  const renderContent = () => {
    switch (activePage) {
      case Page.HOME:
        return (
          <>
            <Hero onNavigate={setActivePage} />
            <Services onNavigate={setActivePage} />
            <About />
            <Contact />
          </>
        );
      case Page.ABOUT:
        return <About />;
      case Page.SERVICES:
        return (
          <>
            <Services onNavigate={setActivePage} />
            <FAQ />
          </>
        );
      case Page.DBT:
        return <DBTSection />;
      case Page.CONTACT:
        return (
          <>
            <Contact />
            <FAQ />
          </>
        );
      default:
        return <Hero onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-paper">
      <Header activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={setActivePage} />
    </div>
  );
};

export default App;