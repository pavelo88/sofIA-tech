import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin as faLinkedinBrands } from '@fortawesome/free-brands-svg-icons';
import { faCalendarCheck, faRocket } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

interface ContactSectionProps {
  lang: 'es' | 'en';
}

const ContactSection = ({ lang }: ContactSectionProps) => {
  const t = translations[lang].contact;

  return (
    <section className="py-24 relative overflow-hidden border-b border-white/10" id="contact" style={{ background: "#0a0f15" }}>
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-white/10 bg-white/5 mb-6">
          <FontAwesomeIcon icon={faRocket} className="text-xs text-brass" />
          <span className="font-mono text-[10px] font-500 text-brass tracking-widest uppercase">{t.tag}</span>
        </div>
        
        <h2 className="font-heading font-700 text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-6">
          {t.title}<br />
          <span className="font-serif italic font-light text-brass text-3xl sm:text-5xl normal-case">{t.titleItalic}</span>
        </h2>
        
        <p className="font-body text-sm sm:text-base text-white/50 leading-relaxed max-w-xl mx-auto mb-10 border-l border-r border-white/5 px-4">
          {t.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest font-600 text-steel-deep px-6 py-4 hover:bg-white transition-all duration-200 hover:scale-105" 
            href="#" 
            style={{ background: "linear-gradient(135deg, #d9a441 0%, #e8b85a 100%)" }}
          >
            {t.btnCall}{" "}
            <FontAwesomeIcon icon={faCalendarCheck} />
          </a>
          <a 
            className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors px-6 py-4 border border-white/10 hover:border-white/20" 
            href="#"
          >
            <FontAwesomeIcon icon={faLinkedinBrands} className="text-cyan" />
            {t.btnFollow}
          </a>
        </div>
        
        <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
          {t.footnote}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
