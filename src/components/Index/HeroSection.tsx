import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

interface HeroSectionProps {
  lang: 'es' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-white/10" id="hero" style={{ background: "#10151c" }}>
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      {/* Radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)" }}></div>

      {/* ===================== MOBILE LAYOUT ===================== */}
      {/* On mobile: image FIRST at top, then text below */}

      {/* Graphic Block — mobile: full width cover hero image at top */}
      <div className="relative block lg:hidden w-full" style={{ height: "55vw", minHeight: "220px", maxHeight: "380px" }}>
        {/* Spinning ring decorations — clipped to container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-[-20%] rounded-full border border-steel-blue/20 animate-spin" style={{ animationDuration: "20s" }}></div>
          <div className="absolute inset-[-10%] rounded-full border border-cyan/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}></div>
        </div>

        {/* Full-bleed image */}
        <img
          alt="abstract 3D neural network with glowing nodes and edges"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.85) saturate(1.1)" }}
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ef423f6a69_19bd3df71c954151.png"
        />

        {/* Gradient overlay at bottom so text blends in */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(16,21,28,0) 55%, rgba(16,21,28,1) 100%)" }}></div>

        {/* HUD overlays */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
          <div className="px-2 py-1 bg-steel-deep/90 border border-white/10 backdrop-blur-sm">
            <p className="font-mono text-[9px] text-cyan tracking-wider font-500">{t.live}</p>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-steel-deep/90 border border-white/10 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            <p className="font-mono text-[9px] text-white/60">{t.active}</p>
          </div>
        </div>

        {/* Processing metric HUD */}
        <div className="absolute bottom-4 left-3 right-3 z-10">
          <div className="p-2.5 bg-steel-deep/90 border border-white/10 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-1.5">
              <p className="font-mono text-[9px] text-white/50">{t.metricProcessing}</p>
              <p className="font-mono text-[9px] font-600 text-cyan">{t.metricProcessingCap}</p>
            </div>
            <div className="w-full h-[2px] bg-white/10">
              <div className="h-[2px]" style={{ width: "98%", background: "linear-gradient(90deg, #3b82f6, #22d3ee)" }}></div>
            </div>
          </div>
        </div>

        {/* Figure label strip */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5 bg-steel-deep/80 backdrop-blur-sm flex justify-between items-center text-[9px] font-mono text-white/40 border-t border-white/10 z-10">
          <span>{t.fig}</span>
          <span className="text-cyan animate-pulse">SYSTEM: {t.active}</span>
        </div>
      </div>

      {/* ===================== TEXT + METRICS — mobile below image ===================== */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:hidden px-5 pt-6 pb-10">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan/20 bg-cyan/5 mb-5 self-start">
          <span className="font-mono text-[9px] font-500 text-cyan tracking-widest uppercase">{t.tag}</span>
        </div>

        <h1 className="font-heading font-700 text-white tracking-tight leading-[0.9] mb-5">
          <span className="block text-4xl font-light">{t.line1}</span>
          <span
            className="block text-4xl font-serif italic text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #fff 0%, #e2e8f0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >{t.line2}</span>
          <span
            className="block text-4xl text-transparent bg-clip-text"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >{t.line3}</span>
        </h1>

        <p className="font-body text-sm text-white/60 leading-relaxed mb-6 border-l-2 border-cyan/30 pl-4">
          {t.desc}
        </p>

        <div className="flex flex-col gap-3">
          <a className="inline-flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-widest font-600 text-white px-5 py-3.5 border border-cyan/30 bg-cyan/10 hover:bg-cyan/20 transition-all duration-200" href="#services">
            {t.btnServices}{" "}<FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </a>
          <a className="inline-flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors px-5 py-3.5 border border-white/10 hover:border-white/20" href="#metrics">
            <FontAwesomeIcon icon={faPlay} className="text-[10px] text-cyan/70" />
            {t.btnCases}
          </a>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
          <div>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">{t.metric1}</p>
            <p className="font-heading font-700 text-2xl text-white">140+</p>
          </div>
          <div className="border-l border-white/10 pl-4">
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">{t.metric2}</p>
            <p className="font-heading font-700 text-2xl text-white">18</p>
          </div>
          <div className="border-l border-white/10 pl-4">
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">{t.metric3}</p>
            <p className="font-heading font-700 text-2xl text-white">$2.4B</p>
          </div>
        </div>
      </div>

      {/* ===================== DESKTOP LAYOUT ===================== */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pt-32 pb-20 items-center">
        <div className="grid grid-cols-12 gap-8 w-full items-center">

          {/* Header Block */}
          <div className="col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan/20 bg-cyan/5 mb-6 self-start">
              <span className="font-mono text-[10px] font-500 text-cyan tracking-widest uppercase">{t.tag}</span>
            </div>

            <h1 className="font-heading font-700 text-white tracking-tight leading-[0.9] mb-6">
              <span className="block text-6xl xl:text-7xl font-light">{t.line1}</span>
              <span
                className="block text-6xl xl:text-7xl font-serif italic text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #fff 0%, #e2e8f0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >{t.line2}</span>
              <span
                className="block text-6xl xl:text-7xl text-transparent bg-clip-text"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >{t.line3}</span>
            </h1>

            <p className="font-body text-base text-white/60 leading-relaxed max-w-xl mb-8 border-l-2 border-cyan/30 pl-4">
              {t.desc}
            </p>

            <div className="flex flex-row gap-4 items-center">
              <a className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest font-600 text-white px-6 py-3.5 border border-cyan/30 bg-cyan/10 hover:bg-cyan/20 transition-all duration-200 hover:scale-105" href="#services">
                {t.btnServices}{" "}<FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </a>
              <a className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors px-6 py-3.5 border border-white/10 hover:border-white/20" href="#metrics">
                <FontAwesomeIcon icon={faPlay} className="text-[10px] text-cyan/70" />
                {t.btnCases}
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-10 border-t border-white/10">
              <div className="pr-4">
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">{t.metric1}</p>
                <p className="font-heading font-700 text-3xl text-white">140+</p>
              </div>
              <div className="border-l border-white/10 pl-4 pr-4">
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">{t.metric2}</p>
                <p className="font-heading font-700 text-3xl text-white">18</p>
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">{t.metric3}</p>
                <p className="font-heading font-700 text-3xl text-white">$2.4B</p>
              </div>
            </div>
          </div>

          {/* Graphic Block */}
          <div className="col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-steel-blue/20 animate-spin" style={{ animationDuration: "20s" }}></div>
              <div className="absolute inset-4 rounded-full border border-cyan/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}></div>

              <div className="relative rounded-none border border-white/10 overflow-hidden shadow-2xl p-1 bg-[#16202c]">
                <div className="rounded-none overflow-hidden h-[400px]">
                  <img
                    alt="abstract 3D neural network with glowing nodes and edges"
                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ef423f6a69_19bd3df71c954151.png"
                  />
                </div>

                <div className="border-t border-white/10 px-3 py-2 bg-steel-deep flex justify-between items-center text-[10px] font-mono text-white/40">
                  <span>{t.fig}</span>
                  <span className="text-cyan animate-pulse">SYSTEM: {t.active}</span>
                </div>

                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="px-2 py-1 bg-steel-deep/90 border border-white/10 backdrop-blur-sm">
                    <p className="font-mono text-[9px] text-cyan tracking-wider font-500">{t.live}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-steel-deep/90 border border-white/10 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <p className="font-mono text-[9px] text-white/60">{t.active}</p>
                  </div>
                </div>

                <div className="absolute bottom-12 left-4 right-4">
                  <div className="p-3 bg-steel-deep/90 border border-white/10 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-1.5">
                      <p className="font-mono text-[9px] text-white/50">{t.metricProcessing}</p>
                      <p className="font-mono text-[9px] font-600 text-cyan">{t.metricProcessingCap}</p>
                    </div>
                    <div className="w-full h-[2px] bg-white/10">
                      <div className="h-[2px]" style={{ width: "98%", background: "linear-gradient(90deg, #3b82f6, #22d3ee)" }}></div>
                    </div>
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

export default HeroSection;
