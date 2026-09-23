import React from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqAccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="faq-question-btn"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="faq-question-left">
          <div className="faq-icon-circle">
            <span className="faq-q-mark">?</span>
          </div>
          <span className="faq-question-text">{faq.question}</span>
        </div>

        <ChevronDown
          size={18}
          className={`faq-chevron-icon ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="faq-answer-drawer">
          <p className="faq-answer-text">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
