'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  projects: [
    { label: 'FEYD', href: '#projects' },
    { label: 'ROVUN', href: '#projects' },
    { label: 'Interview AI', href: '#projects' },
    { label: 'Jal Setu', href: '#projects' },
  ],
  navigate: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/dhairyaaroraji', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhairya-arora-5b277a426', external: true },
    { label: 'Email', href: 'mailto:dhairyaarora20@gmail.com', external: false },
  ],
};

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setShowBackToTop(scrollTop > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SVG circle for scroll progress
  const circumference = 2 * Math.PI * 18;
  const dashOffset = circumference * (1 - scrollProgress);

  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{ background: '#1A1818' }}
    >
      {/* Large watermark name */}
      <div
        className="absolute bottom-8 left-0 right-0 pointer-events-none select-none overflow-hidden"
        style={{
          fontSize: 'clamp(5rem, 15vw, 14rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          color: 'rgba(232, 228, 224, 0.03)',
          lineHeight: 0.85,
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        DHAIRYA
      </div>

      <div className="shell relative z-10">
        {/* Top — 3 column links */}
        <div className="grid sm:grid-cols-3 gap-12 mb-16">
          {/* Projects */}
          <div>
            <p
              className="font-mono text-xs font-semibold mb-4"
              style={{
                color: 'rgba(232, 228, 224, 0.45)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Projects
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-300"
                    style={{ color: 'rgba(232, 228, 224, 0.7)' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#E8E4E0';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'rgba(232, 228, 224, 0.7)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <p
              className="font-mono text-xs font-semibold mb-4"
              style={{
                color: 'rgba(232, 228, 224, 0.45)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.navigate.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-300"
                    style={{ color: 'rgba(232, 228, 224, 0.7)' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#E8E4E0';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'rgba(232, 228, 224, 0.7)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="font-mono text-xs font-semibold mb-4"
              style={{
                color: 'rgba(232, 228, 224, 0.45)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm transition-colors duration-300"
                    style={{ color: 'rgba(232, 228, 224, 0.7)' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#E8E4E0';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'rgba(232, 228, 224, 0.7)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: 'rgba(196, 176, 176, 0.12)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span
              className="font-semibold text-lg"
              style={{ color: '#E8E4E0' }}
            >
              DA<span style={{ color: '#C4B0B0' }}>.</span>
            </span>
            <span className="text-sm" style={{ color: 'rgba(232, 228, 224, 0.45)' }}>
              © 2026 Dhairya Arora
            </span>
            <span className="hidden sm:inline text-xs font-mono" style={{ color: 'rgba(232, 228, 224, 0.3)' }}>
              Designed &amp; built with Next.js
            </span>
          </div>

          {/* Back to top with scroll progress ring */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: showBackToTop ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 text-sm transition-colors duration-300"
            style={{ color: 'rgba(232, 228, 224, 0.7)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#E8E4E0';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(232, 228, 224, 0.7)';
            }}
            aria-label="Back to top"
          >
            Back to top
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="absolute inset-0 -rotate-90"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="rgba(196, 176, 176, 0.16)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="#C4B0B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  style={{ transition: 'stroke-dashoffset 0.1s ease' }}
                />
              </svg>
              <ArrowUp size={14} style={{ color: '#C4B0B0' }} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
