import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Vendetta - Mafia MMORTS',
  description: 'Juego de estrategia mafia por navegador Vendetta Legacy. Gestiona tu familia criminal, edificios, tropas y conquista la ciudad.',
  openGraph: {
    title: 'Vendetta - Mafia MMORTS',
    description: 'Juego de estrategia mafia por navegador Vendetta Legacy. Gestiona tu familia criminal, edificios, tropas y conquista la ciudad.',
    type: 'website',
    url: 'https://vendettalegacy.es/login',
    images: [
      {
        url: 'https://vendettalegacy.es/img/vendetta-theme/vendetta-logo.png',
        width: 2080,
        height: 560,
        alt: 'Vendetta Legacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendetta - Mafia MMORTS',
    description: 'Juego de estrategia mafia por navegador Vendetta Legacy. Gestiona tu familia criminal, edificios, tropas y conquista la ciudad.',
    images: ['https://vendettalegacy.es/img/vendetta-theme/vendetta-logo.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
