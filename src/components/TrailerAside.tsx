'use client';

import Image from 'next/image';

export function TrailerAside() {
  return (
    <aside className="vendetta-trailer-aside" aria-label="Trailer" id="vendetta-trailer-aside">
      <div className="vendetta-trailer-box">
        <h2 className="vendetta-trailer-title" id="vendetta-trailer-title">
          Trailer
        </h2>
        <div className="vendetta-trailer-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/ncKDjS7UxA4?start=448&amp;rel=0&amp;modestbranding=1"
            title="Vendetta Legacy Trailer"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="vendetta-trailer-iframe"
          />
        </div>
        <div className="vendetta-apk-teaser" aria-label="Download app" id="vendetta-apk-teaser">
          <a
            href="https://vendettalegacy.es/api/mobile/apk-download"
            className="vendetta-apk-teaser__link"
            download
            id="vendetta-apk-download-link"
          >
            <Image
              className="vendetta-apk-teaser__icon"
              src="https://vendettalegacy.es/img/vendetta-theme/app-apk-icon.png"
              width={72}
              height={72}
              alt="Vendetta Legacy Android app"
              loading="lazy"
              referrerPolicy="no-referrer"
              unoptimized
            />
            <p className="vendetta-apk-teaser__label">Download app</p>
          </a>
        </div>
      </div>
    </aside>
  );
}
