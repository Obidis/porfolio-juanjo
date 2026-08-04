import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { translations } from '../utils/translations';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myeggeaw';

export default function ContactForm({ lang = 'es', onSuccess }) {
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.errors?.name || 'Nombre requerido';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      newErrors.email = t.errors?.email || 'Email inválido';
    if (!formData.subject.trim()) newErrors.subject = t.errors?.subject || 'Asunto requerido';
    if (!formData.message.trim()) newErrors.message = t.errors?.message || 'Mensaje requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        })
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        onSuccess?.();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} class="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {status === 'success' && (
        <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', color: '#22c55e', padding: '1rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={20} /> {t.successMsg || '¡Mensaje enviado! Te responderé pronto.'}
        </div>
      )}
      {status === 'error' && (
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', padding: '1rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertCircle size={20} /> {t.errorMsg || 'Error al enviar. Intenta de nuevo.'}
        </div>
      )}

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>
          {t.nameLabel || 'Nombre'} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          style={{
            width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem',
            border: `1px solid ${errors.name ? '#ef4444' : 'var(--card-border)'}`,
            background: 'var(--bg-secondary)', color: 'var(--text-primary)',
            fontSize: '1rem', outline: 'none', boxSizing: 'border-box',
            transition: 'border-color 0.2s'
          }}
          placeholder={t.namePlaceholder || 'Tu nombre'}
          required
        />
        {errors.name && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.name}</p>}
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>
          {t.emailLabel || 'Email'} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          style={{
            width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem',
            border: `1px solid ${errors.email ? '#ef4444' : 'var(--card-border)'}`,
            background: 'var(--bg-secondary)', color: 'var(--text-primary)',
            fontSize: '1rem', outline: 'none', boxSizing: 'border-box'
          }}
          placeholder={t.emailPlaceholder || 'tu@email.com'}
          required
        />
        {errors.email && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.email}</p>}
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>
          {t.subjectLabel || 'Asunto'} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={e => setFormData({ ...formData, subject: e.target.value })}
          style={{
            width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem',
            border: `1px solid ${errors.subject ? '#ef4444' : 'var(--card-border)'}`,
            background: 'var(--bg-secondary)', color: 'var(--text-primary)',
            fontSize: '1rem', outline: 'none', boxSizing: 'border-box'
          }}
          placeholder={t.subjectPlaceholder || 'Asunto del mensaje'}
          required
        />
        {errors.subject && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.subject}</p>}
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>
          {t.messageLabel || 'Mensaje'} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          style={{
            width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem',
            border: `1px solid ${errors.message ? '#ef4444' : 'var(--card-border)'}`,
            background: 'var(--bg-secondary)', color: 'var(--text-primary)',
            fontSize: '1rem', outline: 'none', boxSizing: 'border-box',
            resize: 'vertical', fontFamily: 'inherit'
          }}
          placeholder={t.messagePlaceholder || 'Cuéntame sobre tu proyecto...'}
          required
        />
        {errors.message && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        class="btn-primary"
        style={{ width: '100%', padding: '1rem 2rem', borderRadius: '0.75rem', border: 'none',
          background: 'var(--accent)', color: 'var(--bg-primary)', fontWeight: 600,
          fontSize: '1rem', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1, display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '0.5rem', transition: 'opacity 0.2s' }}
      >
        {status === 'loading' ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={20} />}
        {status === 'loading' ? (t.sending || 'Enviando...') : (t.sendBtn || 'Enviar Mensaje')}
      </button>
    </form>
  );
}