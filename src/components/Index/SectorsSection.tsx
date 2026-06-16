import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLandmark, faHeartPulse, faStore, faTruckFast, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

interface SectorsSectionProps {
  activeSectorTab?: string;
  onActiveSectorTabChange?: (tab: string) => void;
  lang: 'es' | 'en';
}

const sectorsStatic = [
  { key: 'finance', icon: faLandmark },
  { key: 'health', icon: faHeartPulse },
  { key: 'retail', icon: faStore },
  { key: 'logistics', icon: faTruckFast },
];

const panelsData: Record<string, { icon: any; img: string; themeColor: string; btnBg: string }> = {
  finance: {
    icon: faLandmark,
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_aee5c43304_b9dda199119a2c14.png",
    themeColor: "text-cyan border-cyan/20 bg-cyan/5",
    btnBg: "linear-gradient(135deg, #d9a441 0%, #e8b85a 100%)"
  },
  health: {
    icon: faHeartPulse,
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_be498d6849_afac279094ba5a7d.png",
    themeColor: "text-cyan border-cyan/20 bg-cyan/5",
    btnBg: "linear-gradient(135deg, #d9a441 0%, #e8b85a 100%)"
  },
  retail: {
    icon: faStore,
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_75d41f715a_0b8e3d7dc74e391e.png",
    themeColor: "text-brass border-brass/20 bg-brass/5",
    btnBg: "linear-gradient(135deg, #d9a441 0%, #e8b85a 100%)"
  },
  logistics: {
    icon: faTruckFast,
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a6a4b076a7_9702cc49c7e17e7d.png",
    themeColor: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    btnBg: "linear-gradient(135deg, #d9a441 0%, #e8b85a 100%)"
  }
};

export default function SectorsSection({ activeSectorTab, onActiveSectorTabChange, lang }: SectorsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>(activeSectorTab || 'finance');
  const t = translations[lang].sectors;

  useEffect(() => {
    if (activeSectorTab) {
      setActiveTab(activeSectorTab);
    }
  }, [activeSectorTab]);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    if (onActiveSectorTabChange) {
      onActiveSectorTabChange(key);
    }
  };

  const getTabStyle = (key: string) => {
    if (activeTab === key) {
      return {
        background: 'rgba(34,211,238,0.1)',
        color: '#fff',
        borderColor: 'rgba(34,211,238,0.3)',
      };
    }
    return {};
  };

  const getTabClassName = (key: string) => {
    const base = 'font-mono text-xs uppercase tracking-widest px-5 py-3 border transition-all duration-200 flex-shrink-0';
    if (activeTab === key) {
      return `${base} text-white`;
    }
    return `${base} border-white/10 text-white/40 hover:text-white bg-transparent`;
  };

  // Get active panel translation and static configuration
  const activePanelTranslation = 
    activeTab === 'finance' ? t.finance :
    activeTab === 'health' ? t.health :
    activeTab === 'retail' ? t.retail :
    t.logistics;

  const activePanelStatic = panelsData[activeTab] || panelsData.finance;

  return (
    <section className="py-24 bg-steel-deep border-b border-white/10" id="sectors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-white/10 bg-white/5 mb-4">
              <FontAwesomeIcon icon={faBuilding} className="text-xs text-steel-blue" />
              <span className="font-mono text-[10px] font-500 text-white/60 tracking-widest uppercase">{t.tag}</span>
            </div>
            <h2 className="font-heading font-700 text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase">
              {t.title} <span className="font-serif italic font-light text-cyan text-3xl sm:text-5xl normal-case">{t.titleItalic}</span>
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-white/50 max-w-sm leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Tab Nav */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-2 mb-8 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none md:overflow-x-visible md:whitespace-normal">
          {sectorsStatic.map((sector) => {
            const label = 
              sector.key === 'finance' ? t.tabs.finance :
              sector.key === 'health' ? t.tabs.health :
              sector.key === 'retail' ? t.tabs.retail :
              t.tabs.logistics;
            return (
              <button
                key={sector.key}
                className={getTabClassName(sector.key)}
                style={getTabStyle(sector.key)}
                onClick={() => handleTabClick(sector.key)}
              >
                <FontAwesomeIcon icon={sector.icon} className="mr-2 text-cyan" />
                {label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="border border-white/10 bg-[#10151c]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Text details */}
            <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2 py-0.5 border border-cyan/20 bg-cyan/5 mb-6">
                  <span className="font-mono text-[9px] text-cyan tracking-widest uppercase">
                    {activePanelTranslation.tag}
                  </span>
                </div>
                <h3 className="font-heading font-700 text-2xl sm:text-3xl text-white mb-4 leading-tight uppercase">
                  {activePanelTranslation.title}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
                  {activePanelTranslation.desc}
                </p>
                <div className="space-y-3 mb-8">
                  {activePanelTranslation.checks.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-0.5 flex items-center justify-center border border-cyan/30 text-cyan flex-shrink-0 text-[10px]">
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      <p className="font-body text-xs sm:text-sm text-white/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-widest font-600 text-steel-deep px-5 py-3 hover:bg-white transition-all duration-200"
                  style={{ background: activePanelStatic.btnBg }}
                >
                  {activePanelTranslation.btn} <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                </a>
              </div>
            </div>
            
            {/* Visual Image */}
            <div className="relative overflow-hidden h-64 lg:h-auto lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10">
              <img
                alt={activePanelTranslation.title}
                className="w-full h-full object-cover grayscale opacity-70"
                src={activePanelStatic.img}
              />
              <div className="absolute bottom-6 right-6">
                <div className="p-4 border border-white/10 backdrop-blur-sm bg-steel-deep/90">
                  <p className="font-mono text-[9px] text-cyan tracking-wider mb-1">
                    {activePanelTranslation.impactTag}
                  </p>
                  <p className="font-heading font-800 text-2xl sm:text-3xl text-white leading-none">
                    {activePanelTranslation.impactVal}
                  </p>
                  <p className="font-body text-[10px] text-white/50 mt-1">
                    {activePanelTranslation.impactDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
