'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: 'Início', 
      href: '/',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    { 
      label: 'Biofábricas', 
      href: '/biofabricas',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
        </svg>
      )
    },
    { 
      label: 'Sobre', 
      href: '/sobre',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )
    },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo-tena.svg"
              alt="Tena Soluções Sustentáveis"
              width={140}
              height={34}
              className={styles.logoImage}
              priority
            />
          </a>

          <div className={styles.desktopMenu}>
            <nav className={styles.navLinks}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  <span className={styles.navIcon}>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="/#contato" className={styles.navCta}>
              Fale Conosco
            </a>
          </div>

          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.btnOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.menuOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${styles.mobileNavLink}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.navIcon}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="/#contato" className={styles.navCtaMobile} onClick={() => setMenuOpen(false)}>
          Fale Conosco
        </a>
      </div>
    </>
  );
}
