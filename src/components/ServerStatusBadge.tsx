'use client';

interface ServerStatusBadgeProps {
  statusText: string;
  isOpen: boolean;
}

export function ServerStatusBadge({ statusText, isOpen }: ServerStatusBadgeProps) {
  return (
    <div className="vendetta-server-block" id="vendetta-server-block">
      <span className="vendetta-server-label">SERVER:</span>
      <div className={`vendetta-server-glow ${isOpen ? 'is-open' : 'is-closed'}`}>
        <span className="vendetta-status-dot" aria-hidden="true" />
        <span id="vendetta-server-status" className="vendetta-server-status-text">
          {statusText}
        </span>
      </div>
    </div>
  );
}
