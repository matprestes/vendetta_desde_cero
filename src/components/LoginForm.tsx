'use client';

import { useState, useActionState } from 'react';
import { loginAction } from '@/app/login/actions';
import type { ServerUniverseOption, LoginFormState } from '@/app/login/types';

interface LoginFormProps {
  onServerChange: (server: ServerUniverseOption) => void;
  currentServer: ServerUniverseOption;
}

const SERVER_OPTIONS: ServerUniverseOption[] = [
  {
    value: 's1',
    label: 'Servidor 1',
    open: true,
    registered: 173,
    online: 14,
    statusLine: 'Servidor 1: Open',
  },
  {
    value: 's2',
    label: 'Servidor 2',
    open: true,
    registered: 94,
    online: 6,
    statusLine: 'Servidor 2: Open',
  },
  {
    value: 's3',
    label: 'Servidor 3 sin vip x1',
    open: true,
    registered: 48,
    online: 3,
    statusLine: 'Servidor 3 sin vip x1: Open',
  },
];

export function LoginForm({ onServerChange, currentServer }: LoginFormProps) {
  const [selectedUni, setSelectedUni] = useState<string>(currentServer.value);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [state, formAction, isPending] = useActionState<LoginFormState | null, FormData>(
    loginAction,
    null
  );

  const handleUniChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedUni(val);
    const found = SERVER_OPTIONS.find((s) => s.value === val) || SERVER_OPTIONS[0];
    onServerChange(found);
  };

  const handleDemoFill = (demoUser: string, demoPass: string) => {
    setUsername(demoUser);
    setPassword(demoPass);
  };

  const isEnterDisabled = isPending || !currentServer.open;

  return (
    <div>
      {/* Error / Success feedback */}
      {state?.error && (
        <div
          className="vendetta-alert vendetta-alert--error"
          role="alert"
          id="vendetta-login-error"
        >
          <span className="vendetta-alert-icon">⚠</span>
          <span>{state.error}</span>
        </div>
      )}

      {state?.success && (
        <div
          className="vendetta-alert vendetta-alert--success"
          role="status"
          id="vendetta-login-success"
        >
          <span className="vendetta-alert-icon">✓</span>
          <span>{state.message}</span>
        </div>
      )}

      <form
        className="vendetta-login-form"
        action={formAction}
        autoComplete="on"
        id="vendetta-login-form"
      >
        <div className="vendetta-field">
          <label className="vendetta-label" htmlFor="vendetta-uni">
            SERVER:
          </label>
          <div className="vendetta-input-wrap vendetta-input-wrap--dark">
            <select
              className="vendetta-input vendetta-select vendetta-select--dark"
              id="vendetta-uni"
              name="uni"
              value={selectedUni}
              onChange={handleUniChange}
            >
              {SERVER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} data-label={opt.label}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="vendetta-field">
          <label className="vendetta-label" htmlFor="vendetta-name">
            USERNAME:
          </label>
          <div className="vendetta-input-wrap">
            <input
              className="vendetta-input"
              id="vendetta-name"
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
              autoComplete="username"
              placeholder="Nombre de mafioso"
            />
          </div>
        </div>

        <div className="vendetta-field">
          <label className="vendetta-label" htmlFor="vendetta-password">
            PASSWORD:
          </label>
          <div className="vendetta-input-wrap">
            <input
              className="vendetta-input"
              id="vendetta-password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              maxLength={128}
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          id="vendetta-enter-btn"
          className={`vendetta-enter ${isEnterDisabled ? 'is-disabled' : ''}`}
          disabled={isEnterDisabled}
          aria-disabled={isEnterDisabled ? 'true' : 'false'}
        >
          {isPending ? 'CONNECTING...' : 'ENTER'}
        </button>

        {/* Quick test mafioso shortcuts */}
        <div className="vendetta-quick-demo">
          <span className="vendetta-quick-demo__title">Cuentas de prueba:</span>
          <div className="vendetta-quick-demo__buttons">
            <button
              type="button"
              onClick={() => handleDemoFill('DonCorleone', 'password123')}
              className="vendetta-demo-pill"
              id="demo-fill-corleone"
            >
              Don Corleone
            </button>
            <button
              type="button"
              onClick={() => handleDemoFill('TonySoprano', 'password123')}
              className="vendetta-demo-pill"
              id="demo-fill-soprano"
            >
              Tony Soprano
            </button>
          </div>
        </div>
      </form>

      <div className="vendetta-form-links" id="vendetta-form-links">
        <a href="https://vendettalegacy.es/register" id="vendetta-register-link">
          Register here
        </a>
        <a
          id="vendetta-forgot-link"
          href={`https://vendettalegacy.es/forgot-password?uni=${encodeURIComponent(selectedUni)}`}
        >
          Forgot your password?
        </a>
      </div>

      <p className="vendetta-terms-hint">
        By logging in you accept the game rules and privacy terms.
      </p>
    </div>
  );
}
