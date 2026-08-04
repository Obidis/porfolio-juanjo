import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children, title }) {
  if (!isOpen) return null;

  return (
    <div
      class="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div class="modal-content" onClick={e => e.stopPropagation()}>
        <button class="modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={24} />
        </button>
        {title && <h2 id="modal-title" class="modal-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}