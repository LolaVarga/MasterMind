import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  scrolled?: boolean;
  className?: string;
}

export const LanguageSwitcher = ({ scrolled = false, className = "" }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'sr', label: 'SRB' },
    { code: 'en', label: 'ENG' },
    { code: 'ru', label: 'RUS' }
  ];

  return (
    <div className={`flex items-center gap-1 px-3 py-1 rounded-full border ${
      scrolled
        ? 'border-white/20 bg-white/10 text-white'
        : 'border-navy/10 bg-white text-navy'
    } text-xs font-bold tracking-wider ${className}`}>
      <Globe size={14} />
      <div className="flex gap-1 ml-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-2 py-0.5 rounded transition-colors ${
              i18n.language === lang.code
                ? scrolled
                  ? 'bg-white/20 text-white'
                  : 'bg-navy/10 text-navy'
                : scrolled
                ? 'text-white/60 hover:text-white'
                : 'text-navy/60 hover:text-navy'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

