import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faLocationDot, faCertificate, faShieldHalved, faLock } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { translations } from '../../translations';

interface FooterProps {
  lang: 'es' | 'en';
}

const Footer = ({ lang }: FooterProps) => {
  const t = translations[lang].footer;

  const serviceLinks = [
    { label: lang === 'es' ? 'Integración de Sistemas de IA' : 'AI System Integration', href: '#services' },
    { label: lang === 'es' ? 'Automatización a Medida' : 'Custom Automation', href: '#services' },
    { label: lang === 'es' ? 'Estrategia y Arquitectura de IA' : 'AI Strategy & Architecture', href: '#services' },
    { label: lang === 'es' ? 'Plataformas de Datos' : 'Data Intelligence Platforms', href: '#services' },
    { label: lang === 'es' ? 'Productos de IA Generativa' : 'Generative AI Products', href: '#services' },
    { label: lang === 'es' ? 'Seguridad y Cumplimiento' : 'AI Security & Compliance', href: '#services' },
  ];

  const directoryLinks = [
    { label: lang === 'es' ? 'Sobre Soft IA' : 'About Soft IA', href: '#about' },
    { label: lang === 'es' ? 'Casos de Estudio' : 'Case Studies', href: '#metrics' },
    { label: lang === 'es' ? 'Sectores e Impacto' : 'Sectors & Impact', href: '#sectors' },
    { label: lang === 'es' ? 'Perspectiva de Clientes' : 'Client Perspective', href: '#testimonials' },
    { label: lang === 'es' ? 'Contactar' : 'Contact Principal', href: '#contact' },
  ];

  const offices = [
    { city: 'New York', region: t.americas },
    { city: 'London', region: t.emea },
    { city: 'Singapore', region: t.apac },
    { city: 'Dubai', region: t.mea },
    { city: 'São Paulo', region: t.latam },
  ];

  const credentials = [
    { title: t.soc2, desc: t.soc2Desc, icon: faCertificate, color: 'text-brass' },
    { title: t.iso, desc: t.isoDesc, icon: faShieldHalved, color: 'text-cyan' },
    { title: t.gdpr, desc: t.gdprDesc, icon: faLock, color: 'text-blue-400' },
  ];

  return (
    <footer className="border-t border-white/10" id="footer" style={{ background: '#0a0f15' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Column */}
          <div>
            <NavLink className="flex items-center gap-3 mb-6" to="/">
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center border border-white/10"
                style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)' }}
              >
                <FontAwesomeIcon icon={faMicrochip} className="text-white text-xs" />
              </div>
              <span className="font-heading font-700 text-white text-xl tracking-tight leading-none uppercase">
                Soft{' '}
                <span className="text-cyan">IA</span>
              </span>
            </NavLink>
            <p className="font-body text-xs sm:text-sm text-white/40 leading-relaxed mb-6">
              {t.brandDesc}
            </p>
            <div className="flex gap-2">
              {[
                { icon: faLinkedinIn, href: '#' },
                { icon: faXTwitter, href: '#' },
                { icon: faGithub, href: '#' }
              ].map((item, index) => (
                <a
                  key={index}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-white/20 hover:bg-white/5 transition-colors"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-white/40 hover:text-white text-xs transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">{t.servicesTag}</p>
            <ul className="space-y-3 font-body text-xs sm:text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-white/50 hover:text-white transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">{t.directoryTag}</p>
            <ul className="space-y-3 font-body text-xs sm:text-sm">
              {directoryLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-white/50 hover:text-white transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Reach */}
          <div id="global-reach">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">{t.globalTag}</p>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-3">
              {offices.map(({ city, region }) => (
                <div key={city} className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[10px] text-cyan mt-1 w-3" />
                  <div>
                    <p className="font-heading font-700 text-xs text-white leading-none uppercase">{city}</p>
                    <p className="font-mono text-[9px] text-white/30 mt-0.5">{region}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials / Bento row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-10">
          {credentials.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-[#0a0f15] flex items-center gap-4"
            >
              <div className={`w-8 h-8 flex items-center justify-center border border-white/5 bg-white/[0.02] ${item.color}`}>
                <FontAwesomeIcon icon={item.icon} className="text-sm" />
              </div>
              <div>
                <p className="font-heading font-700 text-xs text-white uppercase tracking-wider">{item.title}</p>
                <p className="font-body text-xs text-white/35">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright & Meta */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-[10px] font-mono text-white/30">
          <p>{t.rights}</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">{t.privacy}</a>
            <a className="hover:text-white transition-colors" href="#">{t.terms}</a>
            <a className="hover:text-white transition-colors" href="#">{t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
