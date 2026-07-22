import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
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

  return (
    <div id="top" class="app-root">
      {/* Sticky Mobile/Desktop Header Navbar */}
      <Header theme={theme} toggleTheme={toggleTheme} lang={lang} setLang={setLang} />

      {/* Main Container Layout */}
      <div class="portfolio-container">
        <div class="layout-wrapper">
          {/* Left Sticky Sidebar (Personal Info) */}
          <Sidebar lang={lang} />

          {/* Right Main Content Area (Projects, Skills, Contact) */}
          <main class="main-content">
            <ProjectsGrid lang={lang} />
            <SkillsSection lang={lang} />
            <ContactSection lang={lang} />
          </main>
        </div>
      </div>
    </div>
  );
}
