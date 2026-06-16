import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBrain, faCircleQuestion, faCompassDrafting, faGears, faShieldHalved, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

interface ServicesGridProps {
  lang: 'es' | 'en';
}

const servicesStatic = [
  {
    icon: faBrain,
    colorClass: "text-cyan border-cyan/20 bg-cyan/5",
    tags: ["LLM Deployment", "API Orchestration", "Vector DBs"],
    href: "#contact"
  },
  {
    icon: faGears,
    colorClass: "text-brass border-brass/20 bg-brass/5",
    tags: ["Process Mining", "RPA", "Event Triggers"],
    href: "#contact"
  },
  {
    icon: faCompassDrafting,
    colorClass: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    tags: ["Roadmapping", "Tech Audits", "PoC Design"],
    href: "#contact"
  },
  {
    icon: faCircleQuestion,
    colorClass: "text-cyan border-cyan/20 bg-cyan/5",
    tags: ["Data Lakes", "MLOps", "BI Dashboards"],
    href: "#contact"
  },
  {
    icon: faWandMagicSparkles,
    colorClass: "text-brass border-brass/20 bg-brass/5",
    tags: ["Fine-tuning", "RAG Systems", "AI Agents"],
    href: "#contact"
  },
  {
    icon: faShieldHalved,
    colorClass: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    tags: ["AI Governance", "Red Teaming", "GDPR/SOC2"],
    href: "#contact"
  }
];

const ServicesGrid = ({ lang }: ServicesGridProps) => {
  const t = translations[lang].services;

  return (
    <section className="py-12 sm:py-24 bg-steel-deep border-b border-white/10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 pb-6 border-b border-white/10 sm:gap-6 sm:mb-16 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-white/10 bg-white/5 mb-4">
              <span className="font-mono text-[10px] font-500 text-white/60 tracking-widest uppercase">{t.tag}</span>
            </div>
            <h2 className="font-heading font-700 text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase">
              {t.title} <span className="font-serif italic font-light text-cyan text-3xl sm:text-5xl normal-case">{t.titleItalic}</span>
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-white/50 max-w-sm md:text-right leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {servicesStatic.map((service, index) => {
            const translationItem = t.items[index];
            const num = `0${index + 1}`;
            return (
              <div 
                key={index} 
                className="group relative p-6 sm:p-8 bg-[#10151c] transition-colors duration-300 hover:bg-[#151c27]"
              >
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-10 h-10 flex items-center justify-center border ${service.colorClass}`}>
                    <FontAwesomeIcon icon={service.icon} className="text-sm" />
                  </div>
                  <span className="font-mono text-xs text-white/30 font-500">{num}</span>
                </div>

                <h3 className="font-heading font-600 text-lg sm:text-xl text-white mb-3 leading-tight group-hover:text-cyan transition-colors">
                  {translationItem.title}
                </h3>
                
                <p className="font-body text-xs sm:text-sm text-white/50 leading-relaxed mb-6 min-h-[70px]">
                  {translationItem.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {service.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="font-mono text-[9px] uppercase tracking-wider border border-white/5 bg-white/[0.02] px-2 py-0.5 text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cyan/70 hover:text-cyan transition-all group-hover:translate-x-1 duration-200" 
                  href={service.href}
                >
                  {t.scopeProject} <FontAwesomeIcon icon={faArrowRight} className="text-[9px]" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
