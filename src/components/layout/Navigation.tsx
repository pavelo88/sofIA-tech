import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../../translations';

interface NavigationProps {
  mobileMenuOpen: boolean;
  onMobileMenuOpenChange: (value: boolean) => void;
  lang: 'es' | 'en';
  setLang: (value: 'es' | 'en') => void;
}

const Navigation = ({ mobileMenuOpen, onMobileMenuOpenChange, lang, setLang }: NavigationProps) => {
  const t = translations[lang].nav;

  const navLinks = [
    { label: t.services, href: '#services' },
    { label: t.sectors, href: '#sectors' },
    { label: t.impact, href: '#metrics' },
    { label: t.about, href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-steel-deep/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Masthead */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div
              className="w-7 h-7 rounded-sm flex items-center justify-center border border-white/10"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)' }}
            >
              <FontAwesomeIcon icon={faMicrochip} className="text-white text-xs" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-700 text-white text-lg sm:text-xl tracking-tight leading-none">
                SOFT{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #22d3ee)' }}
                >
                  IA
                </span>
              </span>
              <span className="font-mono text-[9px] text-white/40 tracking-widest leading-none mt-1 hidden sm:inline-block">
                VOL. 26 // ISSUE 06
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Language */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-white/10 bg-white/5 text-white/60 hover:text-white transition-all hover:bg-white/10"
              aria-label="Toggle language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <a
              href="#contact"
              className="hidden sm:block font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {t.login}
            </a>
            <a
              href="#contact"
              className="font-heading text-xs uppercase tracking-wider font-600 text-steel-deep px-4 py-2 sm:px-5 sm:py-2.5 rounded-none shadow-contact hover:bg-white transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d9a441 0%, #e8b85a 100%)' }}
            >
              {t.bookCall}
            </a>
            {/* Mobile menu btn */}
            <button
              className="md:hidden text-white/70 hover:text-white p-1 ml-1"
              onClick={() => onMobileMenuOpenChange(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-base" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-steel-deep/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6`}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
            {t.directory}
          </div>
          {/* Mobile Language Switcher */}
          <button
            onClick={() => {
              setLang(lang === 'es' ? 'en' : 'es');
              onMobileMenuOpenChange(false);
            }}
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-white/10 bg-white/5 text-cyan hover:text-white"
          >
            {lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-serif text-lg py-1 border-b border-white/5 transition-colors"
              onClick={() => onMobileMenuOpenChange(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-cyan hover:text-white font-mono text-xs uppercase tracking-widest pt-2 transition-colors"
            onClick={() => onMobileMenuOpenChange(false)}
          >
            {t.login}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
