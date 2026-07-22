import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { SpainFlag, UKFlag } from './Flags';
import { translations } from '../utils/translations';

export default function Header({ theme, toggleTheme, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header class="header-navbar">
      <div class="header-container">
        <a href="#" class="header-brand" onClick={(e) => handleNavClick(e, '#top')}>
          <img src="./img/yo.avif" alt="Juan José Santos" class="brand-logo" />
          <h1 class="brand-title">Juan José Santos</h1>
        </a>

        {/* Desktop Navigation Links */}
        <nav class="nav-links-desktop">
          <a href="#proyectos" onClick={(e) => handleNavClick(e, '#proyectos')}>{t.projects}</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>{t.skills}</a>
          <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')}>{t.contact}</a>
        </nav>

        <div class="header-actions">
          {/* Theme Toggle Button */}
          <button 
            id="theme-toggle" 
            class="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label="Cambiar tema claro/oscuro"
            title={theme === 'dark' ? "Modo Claro" : "Modo Oscuro"}
          >
            {theme === 'dark' ? (
              <Sun size={20} color="#FFD700" />
            ) : (
              <Moon size={20} color="#0f172a" />
            )}
          </button>

          {/* Language Selector Buttons */}
          <button
            class={`lang-toggle-btn ${lang === 'es' ? 'active' : ''}`}
            onClick={() => setLang('es')}
            title="Español"
            aria-label="Español"
          >
            <SpainFlag size={20} />
          </button>

          <button
            class={`lang-toggle-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
            title="English"
            aria-label="English"
          >
            <UKFlag size={20} />
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            id="boton-hamburguesa" 
            class="hamburger-btn" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <nav id="menu-hamburguesa" class={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <ul class="mobile-menu-list">
          <li>
            <a href="#proyectos" onClick={(e) => handleNavClick(e, '#proyectos')}>{t.projects}</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>{t.skills}</a>
          </li>
          <li>
            <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')}>{t.contact}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
