import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Velvet Bean Coffee Co.',
  description: 'A simple, elegant home on the web for your neighborhood coffee shop.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <div className="brand-mark">
              <span className="brand-dot" aria-hidden />
              <div>
                <p className="brand-kicker">EST. 2025</p>
                <h1 className="brand-title">Velvet Bean</h1>
              </div>
            </div>
            <nav aria-label="Primary" className="nav-links">
              <a href="#story">Story</a>
              <a href="#menu">Menu</a>
              <a href="#visit">Visit</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <p>Morning to midnight pours, every day.</p>
            <small>© {new Date().getFullYear()} Velvet Bean Coffee Co.</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
