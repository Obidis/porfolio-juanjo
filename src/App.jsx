import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import { translations } from './utils/translations';
import './styles/main.scss';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) return savedLang;
    return 'es';
  });

  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const handleFormSuccess = () => {
    setTimeout(() => closeContactModal(), 2000);
  };

  return (
    <div id="top" class="app-root">
      {/* Sticky Mobile/Desktop Header Navbar */}
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        setLang={setLang}
        onContactClick={openContactModal}
      />

      {/* Main Container Layout */}
      <div class="portfolio-container">
        <div class="layout-wrapper">
          {/* Left Sticky Sidebar (Personal Info) */}
          <Sidebar lang={lang} onContactClick={openContactModal} />

          {/* Right Main Content Area (Projects, Skills, Contact) */}
          <main class="main-content">
            <ProjectsGrid lang={lang} />
            <SkillsSection lang={lang} />
            <ContactSection lang={lang} onContactClick={openContactModal} />
          </main>
        </div>
      </div>

      {/* Contact Modal */}
      <Modal isOpen={contactModalOpen} onClose={closeContactModal} title={translations[lang].contact.title}>
        <ContactForm lang={lang} onSuccess={handleFormSuccess} />
      </Modal>
    </div>
  );
}