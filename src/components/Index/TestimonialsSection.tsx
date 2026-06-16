import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

const testimonialsStatic = [
  {
    name: "Marcus Delaney",
    role: "CTO, Nexus Capital Group",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
    accent: "text-cyan border-cyan/20 bg-cyan/5"
  },
  {
    name: "Dr. Amara Osei",
    role: "Chief Digital Officer, MedCore",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    accent: "text-brass border-brass/20 bg-brass/5"
  },
  {
    name: "Jonathan Park",
    role: "VP Operations, RetailX Global",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    accent: "text-blue-400 border-blue-400/20 bg-blue-400/5"
  }
];

interface TestimonialsSectionProps {
  lang: 'es' | 'en';
}

const TestimonialsSection = ({ lang }: TestimonialsSectionProps) => {
  const t = translations[lang].testimonials;

  return (
    <section className="py-24 bg-steel-deep border-b border-white/10" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-white/10 bg-white/5 mb-4">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-xs text-brass" />
              <span className="font-mono text-[10px] font-500 text-brass tracking-widest uppercase">{t.tag}</span>
            </div>
            <h2 className="font-heading font-700 text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase">
              {t.title}<span className="font-serif italic font-light text-cyan text-3xl sm:text-5xl">{t.titleItalic}</span>
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-white/50 max-w-sm md:text-right leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Grid container with 1px border lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {t.items.map((item, idx) => {
            const staticInfo = testimonialsStatic[idx];
            return (
              <div 
                key={idx} 
                className="group relative p-6 sm:p-8 bg-[#10151c] flex flex-col justify-between"
              >
                {/* Top quote design */}
                <div>
                  <div className="font-serif text-4xl text-cyan/20 group-hover:text-cyan/40 transition-colors leading-none mb-2">
                    "
                  </div>
                  <blockquote className="font-serif italic text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                    {item.quote}
                  </blockquote>
                </div>

                {/* Author info with clean grid style layout */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img 
                    alt={staticInfo.name} 
                    className="w-10 h-10 object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300" 
                    src={staticInfo.avatar}
                  />
                  <div>
                    <p className="font-heading font-600 text-sm text-white tracking-tight leading-none mb-1">
                      {staticInfo.name}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                      {staticInfo.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
