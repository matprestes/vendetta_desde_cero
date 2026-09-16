'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LanguageSelector } from './components/LanguageSelector';
import { ServerStatusBadge } from './components/ServerStatusBadge';
import { LoginForm } from './components/LoginForm';
import { LoginMeta } from './components/LoginMeta';
import { TrailerAside } from './components/TrailerAside';
import type { SupportedLanguage, ServerUniverseOption } from './types';

const INITIAL_SERVER: ServerUniverseOption = {
  value: 's1',
  label: 'Servidor 1',
  open: true,
  registered: 173,
  online: 14,
  statusLine: 'Servidor 1: Open',
};

export default function LoginPage() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('es');
  const [currentServer, setCurrentServer] = useState<ServerUniverseOption>(INITIAL_SERVER);

  const handleServerChange = (newServer: ServerUniverseOption) => {
    setCurrentServer(newServer);
  };

  return (
    <div className="vendetta-login-body min-h-screen">
      <main className="vendetta-login-main" id="vendetta-main-content">
        <div className="vendetta-login-hero" id="vendetta-login-hero">
          {/* Vendetta Main Mafia Logo */}
          <div className="vendetta-login-logo" id="vendetta-login-logo">
            <Image
              src="https://vendettalegacy.es/img/vendetta-theme/vendetta-logo.png"
              width={2080}
              height={560}
              alt="Vendetta"
              priority
              referrerPolicy="no-referrer"
              className="vendetta-logo-image"
              unoptimized
            />
          </div>

          <div className="vendetta-login-stack" id="vendetta-login-stack">
            <div className="vendetta-login-row">
              {/* Primary Login Panel */}
              <div className="vendetta-login-primary" id="vendetta-login-primary">
                <div className="vendetta-login-panel" id="vendetta-login-panel">
                  {/* Language flags row */}
                  <LanguageSelector
                    currentLang={currentLang}
                    onSelectLang={setCurrentLang}
                  />

                  {/* Server status indicator banner */}
                  <ServerStatusBadge
                    statusText={currentServer.statusLine || `${currentServer.label}: Open`}
                    isOpen={currentServer.open}
                  />

                  {/* Main login form */}
                  <LoginForm
                    onServerChange={handleServerChange}
                    currentServer={currentServer}
                  />
                </div>

                {/* Server and game metadata info */}
                <LoginMeta
                  onlineCount={currentServer.online}
                  registeredCount={currentServer.registered}
                  version="1.0.8"
                />
              </div>

              {/* Aside Trailer and APK download teaser */}
              <TrailerAside />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
