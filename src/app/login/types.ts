export interface ServerUniverseOption {
  value: string;
  label: string;
  open: boolean;
  registered: number;
  online: number;
  opensAtUnix?: number | null;
  statusLine?: string;
  speedMultiplier?: string;
}

export interface ServerStatsResponse {
  slug: string;
  registered: number;
  online: number;
  open: boolean;
  allows_registration: boolean;
  opens_at: string | null;
  opens_at_unix: number | null;
  status_line: string;
}

export interface LoginFormState {
  error: string | null;
  success: boolean;
  message?: string;
}

export type SupportedLanguage = 'en' | 'es' | 'it' | 'fr' | 'nl' | 'pt' | 'de';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  countryCode: string; // for flagcdn
}
