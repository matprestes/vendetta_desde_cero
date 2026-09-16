'use client';

interface LoginMetaProps {
  onlineCount: number;
  registeredCount: number;
  version?: string;
}

export function LoginMeta({
  onlineCount,
  registeredCount,
  version = '1.0.8',
}: LoginMetaProps) {
  return (
    <div className="vendetta-login-meta" aria-label="Server info" id="vendetta-login-meta">
      <p className="vendetta-meta-line vendetta-meta-line--inline">
        <span>
          Players online:{' '}
          <strong id="vendetta-stat-online" className="vendetta-meta-num">
            {onlineCount}
          </strong>
        </span>
        <span>
          Version:{' '}
          <a
            href="https://vendettalegacy.es/changelog"
            className="vendetta-meta-version-link"
            target="_blank"
            rel="noopener noreferrer"
            id="vendetta-meta-version"
          >
            <strong className="vendetta-meta-num">{version}</strong>
          </a>
        </span>
      </p>

      <p className="vendetta-meta-line">
        Registered players:{' '}
        <strong id="vendetta-stat-registered" className="vendetta-meta-num">
          {registeredCount}
        </strong>
      </p>

      <div className="vendetta-meta-legal">
        <a
          href="https://vendettalegacy.es/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          id="vendetta-link-privacy"
        >
          Privacy Policy
        </a>
        <span className="vendetta-meta-dot">·</span>
        <a
          href="https://vendettalegacy.es/terms-of-use"
          target="_blank"
          rel="noopener noreferrer"
          id="vendetta-link-terms"
        >
          Terms of Use
        </a>
      </div>

      <div className="vendetta-social-row">
        <a
          className="vendetta-social"
          href="https://www.facebook.com/Vendetta.net"
          target="_blank"
          rel="noopener noreferrer"
          id="vendetta-link-facebook"
        >
          Facebook
        </a>
        <a
          className="vendetta-social"
          href="https://vendetta-int.foroactivo.com/"
          target="_blank"
          rel="noopener noreferrer"
          id="vendetta-link-forum"
        >
          Forum
        </a>
      </div>
    </div>
  );
}
