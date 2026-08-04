import React from 'react';
import { translations } from '../utils/translations';

const SKILLS_DATA = [
  { name: "HTML5", percentage: 95, icon: "./img/html-icon.png", color: "#e34f26" },
  { name: "CSS3 / SCSS", percentage: 90, icon: "./img/css-icon.png", color: "#1572b6" },
  { name: "Bootstrap 5", percentage: 85, icon: "./img/bootstrap-icon.svg", color: "#7952b3" },
  { name: "JavaScript / React", percentage: 85, icon: "./img/java-icon.png", color: "#f7df1e" },
  { name: "Python", percentage: 80, icon: "./img/python-icon.png", color: "#3776ab" },
  { name: "Streamlit", percentage: 80, icon: "./img/streamlit-icon.svg", color: "#ff4b4b" },
  { name: "Django", percentage: 75, icon: "./img/django-icon.svg", color: "#092e20" },
  { name: "Git / GitHub", percentage: 85, icon: "./img/github-mark-white.svg", color: "#6e5494" },
  { name: "SQL", percentage: 85, icon: "./img/sql.png", color: "#00758f" },
  { name: "IA", percentage: 80, icon: "/img/ai-icon.svg", color: "#ff6f00" }
];

export default function SkillsSection({ lang = 'es' }) {
  const t = translations[lang].skills;

  return (
    <section id="skills" class="skills-section">
      <div class="section-header">
        <h2 class="section-title">{t.title}</h2>
      </div>

      <div class="skills-grid">
        {SKILLS_DATA.map((skill, index) => (
          <div class="skill-card" key={index}>
            <img 
              src={skill.icon} 
              alt={skill.name} 
              class="skill-icon" 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span class="skill-name">{skill.name}</span>
            <div class="skill-bar">
              <div 
                class="skill-fill" 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}