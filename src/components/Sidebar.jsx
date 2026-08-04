import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { translations } from '../utils/translations';

export default function Sidebar({ lang = 'es', onContactClick }) {
  const t = translations[lang].sidebar;

  const handleContactClick = (e) => {
    e.preventDefault();
    onContactClick?.();
  };

  return (
    <aside class="sidebar">
      <div class="sidebar-card">
        {/* Profile Avatar */}
        <div class="profile-avatar-container">
          <img 
            src="./img/yo.webp" 
            alt="Juan José Santos" 
            class="profile-avatar"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
            }}
          />
        </div>
        
        {/* Profile Info */}
        <h2 class="profile-name">Juan José Santos</h2>
        <span class="profile-role">{t.role}</span>
        
        <p class="profile-bio">
          {t.bio}
        </p>

        {/* Quick Contact Details */}
        <ul class="contact-info-list">
          <li class="contact-info-item">
            <Mail class="info-icon" size={18} color="#5cd93e" />
            <a href="#" onClick={handleContactClick} class="info-text">jjsantosfernandez@proton.me</a>
          </li>
          <li class="contact-info-item">
            <Phone class="info-icon" size={18} color="#5cd93e" />
            <span class="info-text">+34 638 467 563</span>
          </li>
          <li class="contact-info-item">
            <MapPin class="info-icon" size={18} color="#5cd93e" />
            <span class="info-text">{t.location}</span>
          </li>
        </ul>

        {/* Social Media Buttons */}
        <div class="social-links">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-btn" 
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href="http://t.me/OkamiDigital" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-btn" 
            aria-label="Telegram"
            title="Telegram"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a 
            href="#" 
            onClick={handleContactClick}
            class="social-btn" 
            aria-label="Email"
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Primary Contact CTA */}
        <a href="#" onClick={handleContactClick} class="btn-primary">
          <Send size={18} />
          {t.contactBtn}
        </a>
      </div>
    </aside>
  );
}