'use client';

import Image from 'next/image';
import type { SupportedLanguage, LanguageInfo } from '@/app/login/types';

interface LanguageSelectorProps {
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
}

const LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', countryCode: 'gb' },
  { code: 'es', name: 'Español', countryCode: 'es' },
  { code: 'it', name: 'Italiano', countryCode: 'it' },
  { code: 'fr', name: 'Français', countryCode: 'fr' },
  { code: 'nl', name: 'Nederlands', countryCode: 'nl' },
  { code: 'pt', name: 'Português', countryCode: 'pt' },
  { code: 'de', name: 'Deutsch', countryCode: 'de' },
];

export function LanguageSelector({ currentLang, onSelectLang }: LanguageSelectorProps) {
  return (
    <div className="vendetta-lang-row" id="vendetta-lang-selector" aria-label="Language selection">
      {LANGUAGES.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelectLang(lang.code)}
            className={`vendetta-lang-flag ${isActive ? 'is-active' : ''}`}
            title={lang.name}
            aria-label={lang.name}
            aria-pressed={isActive}
          >
            <Image
              src={`https://flagcdn.com/24x18/${lang.countryCode}.png`}
              width={24}
              height={18}
              alt={lang.code.toUpperCase()}
              referrerPolicy="no-referrer"
              className="vendetta-flag-img"
              unoptimized
            />
          </button>
        );
      })}
    </div>
  );
}
