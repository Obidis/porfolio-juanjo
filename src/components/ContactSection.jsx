import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { translations } from '../utils/translations';

export default function ContactSection({ lang = 'es', onContactClick }) {
  const t = translations[lang].contact;

  const handleEmailClick = (e) => {
    e.preventDefault();
    onContactClick?.();
  };

  return (
    <section id="contacto" class="skills-section">
      <div class="section-header">
        <h2 class="section-title">{t.title}</h2>
      </div>

      <div style={{
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--card-border)',
        borderRadius: '1.25rem',
        padding: '2rem',
        boxShadow: '0 10px 30px var(--shadow-color)',
        maxWidth: '600px'
      }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
          {t.desc}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="#"
            onClick={handleEmailClick}
            className="btn-primary"
            style={{ width: 'auto', display: 'inline-flex', pointerEvents: 'auto' }}
          >
            <Mail size={18} />
            {t.emailBtn}
          </a>
          <a 
            href="https://github.com/Obidis" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-project btn-code" 
            style={{ padding: '0.85rem 1.5rem', borderRadius: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <MessageSquare size={18} />
            {t.githubBtn}
          </a>
        </div>
      </div>
    </section>
  );
}