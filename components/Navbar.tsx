'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Web Development', href: '#projects' },
  { label: 'App Development', href: '#skills' },
  { label: 'UI/UX Design', href: '#about' },
  { label: 'Graphic Design', href: '#hackathons' },
  { label: 'My story', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      // Format: 2:40pm
      const time = now
        .toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
        .toLowerCase()
        .replace(' ', '');

      // Format: 2 November, 2026
      const day = now.getDate();
      const month = now.toLocaleDateString('en-US', { month: 'long' });
      const year = now.getFullYear();
      const date = `${day} ${month}, ${year}`;

      setTimeStr(time);
      setDateStr(date);
    }

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setStuck(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none select-none ${
          stuck
            ? 'py-3 backdrop-blur-md border-b'
            : 'py-5 bg-transparent'
        }`}
        style={{
          backgroundColor: stuck ? 'var(--background)' : 'transparent',
          borderColor: stuck ? 'var(--line)' : 'transparent',
          boxShadow: stuck ? '0 1px 0 var(--line)' : 'none',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* Left / Center-Left Nav Links matching reference */}
          <nav className="hidden lg:flex items-center gap-7 pointer-events-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-[13.5px] font-normal tracking-normal transition-colors duration-200 text-[#4A4543] hover:text-[#1A1818] dark:text-[#A8A199] dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: Local time pill matching exact reference image */}
          <div className="flex items-center gap-4 ml-auto pr-16 sm:pr-24 lg:pr-28 pointer-events-auto">
            {timeStr && (
              <div
                className="clock px-4 sm:px-5 py-2 rounded-full border text-xs font-mono flex items-center gap-2 backdrop-blur-sm"
                style={{
                  borderColor: 'var(--line)',
                  background: 'var(--surface)',
                  color: 'var(--foreground)',
                }}
              >
                <span className="text-subtle">Local time</span>
                <span className="font-semibold text-foreground">{timeStr}</span>
                <span className="text-subtle">·</span>
                <span className="text-subtle">{dateStr}</span>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full border border-line text-foreground pointer-events-auto"
              style={{ background: 'var(--surface)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 lg:hidden flex flex-col justify-between pt-28 pb-10 px-8"
            style={{ background: 'var(--background)' }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left py-3 text-2xl font-bold tracking-tight border-b border-line text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-line">
              <span className="text-xs text-subtle font-mono">
                {timeStr} · {dateStr}
              </span>
              <span className="chip text-xs">Available for work</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
