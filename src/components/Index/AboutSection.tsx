import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCircleNodes, faCodeBranch, faLock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

interface AboutSectionProps {
  lang: 'es' | 'en';
}

const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = translations[lang].about;

  return (
    <section className="py-24 relative overflow-hidden border-b border-white/10" id="about" style={{ background: "#10151c" }}>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.08]" style={{ background: "radial-gradient(ellipse at right center, #3b82f6, transparent 70%)" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Text Content (7 columns) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-white/10 bg-white/5 mb-6">
              <FontAwesomeIcon icon={faCircleNodes} className="text-xs text-cyan" />
              <span className="font-mono text-[10px] font-500 text-cyan tracking-widest uppercase">{t.tag}</span>
            </div>
            
            <h2 className="font-heading font-700 text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase mb-8">
              {t.title}<br />
              <span className="font-serif italic font-light text-cyan text-3xl sm:text-5xl normal-case">{t.titleItalic}</span>
            </h2>
            
            {/* Newspaper Column Flow */}
            <div className="columns-1 sm:columns-2 gap-8 font-body text-sm text-white/50 leading-relaxed mb-10 pb-8 border-b border-white/10">
              <p className="mb-4">
                {t.desc1}
              </p>
              <p>
                {t.desc2}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="p-6 bg-[#10151c]">
                <FontAwesomeIcon icon={faCodeBranch} className="text-cyan mb-3 text-base" />
                <p className="font-heading font-700 text-sm uppercase text-white tracking-wider">{t.pillar1}</p>
                <p className="font-body text-xs text-white/40 mt-2 leading-relaxed">{t.pillar1Desc}</p>
              </div>
              <div className="p-6 bg-[#10151c]">
                <FontAwesomeIcon icon={faLock} className="text-brass mb-3 text-base" />
                <p className="font-heading font-700 text-sm uppercase text-white tracking-wider">{t.pillar2}</p>
                <p className="font-body text-xs text-white/40 mt-2 leading-relaxed">{t.pillar2Desc}</p>
              </div>
            </div>
          </div>
          
          {/* Right: Graphic Elements (5 columns) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative border border-white/10 p-1 bg-[#16202c]">
              <div className="overflow-hidden h-[300px] sm:h-[450px]">
                <img 
                  alt="elite technology team collaborating in a high-tech office" 
                  className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 transition-all duration-500" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b1983553f2_2be3a7d31462f1be.png"
                />
              </div>
              
              {/* Figure label */}
              <div className="border-t border-white/10 px-3 py-2 bg-steel-deep flex justify-between items-center text-[10px] font-mono text-white/40">
                <span>{t.fig}</span>
                <span>{t.est}</span>
              </div>

              {/* Floating credential cards: hidden on mobile, visible on xl */}
              <div className="absolute -left-6 top-12 p-4 border border-white/10 bg-steel-deep/95 backdrop-blur-sm hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-cyan/20 bg-cyan/5">
                    <FontAwesomeIcon icon={faAward} className="text-cyan text-xs" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider">{t.gartnerTag}</p>
                    <p className="font-heading font-700 text-xs text-white">{t.gartnerVal}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-16 p-4 border border-white/10 bg-steel-deep/95 backdrop-blur-sm hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-brass/20 bg-brass/5">
                    <FontAwesomeIcon icon={faUsers} className="text-brass text-xs" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider">{t.audienceTag}</p>
                    <p className="font-heading font-700 text-xs text-white">{t.audienceVal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
